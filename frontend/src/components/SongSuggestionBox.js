import React, { useState, useRef } from "react";
import { Music, Check, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabaseClient";

export default function SongSuggestionBox({ className = "" }) {
  const [songName, setSongName] = useState("");
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success"
  const inputRef = useRef(null);
  const resetTimerRef = useRef(null);

  const handleSubmit = async (e) => {
    e?.preventDefault?.();
    const trimmedSong = songName.trim();
    if (!trimmedSong || status === "submitting") return;

    setStatus("submitting");

    const passengerName = localStorage.getItem("karwaan_passenger_name") || "Passenger";
    const suggestionData = {
      song_title: trimmedSong,
      artist: "",
      suggested_by: passengerName,
      status: "pending",
      created_at: new Date().toISOString(),
    };

    try {
      // 1. Insert into Supabase table
      const { error } = await supabase.from("song_suggestions").insert(suggestionData);

      // 2. Local storage backup
      try {
        const localList = JSON.parse(localStorage.getItem("karwaan_song_suggestions") || "[]");
        localList.unshift({
          ...suggestionData,
          id: "local_" + Date.now(),
        });
        localStorage.setItem("karwaan_song_suggestions", JSON.stringify(localList.slice(0, 100)));
      } catch (err) {
        console.warn("[SongSuggestion] Backup warning:", err);
      }

      if (error) {
        console.warn("[SongSuggestion] Supabase insert warning:", error.message);
      }

      // 3. Mark as success with tick
      setStatus("success");
      setSongName("");

      // 4. Auto reset after 2.2 seconds so user can immediately suggest another song
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => {
        setStatus("idle");
      }, 2200);
    } catch (err) {
      console.error("[SongSuggestion] Error submitting:", err);
      setStatus("success");
      setSongName("");
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => {
        setStatus("idle");
      }, 2200);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div
      className={`relative z-[80] select-none shrink-0 w-[210px] sm:w-[240px] md:w-[260px] ${className}`}
      data-testid="song-suggestion-container"
    >
      {/* Strict fixed dimensions container */}
      <div className="w-full h-[46px] sm:h-[52px] flex items-center justify-between px-3 sm:px-3.5 rounded-full bg-gradient-to-r from-[#231b12]/95 via-[#1a140d]/95 to-[#261c13]/95 backdrop-blur-xl border border-[rgba(233,201,120,0.22)] shadow-[0_12px_35px_-8px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden">
        
        {/* Left Icon */}
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#d47a3f]/20 to-[#e6b64c]/20 border border-[rgba(233,201,120,0.3)] flex items-center justify-center text-[#e6b64c] shrink-0 shadow-inner mr-2">
          <Music size={13} className="shrink-0" />
        </div>

        {/* Form or Success State */}
        <div className="flex-1 min-w-0 flex items-center">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-1.5 min-w-0 w-full"
              >
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 shrink-0">
                  <Check size={10} strokeWidth={3} />
                </div>
                <div className="flex flex-col min-w-0 flex-1 truncate">
                  <span className="font-body font-bold text-[11px] sm:text-xs text-emerald-400 tracking-wide truncate">
                    Suggested! ✓
                  </span>
                  <span className="font-tech text-[8.5px] sm:text-[9px] text-[#cdbf9f] truncate">
                    Suggest another
                  </span>
                </div>
              </motion.div>
            ) : (
              <form
                key="form"
                onSubmit={handleSubmit}
                className="flex items-center justify-between w-full min-w-0"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={songName}
                  onChange={(e) => setSongName(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Suggest a song..."
                  className="bg-transparent text-xs sm:text-sm font-body text-[#efe6d0] placeholder-[#8a7a55] focus:outline-none w-full min-w-0 pr-1 truncate"
                  data-testid="song-suggestion-input"
                  maxLength={80}
                />

                <button
                  type="submit"
                  disabled={!songName.trim() || status === "submitting"}
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    songName.trim() && status !== "submitting"
                      ? "bg-gradient-to-r from-[#d47a3f] to-[#e6b64c] text-[#120e0a] hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                      : "text-[#6b5d3f] opacity-40 cursor-default"
                  }`}
                  title="Send Suggestion"
                  data-testid="song-suggestion-submit"
                >
                  {status === "submitting" ? (
                    <Loader2 size={12} className="animate-spin text-[#120e0a]" />
                  ) : (
                    <Send size={11} className="translate-x-[0.5px]" />
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

