import React, { useMemo } from "react";
import { ASSETS, TIMES, WEATHERS } from "../lib/constants";

const Bird = ({ top, dur, delay }) => (
  <svg className="bird" style={{ top: `${top}vh`, width: 22, animationDuration: `${dur}s`, animationDelay: `${delay}s` }} viewBox="0 0 24 12" fill="none">
    <path d="M1 8 Q6 1 12 6 Q18 1 23 8" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  </svg>
);

export default function MountainScene({ location, weather, time }) {
  const t = TIMES[time] || TIMES.afternoon;

  const stars = useMemo(
    () =>
      Array.from({ length: 70 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 55,
        delay: Math.random() * 4,
        size: Math.random() > 0.8 ? 3 : 2,
      })),
    []
  );

  const sceneFilter = useMemo(() => {
    let f = t.filter;
    if (weather === "rain") f += " brightness(0.86) saturate(0.82)";
    if (weather === "snow") f += " brightness(1.05) saturate(0.72) hue-rotate(-6deg)";
    return f;
  }, [t.filter, weather]);

  const fogOpacity = weather === "rain" ? 0.85 : weather === "snow" ? 0.72 : 0.42;
  const weatherOverlay =
    weather === "rain" ? "rgba(38,52,68,0.3)" : weather === "snow" ? "rgba(198,214,236,0.16)" : "transparent";

  const showBirds = weather === "clear" && (time === "morning" || time === "afternoon");

  return (
    <div className="stage" data-testid="mountain-scene">
      <div className="cam-sway">
        <div className="cam-bounce">
          {/* sky */}
          <div className="sky" style={{ background: t.sky, zIndex: 0 }} />

          {/* celestial body */}
          <div
            className="celestial"
            style={{
              zIndex: 1,
              left: t.celestial.x,
              top: t.celestial.y,
              width: t.celestial.size,
              height: t.celestial.size,
              background: t.celestial.color,
              boxShadow: `0 0 90px 30px ${t.celestial.glow}`,
              opacity: weather === "rain" ? 0.35 : 0.95,
            }}
          />

          {/* stars */}
          <div className={`stars ${t.stars ? "on" : ""}`} style={{ zIndex: 1 }}>
            {stars.map((s, i) => (
              <span
                key={i}
                className="star"
                style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
              />
            ))}
          </div>

          {/* clouds */}
          <div className="cloud cloud-a" style={{ zIndex: 1, top: "12%", left: "50%", width: "34vw", height: "9vw" }} />
          <div className="cloud cloud-b" style={{ zIndex: 1, top: "22%", left: "70%", width: "26vw", height: "7vw" }} />

          {/* birds */}
          {showBirds && (
            <>
              <Bird top={18} dur={30} delay={0} />
              <Bird top={22} dur={30} delay={1.2} />
              <Bird top={26} dur={44} delay={12} />
            </>
          )}

          {/* landscape layers (filtered) */}
          <div style={{ position: "absolute", inset: 0, filter: sceneFilter, transition: "filter 1.4s ease" }}>
            <div
              key={`far-${location}`}
              className="pll pll-far fade-in"
              style={{ zIndex: 2, bottom: "31vh", height: "32vh", backgroundImage: `url(${ASSETS[location].far})`, backgroundPositionY: "bottom" }}
            />

            {/* distance fog band over far mountains */}
            <div
              className="fog"
              style={{
                zIndex: 3,
                bottom: "30vh",
                height: "16vh",
                opacity: fogOpacity,
                background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${t.fog} 60%, ${t.fog} 100%)`,
              }}
            />

            <div
              key={`mid-${location}`}
              className="pll pll-mid fade-in"
              style={{ zIndex: 4, bottom: "17vh", height: "28vh", backgroundImage: `url(${ASSETS[location].mid})`, backgroundPositionY: "bottom" }}
            />

            {/* road */}
            <div className="road-wrap" style={{ zIndex: 5 }}>
              <div className="road-plane" style={{ filter: weather === "rain" ? "brightness(0.8) saturate(0.7)" : "none" }}>
                <div className="road-lines" />
                {weather === "rain" && (
                  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(60% 40% at 50% 100%, rgba(255,240,190,0.12), rgba(255,240,190,0) 70%)" }} />
                )}
              </div>
            </div>

            <div
              key={`near-${location}`}
              className="pll pll-near fade-in"
              style={{ zIndex: 6, bottom: "5vh", height: "34vh", backgroundImage: `url(${ASSETS.trees})`, backgroundPositionY: "bottom" }}
            />
          </div>

          {/* atmospheric low fog */}
          <div
            className="fog"
            style={{ zIndex: 6, bottom: 0, height: "22vh", opacity: fogOpacity * 0.7, background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${t.fog} 100%)` }}
          />

          {/* weather + time tints */}
          <div className="scene-tint" style={{ zIndex: 7, background: t.tint }} />
          <div className="scene-tint" style={{ zIndex: 7, background: weatherOverlay }} />

          {/* interior + headlights */}
          <div className={`interior-glow ${t.interiorGlow ? "on" : ""}`} style={{ zIndex: 8 }} />
          <div className={`headlights ${t.headlights ? "on" : ""}`} style={{ zIndex: 8 }} />
        </div>
      </div>
    </div>
  );
}
