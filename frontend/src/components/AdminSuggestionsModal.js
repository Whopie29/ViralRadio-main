import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Music,
  Check,
  Trash2,
  Copy,
  Search,
  Lock,
  Unlock,
  RefreshCw,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { supabase } from "../lib/supabaseClient";

export default function AdminSuggestionsModal({ open, onClose }) {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("karwaan_admin_auth") === "true";
  });
  const [authError, setAuthError] = useState(false);

  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all"); // "all" | "pending" | "added"
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [copyAllFeedback, setCopyAllFeedback] = useState(false);

  // Fetch suggestions
  const fetchSuggestions = async () => {
    setLoading(true);
    let remoteData = [];
    try {
      const { data, error } = await supabase
        .from("song_suggestions")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        remoteData = data;
      }
    } catch (err) {
      console.warn("[AdminSuggestions] Supabase fetch warning:", err);
    }

    // Merge with any local storage suggestions
    try {
      const localList = JSON.parse(localStorage.getItem("karwaan_song_suggestions") || "[]");
      const combined = [...remoteData];
      for (const item of localList) {
        if (!combined.some((r) => r.song_title?.toLowerCase() === item.song_title?.toLowerCase() && Math.abs(new Date(r.created_at || 0) - new Date(item.created_at || 0)) < 10000)) {
          combined.push(item);
        }
      }
      combined.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
      setSuggestions(combined);
    } catch {
      setSuggestions(remoteData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open && isAuthenticated) {
      fetchSuggestions();
    }
  }, [open, isAuthenticated]);

  const handleLogin = (e) => {
    e?.preventDefault?.();
    if (passcode.trim() === "Gm@818091") {
      setIsAuthenticated(true);
      localStorage.setItem("karwaan_admin_auth", "true");
      setAuthError(false);
      setPasscode("");
    } else {
      setAuthError(true);
    }
  };

  const handleMarkStatus = async (id, newStatus) => {
    // Update local state immediately
    setSuggestions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
    );

    // Update in Supabase if real ID
    if (typeof id === "string" && !id.startsWith("local_")) {
      try {
        await supabase
          .from("song_suggestions")
          .update({ status: newStatus })
          .eq("id", id);
      } catch (err) {
        console.warn("[AdminSuggestions] Status update warning:", err);
      }
    }
  };

  const handleDelete = async (id) => {
    setSuggestions((prev) => prev.filter((s) => s.id !== id));

    // Delete in Supabase if real ID
    if (typeof id === "string" && !id.startsWith("local_")) {
      try {
        await supabase.from("song_suggestions").delete().eq("id", id);
      } catch (err) {
        console.warn("[AdminSuggestions] Delete warning:", err);
      }
    }

    // Also remove from local storage if present
    try {
      const localList = JSON.parse(localStorage.getItem("karwaan_song_suggestions") || "[]");
      const updated = localList.filter((s) => s.id !== id);
      localStorage.setItem("karwaan_song_suggestions", JSON.stringify(updated));
    } catch {}
  };

  const handleCopySong = (text, id) => {
    navigator.clipboard?.writeText?.(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleCopyAll = () => {
    const listToCopy = filteredSuggestions
      .map((s) => (s.artist ? `${s.song_title} - ${s.artist}` : s.song_title))
      .join("\n");
    if (listToCopy) {
      navigator.clipboard?.writeText?.(listToCopy);
      setCopyAllFeedback(true);
      setTimeout(() => setCopyAllFeedback(false), 2000);
    }
  };

  const filteredSuggestions = suggestions.filter((item) => {
    const matchesFilter =
      filter === "all" ? true : filter === "pending" ? item.status !== "added" : item.status === "added";
    const matchesSearch =
      (item.song_title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.artist || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.suggested_by || "").toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const pendingCount = suggestions.filter((s) => s.status !== "added").length;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[95] bg-black/65 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Panel */}
          <motion.div
            className="glass-panel fixed z-[96] left-1/2 top-1/2 w-[94vw] max-w-[560px] max-h-[88vh] rounded-2xl p-4 sm:p-6 flex flex-col shadow-2xl border border-[rgba(233,201,120,0.25)]"
            style={{
              x: "-50%",
              y: "-50%",
              background: "linear-gradient(180deg, rgba(28, 22, 16, 0.96) 0%, rgba(16, 12, 8, 0.98) 100%)",
            }}
            initial={{ opacity: 0, scale: 0.93, y: "-48%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%" }}
            exit={{ opacity: 0, scale: 0.93, y: "-48%" }}
            transition={{ duration: 0.2 }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#e6b64c]/15 border border-[#e6b64c]/30 flex items-center justify-center text-[#e6b64c]">
                  <Music size={17} />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl text-[#efe6d0] flex items-center gap-2">
                    Song Suggestions
                    {isAuthenticated && (
                      <span className="font-tech text-xs bg-[#e6b64c]/20 text-[#e6b64c] px-2 py-0.5 rounded-full border border-[#e6b64c]/30">
                        {pendingCount} Pending
                      </span>
                    )}
                  </h3>
                  <p className="font-tech text-[10px] text-[#8a7a55] tracking-wider uppercase">
                    Admin Review & Playlist Management
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content: Auth Lock Screen vs Suggestions List */}
            {!isAuthenticated ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#e6b64c]/10 border border-[#e6b64c]/30 flex items-center justify-center text-[#e6b64c] mb-3">
                  <Lock size={20} />
                </div>
                <h4 className="font-display text-base text-[#efe6d0] mb-1">
                  Admin Passcode Required
                </h4>
                <p className="font-body text-xs text-[#a99b78] max-w-xs mb-4">
                  Enter your admin passcode to review and manage song suggestions.
                </p>

                <form onSubmit={handleLogin} className="flex flex-col items-center gap-3 w-full max-w-xs">
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value);
                      setAuthError(false);
                    }}
                    placeholder="Enter passcode..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-[rgba(233,201,120,0.25)] text-sm font-tech text-[#efe6d0] placeholder-[#6b5d3f] focus:outline-none focus:border-[#e6b64c] text-center"
                    autoFocus
                  />
                  {authError && (
                    <span className="font-tech text-xs text-rose-400">
                      Incorrect passcode.
                    </span>
                  )}
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#d47a3f] to-[#e6b64c] text-[#120e0a] font-body font-bold text-xs tracking-wider uppercase hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg cursor-pointer"
                  >
                    Unlock Suggestions
                  </button>
                </form>
              </div>
            ) : (
              <>
                {/* Search, Filter Bar, and Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 mb-3 shrink-0">
                  {/* Filter Pills */}
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/5">
                    <button
                      onClick={() => setFilter("all")}
                      className={`px-3 py-1 rounded-lg font-tech text-xs transition-all ${
                        filter === "all"
                          ? "bg-[#e6b64c] text-[#120e0a] font-semibold shadow-sm"
                          : "text-[#a99b78] hover:text-[#efe6d0]"
                      }`}
                    >
                      All ({suggestions.length})
                    </button>
                    <button
                      onClick={() => setFilter("pending")}
                      className={`px-3 py-1 rounded-lg font-tech text-xs transition-all ${
                        filter === "pending"
                          ? "bg-[#e6b64c] text-[#120e0a] font-semibold shadow-sm"
                          : "text-[#a99b78] hover:text-[#efe6d0]"
                      }`}
                    >
                      Pending ({pendingCount})
                    </button>
                    <button
                      onClick={() => setFilter("added")}
                      className={`px-3 py-1 rounded-lg font-tech text-xs transition-all ${
                        filter === "added"
                          ? "bg-[#e6b64c] text-[#120e0a] font-semibold shadow-sm"
                          : "text-[#a99b78] hover:text-[#efe6d0]"
                      }`}
                    >
                      Added ({suggestions.length - pendingCount})
                    </button>
                  </div>

                  {/* Right Tools: Refresh & Copy All */}
                  <div className="flex items-center gap-1.5 justify-end">
                    <button
                      onClick={fetchSuggestions}
                      disabled={loading}
                      className="p-2 rounded-lg bg-black/30 hover:bg-black/50 text-[#a99b78] hover:text-[#efe6d0] transition-colors border border-white/5"
                      title="Refresh suggestions"
                    >
                      <RefreshCw size={14} className={loading ? "animate-spin text-[#e6b64c]" : ""} />
                    </button>

                    <button
                      onClick={handleCopyAll}
                      disabled={filteredSuggestions.length === 0}
                      className="px-2.5 py-1.5 rounded-lg bg-[#e6b64c]/15 hover:bg-[#e6b64c]/25 text-[#e6b64c] font-tech text-xs border border-[#e6b64c]/30 flex items-center gap-1.5 transition-colors cursor-pointer"
                      title="Copy all filtered song names to clipboard"
                    >
                      {copyAllFeedback ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copyAllFeedback ? "Copied All!" : "Copy List"}</span>
                    </button>
                  </div>
                </div>

                {/* Search Input */}
                <div className="relative mb-3 shrink-0">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a7a55]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search song title, artist, or requester..."
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs font-body text-[#efe6d0] placeholder-[#6b5d3f] focus:outline-none focus:border-[#e6b64c]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Suggestions Scrollable List */}
                <div className="flex-1 overflow-y-auto thin-scroll space-y-2 pr-1 min-h-[220px]">
                  {loading && suggestions.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-[#8a7a55]">
                      <RefreshCw size={24} className="animate-spin mb-2 text-[#e6b64c]" />
                      <span className="font-tech text-xs">Loading suggestions...</span>
                    </div>
                  ) : filteredSuggestions.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-[#8a7a55] border border-dashed border-white/10 rounded-xl">
                      <Music size={28} className="opacity-40 mb-2" />
                      <span className="font-body text-xs text-[#cdbf9f]">No suggestions found</span>
                      <span className="font-tech text-[10px] text-[#6b5d3f] mt-1">
                        Suggestions submitted from the bottom player will appear here!
                      </span>
                    </div>
                  ) : (
                    filteredSuggestions.map((item) => {
                      const isAdded = item.status === "added";
                      const dateStr = item.created_at
                        ? new Date(item.created_at).toLocaleDateString([], {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "Just now";

                      return (
                        <div
                          key={item.id}
                          className={`p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                            isAdded
                              ? "bg-black/20 border-white/5 opacity-75"
                              : "bg-black/45 border-[rgba(233,201,120,0.15)] hover:border-[rgba(233,201,120,0.3)] shadow-sm"
                          }`}
                        >
                          {/* Song Info */}
                          <div className="flex flex-col min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className={`font-body font-bold text-xs sm:text-sm truncate ${isAdded ? "line-through text-[#8a7a55]" : "text-[#efe6d0]"}`}>
                                {item.song_title}
                              </span>
                              {isAdded && (
                                <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-tech text-[9px] border border-emerald-500/30 flex items-center gap-0.5 shrink-0">
                                  <Check size={9} /> Added
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-2 mt-0.5 font-tech text-[10px] text-[#a99b78] truncate">
                              {item.artist && (
                                <span className="text-[#e6b64c] font-medium truncate">
                                  {item.artist}
                                </span>
                              )}
                              {item.artist && <span>•</span>}
                              <span className="truncate">by {item.suggested_by || "Passenger"}</span>
                              <span>•</span>
                              <span className="shrink-0 text-[#6b5d3f]">{dateStr}</span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-1.5 shrink-0">
                            {/* Copy button */}
                            <button
                              onClick={() =>
                                handleCopySong(
                                  item.artist ? `${item.song_title} - ${item.artist}` : item.song_title,
                                  item.id
                                )
                              }
                              className="p-1.5 rounded-lg bg-black/40 hover:bg-black/70 text-[#a99b78] hover:text-[#efe6d0] border border-white/5 transition-colors"
                              title="Copy song name"
                            >
                              {copiedId === item.id ? (
                                <Check size={13} className="text-emerald-400" />
                              ) : (
                                <Copy size={13} />
                              )}
                            </button>

                            {/* Mark as Added Toggle */}
                            <button
                              onClick={() => handleMarkStatus(item.id, isAdded ? "pending" : "added")}
                              className={`px-2 py-1 rounded-lg font-tech text-[10.5px] flex items-center gap-1 transition-all ${
                                isAdded
                                  ? "bg-white/5 hover:bg-white/10 text-[#a99b78]"
                                  : "bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 font-semibold"
                              }`}
                              title={isAdded ? "Mark as Pending" : "Mark as Added to Playlist"}
                            >
                              <Check size={12} />
                              <span className="hidden sm:inline">
                                {isAdded ? "Revert" : "Mark Added"}
                              </span>
                            </button>

                            {/* Delete button */}
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="p-1.5 rounded-lg bg-black/40 hover:bg-rose-500/20 text-[#8a7a55] hover:text-rose-400 border border-white/5 transition-colors"
                              title="Delete suggestion"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Footer Info */}
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-tech text-[#8a7a55] shrink-0">
                  <span>
                    Database: <span className="text-[#efe6d0]">Supabase</span> (`song_suggestions`)
                  </span>
                  <button
                    onClick={() => {
                      setIsAuthenticated(false);
                      localStorage.removeItem("karwaan_admin_auth");
                    }}
                    className="hover:text-rose-400 transition-colors"
                  >
                    Lock Session
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
