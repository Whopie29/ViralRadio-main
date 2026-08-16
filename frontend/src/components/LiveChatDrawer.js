import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, MessageSquare } from "lucide-react";

export default function LiveChatDrawer({ open, onClose }) {
  const [name, setName] = useState(() => localStorage.getItem("karwaan_passenger_name") || "");
  const [tempName, setTempName] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputMsg, setInputMsg] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const wsRef = useRef(null);
  const reconnectTimerRef = useRef(null);
  const bottomRef = useRef(null);
  const unmountedRef = useRef(false);

  // Helper to determine WebSocket URL
  const getWsUrl = useCallback(() => {
    try {
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const host = window.location.hostname || "localhost";

      if (process.env.REACT_APP_BACKEND_URL) {
        const backendUrl = process.env.REACT_APP_BACKEND_URL.replace(
          /^http(s?):\/\//,
          "$1" === "s" ? "wss://" : "ws://"
        );
        return `${backendUrl}/api/ws/chat`;
      }

      if (window.location.port === "3000") {
        return `${protocol}//${host}:8000/api/ws/chat`;
      }

      return `${protocol}//${window.location.host}/api/ws/chat`;
    } catch {
      return "ws://localhost:8000/api/ws/chat";
    }
  }, []);

  // Connect / manage WebSocket lifecycle
  useEffect(() => {
    if (!open || !name) {
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
      return;
    }

    unmountedRef.current = false;

    const connect = () => {
      if (unmountedRef.current) return;
      const url = getWsUrl();

      try {
        const ws = new WebSocket(url);
        wsRef.current = ws;

        ws.onopen = () => {
          if (unmountedRef.current) return;
          setIsConnected(true);
        };

        ws.onmessage = (event) => {
          if (unmountedRef.current) return;
          try {
            const data = JSON.parse(event.data);
            if (data.type === "history") {
              setMessages(data.messages || []);
            } else if (data.type === "message" && data.message) {
              setMessages((prev) => {
                // Prevent duplicate message ids
                if (prev.some((m) => m.id === data.message.id)) return prev;
                return [...prev, data.message];
              });
            }
          } catch (err) {
            console.error("Chat message parse error", err);
          }
        };

        ws.onclose = () => {
          if (unmountedRef.current) return;
          setIsConnected(false);
          // Try reconnecting after 3 seconds if drawer is still open
          if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
          reconnectTimerRef.current = setTimeout(connect, 3000);
        };

        ws.onerror = () => {
          if (unmountedRef.current) return;
          setIsConnected(false);
        };
      } catch (err) {
        console.error("WebSocket init error", err);
        if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
        reconnectTimerRef.current = setTimeout(connect, 3000);
      }
    };

    connect();

    return () => {
      unmountedRef.current = true;
      if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
  }, [open, name, getWsUrl]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSaveName = (e) => {
    e?.preventDefault?.();
    const trimmed = tempName.trim();
    if (trimmed) {
      localStorage.setItem("karwaan_passenger_name", trimmed);
      setName(trimmed);
    }
  };

  const handleSendMessage = (e) => {
    e?.preventDefault?.();
    const trimmed = inputMsg.trim();
    if (!trimmed) return;

    const newMsg = {
      id: "local_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
      sender: name,
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
    };

    // If WebSocket is open, send to server
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({
          sender: name,
          text: trimmed,
        })
      );
    } else {
      // Fallback: append locally if offline/reconnecting so message is visible
      setMessages((prev) => [...prev, newMsg]);
    }

    setInputMsg("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[89]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.div
            className="fixed top-0 left-0 bottom-0 w-full sm:w-96 glass-panel z-[90] flex flex-col shadow-2xl border-r border-white/10"
            style={{
              background: "rgba(18, 14, 10, 0.92)",
              backdropFilter: "blur(24px)",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 240 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#e6b64c]/15 flex items-center justify-center text-[#e6b64c]">
                  <MessageSquare size={17} />
                </div>
                <div>
                  <div className="font-tech text-xs tracking-wider uppercase text-[#efe6d0] font-semibold flex items-center gap-2">
                    Passenger Lounge
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${
                        isConnected ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                      }`}
                      title={isConnected ? "Live Connected" : "Connecting to cabin..."}
                    />
                  </div>
                  <div className="font-body text-[11px] text-white/50">Live bus conversation</div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                title="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content: If no name, ask for passenger name once */}
            {!name ? (
              <form onSubmit={handleSaveName} className="flex-1 flex flex-col justify-center items-center p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#e6b64c]/15 flex items-center justify-center text-[#e6b64c] mb-4 shadow-inner">
                  <User size={28} />
                </div>
                <h3 className="font-serif text-lg text-[#efe6d0] font-semibold mb-1">Welcome aboard!</h3>
                <p className="font-body text-xs text-white/60 mb-6 max-w-xs leading-relaxed">
                  Enter your name or seat nickname to join the live passenger chat during the journey.
                </p>

                <div className="w-full space-y-3">
                  <input
                    type="text"
                    maxLength={30}
                    placeholder="e.g. Rohini, Passenger #42"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/20 text-[#efe6d0] font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-[#e6b64c] transition"
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={!tempName.trim()}
                    className="w-full py-2.5 rounded-xl bg-[#e6b64c] hover:bg-[#f3c662] text-black font-tech font-semibold text-xs tracking-wider uppercase transition shadow-lg disabled:opacity-40 disabled:pointer-events-none"
                  >
                    Join Passenger Chat
                  </button>
                </div>
              </form>
            ) : (
              // Active Chat view
              <>
                {/* Passenger bar - static name display without edit option */}
                <div className="px-4 py-2 bg-black/30 border-b border-white/5 flex items-center justify-between text-xs font-body">
                  <span className="text-white/60">
                    Chatting as: <strong className="text-[#e6b64c] font-medium">{name}</strong>
                  </span>
                  <span className="text-[10px] text-white/40 font-tech uppercase tracking-wide">
                    {isConnected ? "Live" : "Syncing"}
                  </span>
                </div>

                {/* Messages stream */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center text-white/40 text-xs font-body px-4 space-y-2">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/30">
                        <MessageSquare size={20} />
                      </div>
                      <p>The cabin is quiet.</p>
                      <p className="text-[11px] text-white/30">Say hello to fellow passengers travelling along with you!</p>
                    </div>
                  ) : (
                    messages.map((m) => {
                      const isMe = m.sender === name;
                      return (
                        <div key={m.id || Math.random()} className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                          <div className="flex items-center gap-1.5 mb-1 px-1">
                            <span className="text-[11px] font-tech tracking-wide text-white/50">
                              {m.sender}
                            </span>
                            <span className="text-[10px] text-white/30">{m.timestamp}</span>
                          </div>
                          <div
                            className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs font-body leading-relaxed break-words shadow-md ${
                              isMe
                                ? "bg-gradient-to-br from-[#e6b64c] to-[#cfa038] text-black font-medium rounded-br-xs"
                                : "bg-white/10 text-[#efe6d0] border border-white/10 rounded-bl-xs"
                            }`}
                          >
                            {m.text}
                          </div>
                        </div>
                      );
                    })
                  )}
                  <div ref={bottomRef} />
                </div>

                {/* Input area */}
                <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-black/20 flex gap-2">
                  <input
                    type="text"
                    maxLength={500}
                    placeholder="Type message to passengers..."
                    value={inputMsg}
                    onChange={(e) => setInputMsg(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-black/40 border border-white/15 text-[#efe6d0] font-body text-xs placeholder:text-white/30 focus:outline-none focus:border-[#e6b64c] transition"
                  />
                  <button
                    type="submit"
                    disabled={!inputMsg.trim()}
                    className="w-9 h-9 rounded-xl bg-[#e6b64c] hover:bg-[#f3c662] text-black flex items-center justify-center transition shadow-md disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                    title="Send message"
                  >
                    <Send size={15} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
