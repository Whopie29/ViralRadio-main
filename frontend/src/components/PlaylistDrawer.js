import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Music2, Play, Sparkles, Disc } from "lucide-react";
import { fmtTime } from "../lib/constants";

const PLAYLIST_CATEGORIES = [
  { id: "90s", label: "90s" },
  { id: "nostalgic", label: "Nostalgic" },
  { id: "hitlist", label: "Hitlist" },
  { id: "punjabi", label: "Punjabi" },
  { id: "haryanvi", label: "Haryanvi" },
  { id: "rajasthani", label: "Rajasthani" },
  { id: "pahadi", label: "Pahadi" },
  { id: "english", label: "English" },
];

export default function PlaylistDrawer({ open, onClose, tracks, currentIndex, playing, onSelect }) {
  const [activeCategory, setActiveCategory] = useState("90s");

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            data-testid="playlist-backdrop"
          />
          <motion.aside
            className="glass-panel fixed z-[91] flex flex-col
                       right-0 top-0 bottom-0 w-[88vw] max-w-[400px] rounded-l-2xl
                       sm:rounded-l-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            data-testid="playlist-drawer"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-3.5"
              style={{ borderBottom: "1px solid rgba(233,201,120,0.14)" }}
            >
              <div>
                <h3 className="font-display text-xl text-[#efe6d0]">The Playlist</h3>
                <p className="font-tech text-[10px] text-[#8a7a55] tracking-widest uppercase">
                  {activeCategory === "90s" ? "90s HINDI · SIDE A" : `${activeCategory} COLLECTION`}
                </p>
              </div>
              <button className="chip w-9 h-9 justify-center" data-testid="close-playlist-btn" onClick={onClose}>
                <X size={16} />
              </button>
            </div>

            {/* Category Selector Tabs */}
            <div
              className="flex items-center gap-1.5 px-3 py-2.5 overflow-x-auto thin-scroll shrink-0"
              style={{ borderBottom: "1px solid rgba(233,201,120,0.1)" }}
            >
              {PLAYLIST_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-tech tracking-wide whitespace-nowrap transition-all duration-150 shrink-0 ${
                      isActive
                        ? "bg-[rgba(230,182,76,0.18)] text-[#e6b64c] border border-[rgba(230,182,76,0.45)] shadow-sm font-semibold"
                        : "bg-[rgba(0,0,0,0.25)] text-[#a99b78] border border-transparent hover:text-[#efe6d0] hover:bg-[rgba(230,182,76,0.08)]"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Content Area */}
            {activeCategory === "90s" ? (
              <div className="flex-1 overflow-y-auto thin-scroll px-3 py-3 space-y-1">
                {tracks.map((tr, i) => {
                  const active = i === currentIndex;
                  return (
                    <button
                      key={tr.id}
                      data-testid={`track-item-${i}`}
                      onClick={() => onSelect(i)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors"
                      style={{
                        background: active ? "rgba(230,182,76,0.14)" : "transparent",
                        border: active ? "1px solid rgba(230,182,76,0.35)" : "1px solid transparent",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                        style={{
                          background: active ? "linear-gradient(180deg,#e08a3c,#b4521f)" : "rgba(0,0,0,0.4)",
                          color: active ? "#1a1109" : "#cdbf9f",
                        }}
                      >
                        {active && playing ? <Music2 size={15} /> : <Play size={14} style={{ marginLeft: 1 }} />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`font-body text-sm truncate ${active ? "text-[#e6b64c] font-semibold" : "text-[#efe6d0]"}`}>
                          {tr.title}
                        </div>
                        <div className="font-tech text-[10px] text-[#8a7a55] truncate">
                          {tr.artist}
                          {tr.url ? " · yours" : ""}
                        </div>
                      </div>
                      <span className="font-tech text-[10px] text-[#8a7a55]">{fmtTime(tr.duration)}</span>
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Coming Soon placeholder for other categories */
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-[rgba(230,182,76,0.1)] border border-[rgba(230,182,76,0.25)] flex items-center justify-center text-[#e6b64c] shadow-inner animate-pulse">
                  <Disc size={26} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-lg text-[#efe6d0] tracking-wide">
                    {PLAYLIST_CATEGORIES.find((c) => c.id === activeCategory)?.label}
                  </h4>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[rgba(230,182,76,0.12)] border border-[rgba(230,182,76,0.2)] text-[#e6b64c] font-tech text-[11px] uppercase tracking-wider">
                    <Sparkles size={11} /> Coming Soon
                  </div>
                </div>
                <p className="font-body text-xs text-[#8a7a55] max-w-[220px] leading-relaxed">
                  This tape is being recorded in the studio. Stay tuned for fresh bangers on your journey!
                </p>
              </div>
            )}

            {/* Footer */}
            <div className="px-4 py-3" style={{ borderTop: "1px solid rgba(233,201,120,0.14)" }}>
              <p className="font-tech text-[10px] text-[#8a7a55] text-center tracking-widest uppercase">
                {activeCategory === "90s"
                  ? `90s HINDI · OLD BANGERS · ${tracks.length} TRACKS`
                  : `${activeCategory} · COMING SOON`}
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
