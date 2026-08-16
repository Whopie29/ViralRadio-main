import { useState, useEffect, useRef, useCallback } from "react";

// Unique session ID per browser tab
function getTabSessionId() {
  try {
    let sid = sessionStorage.getItem("karwaan_tab_session_id");
    if (!sid) {
      sid = "tab_" + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
      sessionStorage.setItem("karwaan_tab_session_id", sid);
    }
    return sid;
  } catch {
    return "tab_default";
  }
}

export function useLiveChat() {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const sessionId = useRef(getTabSessionId()).current;
  const wsRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);
  const pingIntervalRef = useRef(null);

  // Helper to determine WebSocket URL
  const getWsUrl = useCallback(() => {
    try {
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const host = window.location.hostname || "localhost";
      const port = process.env.REACT_APP_BACKEND_PORT || "8000";

      if (process.env.REACT_APP_BACKEND_URL) {
        const backendUrl = process.env.REACT_APP_BACKEND_URL.replace(
          /^http(s?):\/\//,
          "$1" === "s" ? "wss://" : "ws://"
        );
        return `${backendUrl}/api/ws/chat`;
      }

      if (window.location.port === "3000") {
        return `${protocol}//${host}:${port}/api/ws/chat`;
      }

      return `${protocol}//${window.location.host}/api/ws/chat`;
    } catch {
      return "ws://localhost:8000/api/ws/chat";
    }
  }, []);

  // Connect & maintain WebSocket lifecycle
  useEffect(() => {
    let isUnmounted = false;

    // Fetch message history fallback via HTTP
    const fetchHistory = async () => {
      try {
        const protocol = window.location.protocol;
        const host = window.location.hostname || "localhost";
        const port = window.location.port === "3000" ? ":8000" : (window.location.port ? `:${window.location.port}` : "");
        const res = await fetch(`${protocol}//${host}${port}/api/chat/messages`);
        if (res.ok && !isUnmounted) {
          const data = await res.json();
          if (data.messages && Array.isArray(data.messages)) {
            setMessages((prev) => {
              const existingIds = new Set(prev.map((m) => m.id));
              const fresh = data.messages.filter((m) => !existingIds.has(m.id));
              return [...fresh, ...prev];
            });
          }
        }
      } catch (e) {
        // ignore
      }
    };

    fetchHistory();

    const connectWebSocket = () => {
      if (isUnmounted) return;
      const wsUrl = getWsUrl();
      if (!wsUrl) return;

      try {
        const ws = new WebSocket(wsUrl);
        wsRef.current = ws;

        ws.onopen = () => {
          if (isUnmounted) return;
          setIsConnected(true);

          // Keepalive ping every 15s
          if (pingIntervalRef.current) clearInterval(pingIntervalRef.current);
          pingIntervalRef.current = setInterval(() => {
            if (ws.readyState === WebSocket.OPEN) {
              ws.send(JSON.stringify({ type: "ping" }));
            }
          }, 15000);
        };

        ws.onmessage = (event) => {
          if (isUnmounted) return;
          try {
            const data = JSON.parse(event.data);
            if (data.type === "pong") return;

            if (data.type === "history" && Array.isArray(data.messages)) {
              setMessages(data.messages);
            } else if (data.type === "message" && data.message) {
              setMessages((prev) => {
                if (prev.some((m) => m.id === data.message.id)) return prev;
                return [...prev, data.message];
              });
            }
          } catch (err) {
            console.error("Chat parse error", err);
          }
        };

        ws.onclose = () => {
          if (isUnmounted) return;
          setIsConnected(false);
          if (pingIntervalRef.current) clearInterval(pingIntervalRef.current);
          // Try reconnecting after 3 seconds
          if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
          reconnectTimeoutRef.current = setTimeout(connectWebSocket, 3000);
        };

        ws.onerror = () => {
          if (isUnmounted) return;
          try {
            ws.close();
          } catch {}
        };
      } catch (err) {
        console.error("WebSocket init error", err);
        if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
        reconnectTimeoutRef.current = setTimeout(connectWebSocket, 3000);
      }
    };

    connectWebSocket();

    return () => {
      isUnmounted = true;
      if (pingIntervalRef.current) clearInterval(pingIntervalRef.current);
      if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [getWsUrl]);

  // Send message function
  const sendMessage = useCallback((text, senderName) => {
    const trimmed = (text || "").trim();
    if (!trimmed) return;

    const payload = {
      sender: senderName || "Passenger",
      sessionId: sessionId,
      text: trimmed,
    };

    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(payload));
    } else {
      // Local optimistic fallback
      const localMsg = {
        id: "local_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
        sender: senderName || "Passenger",
        sessionId: sessionId,
        text: trimmed,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }),
      };
      setMessages((prev) => [...prev, localMsg]);
    }
  }, [sessionId]);

  return {
    messages,
    isConnected,
    sendMessage,
    sessionId,
  };
}
