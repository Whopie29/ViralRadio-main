import React, { useRef, useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Repeat1,
  ListMusic,
  Volume2,
  VolumeX,
  Disc3,
} from "lucide-react";
import { fmtTime } from "../lib/constants";

export default function CassettePlayer({
  track,
  playing,
  currentTime,
  duration,
  onTogglePlay,
  onPrev,
  onNext,
  onSeek,
  musicVol,
  onMusicVol,
  shuffle,
  repeat,
  onShuffle,
  onRepeat,
  onOpenPlaylist,
}) {
  const barRef = useRef(null);
  const [showVolume, setShowVolume] = useState(false);
  const dur = duration || track?.duration || 1;
  const pct = Math.min(100, Math.max(0, (currentTime / dur) * 100));

  const seekFromEvent = (clientX) => {
    const el = barRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    onSeek(ratio * dur);
  };

  return (
    <div
      className="relative z-[80] select-none w-full max-w-[94vw] sm:max-w-[480px] md:max-w-[500px] lg:max-w-[560px] xl:max-w-[620px]"
      data-testid="cassette-player"
    >
      {/* Horizontal Round Cylinder Container */}
      <div className="flex items-center justify-between gap-2.5 sm:gap-4 px-3.5 py-2 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-[#231b12]/95 via-[#1a140d]/95 to-[#261c13]/95 backdrop-blur-xl border border-[rgba(233,201,120,0.22)] shadow-[0_16px_45px_-8px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.12)]">
        
        {/* Left Section: Circular Album / Vinyl Cover & Info */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
          {/* Circular Vinyl / Album Art */}
          <div
            className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 shadow-md border border-[rgba(233,201,120,0.3)] bg-gradient-to-br from-[#2a2015] to-[#120e0a] flex items-center justify-center cursor-pointer group"
            onClick={onOpenPlaylist}
            title="Open Playlist"
          >
            <div
              className={`absolute inset-0 flex items-center justify-center ${
                playing ? "animate-[spin_4s_linear_infinite]" : ""
              }`}
            >
              {/* Vinyl grooves */}
              <div className="absolute inset-1 rounded-full border border-white/10" />
              <div className="absolute inset-2.5 rounded-full border border-white/5" />
              {/* Center disc label */}
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-tr from-[#d47a3f] to-[#e6b64c] flex items-center justify-center shadow-inner">
                <div className="w-1.5 h-1.5 rounded-full bg-[#120e0a]" />
              </div>
            </div>
            {/* Center disc icon overlay */}
            <Disc3
              size={20}
              className={`text-[#e6b64c] transition-opacity duration-300 ${
                playing ? "opacity-0" : "opacity-90 group-hover:opacity-100"
              }`}
            />
          </div>

          {/* Track Titles & Horizontal Progress Bar */}
          <div className="flex flex-col min-w-0 flex-1 justify-center">
            {/* Title & Artist */}
            <div className="flex flex-col min-w-0">
              <h3
                className="font-body font-bold text-xs sm:text-sm text-[#efe6d0] truncate tracking-wide"
                data-testid="now-playing-title"
                title={track?.title}
              >
                {track?.title || "No Track Selected"}
              </h3>
              <p
                className="font-body text-[10px] sm:text-xs text-[#a99b78] truncate"
                title={`${track?.artist || ""} • ${track?.album || ""}`}
              >
                {track?.artist || "Pahadi Safar Radio"}
                {track?.album ? ` • ${track?.album}` : ""}
              </p>
            </div>

            {/* Inline Horizontal Progress Bar */}
            <div className="flex items-center gap-2 mt-1 sm:mt-1.5 w-full max-w-[320px]">
              <span
                className="font-tech text-[9.5px] sm:text-[10px] text-[#8a7a55] w-7 sm:w-8 text-right shrink-0"
                data-testid="time-current"
              >
                {fmtTime(currentTime)}
              </span>
              <div
                ref={barRef}
                className="relative flex-1 h-1 sm:h-1.5 rounded-full bg-black/50 overflow-hidden cursor-pointer group/bar"
                data-testid="progress-bar"
                onClick={(e) => seekFromEvent(e.clientX)}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 rounded-full bg-gradient-to-r from-[#e6b64c] to-[#d47a3f] transition-all duration-75"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span
                className="font-tech text-[9.5px] sm:text-[10px] text-[#8a7a55] w-7 sm:w-8 shrink-0"
                data-testid="time-total"
              >
                {fmtTime(dur)}
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Playback Controls */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Shuffle (desktop) */}
          <button
            className={`hidden md:flex p-1.5 rounded-full transition-colors ${
              shuffle
                ? "text-[#e6b64c] bg-[rgba(230,182,76,0.15)]"
                : "text-[#a99b78] hover:text-[#efe6d0]"
            }`}
            data-testid="shuffle-btn"
            onClick={onShuffle}
            title="Shuffle"
          >
            <Shuffle size={15} />
          </button>

          {/* Previous Button */}
          <button
            className="p-1.5 sm:p-2 text-[#efe6d0] hover:text-[#e6b64c] hover:scale-110 active:scale-95 transition-all"
            data-testid="prev-btn"
            onClick={onPrev}
            title="Previous"
          >
            <SkipBack size={18} className="fill-current sm:w-5 sm:h-5" />
          </button>

          {/* Large Circular White Play/Pause Button */}
          <button
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#fdfbf7] text-[#120e0a] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:bg-white hover:scale-105 active:scale-95 transition-all shrink-0"
            data-testid="play-pause-btn"
            onClick={onTogglePlay}
            title={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <Pause size={20} className="fill-current sm:w-[22px] sm:h-[22px]" />
            ) : (
              <Play size={20} className="fill-current ml-0.5 sm:w-[22px] sm:h-[22px]" />
            )}
          </button>

          {/* Next Button */}
          <button
            className="p-1.5 sm:p-2 text-[#efe6d0] hover:text-[#e6b64c] hover:scale-110 active:scale-95 transition-all"
            data-testid="next-btn"
            onClick={onNext}
            title="Next"
          >
            <SkipForward size={18} className="fill-current sm:w-5 sm:h-5" />
          </button>

          {/* Volume Control */}
          <div className="relative flex items-center">
            <button
              className="p-1.5 sm:p-2 text-[#a99b78] hover:text-[#efe6d0] transition-colors"
              data-testid="volume-toggle"
              onClick={() => setShowVolume((prev) => !prev)}
              title="Volume"
            >
              {musicVol === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>

            {showVolume && (
              <div className="absolute bottom-full right-0 mb-3 px-3 py-2 rounded-xl bg-[#1e1710] border border-[rgba(233,201,120,0.25)] shadow-xl flex items-center gap-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <input
                  type="range"
                  className="range w-24 accent-[#e6b64c]"
                  data-testid="music-volume"
                  min={0}
                  max={1}
                  step={0.01}
                  value={musicVol}
                  onChange={(e) => onMusicVol(parseFloat(e.target.value))}
                />
              </div>
            )}
          </div>

          {/* Repeat */}
          <button
            className={`hidden sm:flex p-1.5 rounded-full transition-colors ${
              repeat !== "off"
                ? "text-[#e6b64c] bg-[rgba(230,182,76,0.15)]"
                : "text-[#a99b78] hover:text-[#efe6d0]"
            }`}
            data-testid="repeat-btn"
            onClick={onRepeat}
            title={`Repeat: ${repeat}`}
          >
            {repeat === "one" ? <Repeat1 size={16} /> : <Repeat size={16} />}
          </button>

          {/* Playlist Drawer Button */}
          <button
            className="p-1.5 sm:p-2 text-[#a99b78] hover:text-[#efe6d0] transition-colors"
            data-testid="open-playlist-btn"
            onClick={onOpenPlaylist}
            title="Open Playlist"
          >
            <ListMusic size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
