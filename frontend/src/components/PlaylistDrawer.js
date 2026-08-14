import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Music2, Play } from "lucide-react";
import { fmtTime } from "../lib/constants";

export default function PlaylistDrawer({ open, onClose, tracks, currentIndex, playing, onSelect }) {

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[70] bg-black/50"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            data-testid="playlist-backdrop"
          />
          <motion.aside
            className="glass-panel fixed z-[71] flex flex-col
                       right-0 top-0 bottom-0 w-[86vw] max-w-[380px] rounded-l-2xl
                       sm:rounded-l-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            data-testid="playlist-drawer"
          >
            <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid rgba(233,201,120,0.14)" }}>
              <div>
                <h3 className="font-display text-xl text-[#efe6d0]">The Playlist</h3>
                <p className="font-tech text-[10px] text-[#8a7a55] tracking-widest">90s HINDI · SIDE A</p>
              </div>
              <button className="chip w-9 h-9 justify-center" data-testid="close-playlist-btn" onClick={onClose}>
                <X size={16} />
              </button>
            </div>

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
                    <div className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                         style={{ background: active ? "linear-gradient(180deg,#e08a3c,#b4521f)" : "rgba(0,0,0,0.4)", color: active ? "#1a1109" : "#cdbf9f" }}>
                      {active && playing ? <Music2 size={15} /> : <Play size={14} style={{ marginLeft: 1 }} />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`font-body text-sm truncate ${active ? "text-[#e6b64c]" : "text-[#efe6d0]"}`}>{tr.title}</div>
                      <div className="font-tech text-[10px] text-[#8a7a55] truncate">{tr.artist}{tr.url ? " · yours" : ""}</div>
                    </div>
                    <span className="font-tech text-[10px] text-[#8a7a55]">{fmtTime(tr.duration)}</span>
                  </button>
                );
              })}
            </div>

            <div className="px-4 py-3" style={{ borderTop: "1px solid rgba(233,201,120,0.14)" }}>
              <p className="font-tech text-[10px] text-[#8a7a55] text-center tracking-widest">
                90s HINDI · OLD BANGERS · {tracks.length} TRACKS
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
