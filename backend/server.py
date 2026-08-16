from fastapi import FastAPI, APIRouter, WebSocket, WebSocketDisconnect
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'viral_radio')]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

# Passenger connection manager for real-time live listeners
class PassengerManager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []
        self.base_organic_count = 18

    def get_current_count(self) -> int:
        return self.base_organic_count + len(self.active_connections)

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
        await self.broadcast_count()

    def disconnect(self, websocket: WebSocket):
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)

    async def broadcast_count(self):
        count = self.get_current_count()
        payload = {"type": "count", "count": count}
        for connection in list(self.active_connections):
            try:
                await connection.send_json(payload)
            except Exception:
                pass

passenger_manager = PassengerManager()

# Real-time live passenger chat manager
class ChatManager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []
        self.recent_messages: list[dict] = []  # Lightning fast in-memory buffer

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
        # Send instant in-memory history on connect (0ms delay)
        try:
            await websocket.send_json({"type": "history", "messages": self.recent_messages})
        except Exception:
            pass

    def disconnect(self, websocket: WebSocket):
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)

    async def broadcast(self, message: dict):
        self.recent_messages.append(message)
        if len(self.recent_messages) > 100:
            self.recent_messages.pop(0)

        # Broadcast to all active connections immediately
        for connection in list(self.active_connections):
            try:
                await connection.send_json({"type": "message", "message": message})
            except Exception:
                pass

chat_manager = ChatManager()

@api_router.get("/passengers/count")
async def get_passengers_count():
    return {"count": passenger_manager.get_current_count()}

@api_router.get("/chat/messages")
async def get_chat_messages():
    return {"messages": chat_manager.recent_messages}

@api_router.websocket("/ws/passengers")
async def websocket_passengers(websocket: WebSocket):
    await passenger_manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            # Handle client heartbeats or status updates if needed
    except WebSocketDisconnect:
        passenger_manager.disconnect(websocket)
        await passenger_manager.broadcast_count()
    except Exception:
        passenger_manager.disconnect(websocket)
        await passenger_manager.broadcast_count()

@api_router.websocket("/ws/chat")
async def websocket_chat(websocket: WebSocket):
    await chat_manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_json()
            if data.get("type") == "ping":
                await websocket.send_json({"type": "pong"})
                continue

            sender = (data.get("sender") or "").strip() or "Passenger"
            text = (data.get("text") or "").strip()
            session_id = data.get("sessionId") or ""
            if text:
                msg = {
                    "id": str(uuid.uuid4()),
                    "sender": sender[:30],  # Limit name length
                    "sessionId": session_id,
                    "text": text[:500],     # Limit message length
                    "timestamp": datetime.now(timezone.utc).strftime("%H:%M")
                }
                await chat_manager.broadcast(msg)
    except WebSocketDisconnect:
        chat_manager.disconnect(websocket)
    except Exception:
        chat_manager.disconnect(websocket)

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)


app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()