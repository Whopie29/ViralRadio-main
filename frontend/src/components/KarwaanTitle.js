import React from "react";

export default function KarwaanTitle() {
  return (
    <div
      className="fixed top-[16%] sm:top-[17%] md:top-[18%] left-1/2 -translate-x-1/2 z-[42] pointer-events-none select-none w-full max-w-[950px] flex justify-center items-center px-4"
      data-testid="karwaan-title"
    >
      <div className="relative flex flex-col items-center gap-0.5">

        {/* Top: "270+ tracks" — small tracked caps above the main title */}
        <div
          className="text-center tracking-[0.35em] uppercase"
          style={{
            fontFamily: "'IBM Plex Mono', 'Manrope', monospace",
            fontWeight: 600,
            fontSize: "clamp(9px, 1.1vw, 13px)",
            color: "rgba(255,255,255,0.78)",
            letterSpacing: "0.38em",
            textShadow:
              "0 1px 8px rgba(0,0,0,0.9), 0 0 18px rgba(0,0,0,0.7)",
          }}
        >
          270+ tracks
        </div>

        {/* Main: कारवां — heavy bold Devanagari headline */}
        <div
          className="font-black text-center"
          style={{
            fontFamily: "'Gajraj One', 'Mukta', 'Yatra One', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(60px, 10.5vw, 120px)",
            lineHeight: 1.05,
            letterSpacing: "0.06em",
            background: "linear-gradient(180deg, #FFFFFF 0%, #F5F3EF 55%, #D4CFC4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter:
              "drop-shadow(0 5px 20px rgba(0,0,0,0.98)) drop-shadow(0 2px 5px rgba(0,0,0,0.92)) drop-shadow(0 0 22px rgba(255,255,255,0.18))",
            transform: "perspective(280px) rotateX(9deg) scaleY(1.06)",
            WebkitTextStroke: "1.5px rgba(0,0,0,0.45)",
          }}
        >
          कारवां
        </div>

        {/* Bottom: "all the way across himalayas" — wide cinematic italic tagline */}
        <div
          className="text-center italic tracking-[0.22em]"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 600,
            fontStyle: "italic",
            fontSize: "clamp(9px, 1.05vw, 13px)",
            color: "rgba(255,255,255,0.65)",
            letterSpacing: "0.26em",
            textShadow:
              "0 1px 8px rgba(0,0,0,0.92), 0 0 16px rgba(0,0,0,0.7)",
            marginTop: "2px",
          }}
        >
          all the way across himalayas
        </div>

      </div>
    </div>
  );
}
