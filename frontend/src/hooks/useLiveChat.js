import { useState, useEffect, useRef, useCallback } from "react";
import { supabase } from "../lib/supabaseClient";

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
  const channelRef = useRef(null);

  useEffect(() => {
    let isUnmounted = false;

    // 1. Fetch last 50 messages for history on mount
    const fetchHistory = async () => {
      try {
        const { data, error } = await supabase
          .from("chat_messages")
          .select("id, sender, session_id, text, timestamp")
          .order("created_at", { ascending: true })
          .limit(50);

        if (!error && data && !isUnmounted) {
          const formatted = data.map((row) => ({
            id: row.id,
            sender: row.sender,
            sessionId: row.session_id,
            text: row.text,
            timestamp: row.timestamp,
          }));
          setMessages(formatted);
        }
      } catch (e) {
        console.error("[LiveChat] History fetch failed:", e);
      }
    };

    fetchHistory();

    // 2. Subscribe to Realtime inserts on chat_messages table
    const channel = supabase
      .channel("chat-room")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "chat_messages" },
        (payload) => {
          if (isUnmounted) return;
          const row = payload.new;
          if (!row) return;
          const newMsg = {
            id: row.id,
            sender: row.sender,
            sessionId: row.session_id,
            text: row.text,
            timestamp: row.timestamp,
          };
          setMessages((prev) => {
            if (prev.some((m) => m.id === newMsg.id)) return prev;
            return [...prev, newMsg];
          });
        }
      )
      .subscribe((status, err) => {
        if (isUnmounted) return;
        if (status === "SUBSCRIBED") {
          setIsConnected(true);
        } else if (status === "CLOSED" || status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
          setIsConnected(false);
          if (err) {
            console.warn("[LiveChat] Supabase subscription status:", status, err);
          }
        }
      });

    channelRef.current = channel;

    return () => {
      isUnmounted = true;
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
        channelRef.current = null;
      }
    };
  }, []);

  // Send message: insert into Supabase table (Realtime broadcasts to all subscribers)
  const sendMessage = useCallback(
    async (text, senderName) => {
      const trimmed = (text || "").trim();
      if (!trimmed) return;

      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      const { error } = await supabase.from("chat_messages").insert({
        sender: (senderName || "Passenger").substring(0, 30),
        session_id: sessionId,
        text: trimmed.substring(0, 500),
        timestamp,
      });

      if (error) {
        console.error("[LiveChat] Failed to send message:", error.message);
        // Optimistic local fallback so the sender still sees their own message
        const localMsg = {
          id: "local_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
          sender: senderName || "Passenger",
          sessionId,
          text: trimmed,
          timestamp,
        };
        setMessages((prev) => [...prev, localMsg]);
      }
    },
    [sessionId]
  );

  return {
    messages,
    isConnected,
    sendMessage,
    sessionId,
  };
}
