import React, { useMemo } from "react";

// Foreground bus-window layer: frame image, glass reflection, scratches,
// rain droplets on the glass, snow specks, and a swinging interior ornament.
export default function WindowOverlay({ weather }) {
  const drops = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        left: Math.random() * 92 + 4,
        top: Math.random() * 60 + 8,
        size: 4 + Math.random() * 10,
        slide: Math.random() > 0.55,
        dur: 5 + Math.random() * 7,
        delay: Math.random() * 6,
        key: i,
      })),
    []
  );

  const flakes = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        left: Math.random() * 94 + 3,
        top: Math.random() * 70 + 5,
        size: 3 + Math.random() * 5,
        op: 0.5 + Math.random() * 0.4,
        key: i,
      })),
    []
  );

  return (
    <>
      {/* soft interior + glass reflection */}
      <div className="glass-vignette" />
      <div className="glass-reflect" />

      {/* subtle scratches */}
      <div className="scratch" style={{ top: "22%", left: "18%", width: "26%", height: 1, transform: "rotate(-8deg)" }} />
      <div className="scratch" style={{ top: "58%", left: "60%", width: "18%", height: 1, transform: "rotate(6deg)" }} />
      <div className="scratch" style={{ top: "40%", left: "42%", width: 1, height: "20%", transform: "rotate(3deg)" }} />

      {/* rain droplets on the glass */}
      {weather === "rain" &&
        drops.map((d) => (
          <div
            key={d.key}
            className={`drop ${d.slide ? "drop-slide" : ""}`}
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              width: d.size,
              height: d.size * 1.25,
              "--dur": `${d.dur}s`,
              animationDelay: `${d.delay}s`,
            }}
          />
        ))}

      {/* snow specks touching the glass */}
      {weather === "snow" &&
        flakes.map((f) => (
          <div
            key={f.key}
            style={{
              position: "fixed",
              zIndex: 41,
              left: `${f.left}%`,
              top: `${f.top}%`,
              width: f.size,
              height: f.size,
              borderRadius: "50%",
              background: `rgba(255,255,255,${f.op})`,
              boxShadow: "0 0 4px rgba(255,255,255,0.6)",
              pointerEvents: "none",
            }}
          />
        ))}

      {/* window frame image (transparent glass centre) */}
      <div className="window-frame" data-testid="window-frame" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bus_window_frame.png)` }} />

      {/* hanging interior ornament */}
      <div className="ornament-wrap" style={{ top: 0 }}>
        <svg width="46" height="120" viewBox="0 0 46 120" fill="none">
          <line x1="23" y1="0" x2="23" y2="58" stroke="#c9a24a" strokeWidth="1.4" />
          <circle cx="23" cy="70" r="11" fill="#d47a3f" stroke="#7a3d17" strokeWidth="2" />
          <circle cx="23" cy="70" r="4" fill="#efe6d0" />
          <path d="M17 82 L23 96 L29 82 Z" fill="#e6b64c" />
          <circle cx="23" cy="102" r="4" fill="#5f7a5a" />
        </svg>
      </div>
    </>
  );
}
