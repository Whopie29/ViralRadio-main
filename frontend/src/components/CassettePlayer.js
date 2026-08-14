import React, { useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Repeat1, ListMusic, Volume2 } from "lucide-react";
import { fmtTime } from "../lib/constants";

const Reel = ({ spinning }) => (
  <div className="reel" style={{ position: "relative", width: 48, height: 48 }}>
    <div className={spinning ? "reel-spin" : ""} style={{ position: "absolute", inset: 0 }}>
      {[0, 60, 120].map((deg) => (
        <div
          key={deg}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 2,
            height: 20,
            background: "#0c0906",
            transform: `translate(-50%,-50%) rotate(${deg}deg)`,
          }}
        />
      ))}
    </div>
  </div>
);

export default function CassettePlayer({
  track, playing, currentTime, duration,
  onTogglePlay, onPrev, onNext, onSeek,
  musicVol, onMusicVol, shuffle, repeat, onShuffle, onRepeat, onOpenPlaylist,
}) {
  const barRef = useRef(null);
  const dur = duration || track?.duration || 1;
  const pct = Math.min(100, (currentTime / dur) * 100);

  const seekFromEvent = (clientX) => {
    const el = barRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    onSeek(ratio * dur);
  };

  return (
    <div
      className="cassette px-4 py-3 sm:px-5 sm:py-4 w-[92vw] max-w-[520px]"
      data-testid="cassette-player"
    >
      {/* cassette window with reels + label */}
      <div className="flex items-center gap-3 rounded-lg px-3 py-2 mb-3" style={{ background: "linear-gradient(180deg,#0f0c08,#1c1610)", border: "1px solid rgba(0,0,0,0.6)" }}>
        <Reel spinning={playing} />
        <div className="flex-1 min-w-0 text-center">
          <div className="lcd rounded px-2 py-1">
            <div className="font-tech text-[13px] sm:text-sm truncate" data-testid="now-playing-title">{track?.title || "—"}</div>
            <div className="font-tech text-[10px] opacity-80 truncate">{track?.artist || ""} · {track?.album || ""}</div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <div className={`eq ${playing ? "play" : ""}`}>
              <span /><span /><span /><span /><span />
            </div>
            <span className="font-tech text-[9px] text-[#8a7a55] tracking-widest">{playing ? "PLAY" : "PAUSE"}</span>
          </div>
        </div>
        <Reel spinning={playing} />
      </div>

      {/* progress */}
      <div className="flex items-center gap-2">
        <span className="font-tech text-[10px] text-[#cdbf9f] w-9 text-right" data-testid="time-current">{fmtTime(currentTime)}</span>
        <div
          ref={barRef}
          className="track-bar flex-1"
          data-testid="progress-bar"
          onClick={(e) => seekFromEvent(e.clientX)}
        >
          <div className="track-fill" style={{ width: `${pct}%` }} />
          <div className="track-knob" style={{ left: `${pct}%` }} />
        </div>
        <span className="font-tech text-[10px] text-[#cdbf9f] w-9" data-testid="time-total">{fmtTime(dur)}</span>
      </div>

      {/* transport */}
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <button className={`tbtn ${shuffle ? "on" : ""} w-9 h-9`} data-testid="shuffle-btn" onClick={onShuffle} title="Shuffle">
            <Shuffle size={15} />
          </button>
          <button className="tbtn w-11 h-10" data-testid="prev-btn" onClick={onPrev} title="Previous">
            <SkipBack size={18} />
          </button>
        </div>

        <button className="tbtn play w-14 h-14 rounded-full" data-testid="play-pause-btn" onClick={onTogglePlay} title={playing ? "Pause" : "Play"}>
          {playing ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: 2 }} />}
        </button>

        <div className="flex items-center gap-2">
          <button className="tbtn w-11 h-10" data-testid="next-btn" onClick={onNext} title="Next">
            <SkipForward size={18} />
          </button>
          <button className={`tbtn ${repeat !== "off" ? "on" : ""} w-9 h-9`} data-testid="repeat-btn" onClick={onRepeat} title={`Repeat: ${repeat}`}>
            {repeat === "one" ? <Repeat1 size={15} /> : <Repeat size={15} />}
          </button>
        </div>
      </div>

      {/* bottom row: volume + playlist */}
      <div className="flex items-center gap-3 mt-3 pt-3" style={{ borderTop: "1px solid rgba(233,201,120,0.12)" }}>
        <Volume2 size={15} className="text-[#cdbf9f]" />
        <input
          type="range"
          className="range flex-1"
          data-testid="music-volume"
          min={0} max={1} step={0.01}
          value={musicVol}
          onChange={(e) => onMusicVol(parseFloat(e.target.value))}
        />
        <button className="chip px-3 py-1.5 text-xs font-tech tracking-wide" data-testid="open-playlist-btn" onClick={onOpenPlaylist}>
          <ListMusic size={14} /> PLAYLIST
        </button>
      </div>
    </div>
  );
}
