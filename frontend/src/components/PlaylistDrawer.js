import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Music2, Play, Sparkles, Disc, Search, Radio } from "lucide-react";
import { fmtTime, TRACK_CATEGORIES, PLAYLIST_CATEGORIES } from "../lib/constants";

export default function PlaylistDrawer({
  open,
  onClose,
  currentCategory = "90s",
  currentIndex = 0,
  playing = false,
  onSelect,
}) {
  const [activeCategory, setActiveCategory] = useState(currentCategory);
  const [searchQuery, setSearchQuery] = useState("");

  // Sync active viewing tab with currently playing category when drawer opens
  React.useEffect(() => {
    if (open) {
      setActiveCategory(currentCategory);
      setSearchQuery("");
    }
  }, [open, currentCategory]);

  const currentCategoryInfo = useMemo(() => {
    return (
      PLAYLIST_CATEGORIES.find((c) => c.id === activeCategory) ||
      PLAYLIST_CATEGORIES[0]
    );
  }, [activeCategory]);

  const rawTracks = useMemo(() => {
    return TRACK_CATEGORIES[activeCategory] || [];
  }, [activeCategory]);

  const filteredTracks = useMemo(() => {
    if (!searchQuery.trim()) return rawTracks;
    const q = searchQuery.toLowerCase();
    return rawTracks.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.artist.toLowerCase().includes(q) ||
        (t.album && t.album.toLowerCase().includes(q))
    );
  }, [rawTracks, searchQuery]);

  const hasTracks = rawTracks.length > 0;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            data-testid="playlist-backdrop"
          />
          <motion.aside
            className="glass-panel fixed z-[91] flex flex-col
                       right-0 top-0 bottom-0 w-[92vw] max-w-[420px] rounded-l-2xl
                       sm:rounded-l-2xl shadow-2xl border-l border-[rgba(233,201,120,0.2)] bg-[#18130d]/95 backdrop-blur-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            data-testid="playlist-drawer"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-3.5"
              style={{ borderBottom: "1px solid rgba(233,201,120,0.14)" }}
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-xl text-[#efe6d0]">The Playlist</h3>
                  <span className="px-2 py-0.5 rounded-full bg-[rgba(230,182,76,0.14)] border border-[rgba(230,182,76,0.3)] text-[#e6b64c] font-tech text-[10px] font-semibold tracking-wider">
                    {rawTracks.length} SONGS
                  </span>
                </div>
                <p className="font-tech text-[10px] text-[#8a7a55] tracking-widest uppercase mt-0.5">
                  {currentCategoryInfo.fullName || `${activeCategory.toUpperCase()} COLLECTION`}
                </p>
              </div>
              <button
                className="chip w-9 h-9 justify-center hover:text-[#e6b64c]"
                data-testid="close-playlist-btn"
                onClick={onClose}
              >
                <X size={16} />
              </button>
            </div>

            {/* Category Selector Tabs */}
            <div
              className="flex items-center gap-1.5 px-3 py-2.5 overflow-x-auto thin-scroll shrink-0 bg-black/20"
              style={{ borderBottom: "1px solid rgba(233,201,120,0.1)" }}
            >
              {PLAYLIST_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                const catTrackCount = (TRACK_CATEGORIES[cat.id] || []).length;
                const isPlayingInThisCat = currentCategory === cat.id && playing;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSearchQuery("");
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-tech tracking-wide whitespace-nowrap transition-all duration-150 shrink-0 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[rgba(230,182,76,0.22)] text-[#e6b64c] border border-[rgba(230,182,76,0.5)] shadow-sm font-semibold"
                        : "bg-[rgba(0,0,0,0.3)] text-[#a99b78] border border-transparent hover:text-[#efe6d0] hover:bg-[rgba(230,182,76,0.08)]"
                    }`}
                  >
                    {isPlayingInThisCat && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                    <span>{cat.label}</span>
                    {catTrackCount > 0 ? (
                      <span
                        className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                          isActive
                            ? "bg-[#e6b64c]/20 text-[#e6b64c]"
                            : "bg-white/5 text-[#8a7a55]"
                        }`}
                      >
                        {catTrackCount}
                      </span>
                    ) : (
                      <span className="text-[8.5px] px-1 py-0.2 rounded bg-white/5 text-[#6c5f42]">
                        Soon
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Search filter within active category */}
            {hasTracks && (
              <div className="px-3 pt-2.5 pb-1 shrink-0">
                <div className="relative flex items-center">
                  <Search
                    size={14}
                    className="absolute left-3 text-[#8a7a55] pointer-events-none"
                  />
                  <input
                    type="text"
                    placeholder={`Search ${currentCategoryInfo.label} (${rawTracks.length} songs)...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-8 py-1.5 rounded-lg bg-black/40 border border-[rgba(233,201,120,0.15)] text-xs text-[#efe6d0] placeholder-[#6c5f42] focus:outline-none focus:border-[rgba(230,182,76,0.45)] font-body"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 text-[#8a7a55] hover:text-[#efe6d0]"
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Content Area */}
            {hasTracks ? (
              <div className="flex-1 overflow-y-auto thin-scroll px-3 py-2 space-y-1">
                {filteredTracks.length === 0 ? (
                  <div className="py-12 text-center text-[#8a7a55] font-body text-xs">
                    No songs found matching &ldquo;{searchQuery}&rdquo;
                  </div>
                ) : (
                  filteredTracks.map((tr) => {
                    // Find actual index in this category's array
                    const originalIndex = rawTracks.findIndex((t) => t.id === tr.id);
                    const isCurrentlyPlayingCat = currentCategory === activeCategory;
                    const active = isCurrentlyPlayingCat && originalIndex === currentIndex;

                    return (
                      <button
                        key={tr.id}
                        data-testid={`track-item-${originalIndex}`}
                        onClick={() => onSelect(activeCategory, originalIndex)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150 group"
                        style={{
                          background: active
                            ? "linear-gradient(90deg, rgba(230,182,76,0.18), rgba(230,182,76,0.06))"
                            : "transparent",
                          border: active
                            ? "1px solid rgba(230,182,76,0.4)"
                            : "1px solid transparent",
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105"
                          style={{
                            background: active
                              ? "linear-gradient(135deg, #e08a3c, #b4521f)"
                              : "rgba(0,0,0,0.45)",
                            color: active ? "#1a1109" : "#cdbf9f",
                            border: active
                              ? "1px solid rgba(255,255,255,0.2)"
                              : "1px solid rgba(255,255,255,0.05)",
                          }}
                        >
                          {active && playing ? (
                            <Music2 size={15} className="animate-bounce" />
                          ) : (
                            <Play size={14} style={{ marginLeft: 1 }} />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div
                            className={`font-body text-xs sm:text-sm truncate leading-snug ${
                              active
                                ? "text-[#e6b64c] font-semibold"
                                : "text-[#efe6d0] group-hover:text-[#f8f4eb]"
                            }`}
                          >
                            {tr.title}
                          </div>
                          <div className="font-tech text-[10px] text-[#8a7a55] truncate flex items-center gap-1.5 mt-0.5">
                            <span className="truncate">{tr.artist}</span>
                            {tr.album && (
                              <>
                                <span className="opacity-40">•</span>
                                <span className="truncate opacity-75">{tr.album}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <span className="font-tech text-[10px] text-[#8a7a55] shrink-0 font-mono">
                          {fmtTime(tr.duration)}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>
            ) : (
              /* Coming Soon placeholder for unpopulated categories */
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[rgba(230,182,76,0.1)] border border-[rgba(230,182,76,0.25)] flex items-center justify-center text-[#e6b64c] shadow-inner animate-pulse">
                  <Disc size={30} strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display text-lg text-[#efe6d0] tracking-wide">
                    {currentCategoryInfo.fullName || currentCategoryInfo.label}
                  </h4>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(230,182,76,0.12)] border border-[rgba(230,182,76,0.2)] text-[#e6b64c] font-tech text-[11px] uppercase tracking-wider">
                    <Sparkles size={12} /> Coming Soon
                  </div>
                </div>
                <p className="font-body text-xs text-[#8a7a55] max-w-[240px] leading-relaxed">
                  {currentCategoryInfo.subtitle ||
                    "This tape is being recorded in the studio. Stay tuned for fresh bangers on your journey!"}
                </p>
              </div>
            )}

            {/* Footer */}
            <div
              className="px-4 py-3 bg-black/30 flex items-center justify-between"
              style={{ borderTop: "1px solid rgba(233,201,120,0.14)" }}
            >
              <div className="flex items-center gap-2">
                <Radio size={12} className="text-[#e6b64c]" />
                <span className="font-tech text-[10px] text-[#a99b78] tracking-wider uppercase truncate max-w-[200px]">
                  {currentCategoryInfo.fullName}
                </span>
              </div>
              <span className="font-tech text-[10px] text-[#e6b64c] tracking-widest uppercase font-semibold">
                {rawTracks.length} TRACKS
              </span>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
