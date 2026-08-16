import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, MessageSquare } from "lucide-react";
import { useLiveChat } from "../hooks/useLiveChat";

export default function LiveChatDrawer({ open, onClose }) {
  const [name, setName] = useState(() => localStorage.getItem("karwaan_passenger_name") || "");
  const [tempName, setTempName] = useState("");
  const [inputMsg, setInputMsg] = useState("");
  const bottomRef = useRef(null);

  const { messages, isConnected, sendMessage, sessionId } = useLiveChat();

  // Scroll to bottom when new messages arrive or drawer opens
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
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

    sendMessage(trimmed, name);
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
              background: "rgba(18, 14, 10, 0.94)",
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
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
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
                    className="w-full py-2.5 rounded-xl bg-[#e6b64c] hover:bg-[#f3c662] text-black font-tech font-semibold text-xs tracking-wider uppercase transition shadow-lg disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                  >
                    Join Passenger Chat
                  </button>
                </div>
              </form>
            ) : (
              // Active Chat view
              <>
                {/* Passenger status bar */}
                <div className="px-4 py-2 bg-black/30 border-b border-white/5 flex items-center justify-between text-xs font-body">
                  <span className="text-white/60">
                    Chatting as: <strong className="text-[#e6b64c] font-medium">{name}</strong>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-tech uppercase tracking-wide flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full inline-block ${isConnected ? "bg-emerald-400 animate-ping" : "bg-amber-400"}`} />
                    {isConnected ? "Live Sync" : "Connecting..."}
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
                      // Check if message belongs to this tab session or user name
                      const isMe = (m.sessionId && m.sessionId === sessionId) || (!m.sessionId && m.sender === name);

                      return (
                        <div key={m.id || Math.random()} className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                          <div className="flex items-center gap-1.5 mb-1 px-1">
                            <span className={`text-[11px] font-tech tracking-wide ${isMe ? "text-[#e6b64c]" : "text-white/60"}`}>
                              {m.sender} {isMe ? "(You)" : ""}
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
