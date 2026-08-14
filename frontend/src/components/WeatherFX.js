import React, { useRef, useEffect } from "react";

// Canvas-based cinematic weather: slow thin monsoon rain or gentle drifting snow.
export default function WeatherFX({ weather }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    let particles = [];
    const initRain = () => {
      const count = reduced ? 60 : Math.floor((w * h) / 14000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        len: 12 + Math.random() * 18,
        speed: 3 + Math.random() * 3,
        drift: 0.8 + Math.random() * 0.6,
        op: 0.1 + Math.random() * 0.25,
      }));
    };
    const initSnow = () => {
      const count = reduced ? 50 : Math.floor((w * h) / 22000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 1 + Math.random() * 3,
        speed: 0.4 + Math.random() * 1.1,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: 0.01 + Math.random() * 0.02,
        op: 0.5 + Math.random() * 0.5,
      }));
    };

    if (weather === "rain") initRain();
    else if (weather === "snow") initSnow();

    const drawRain = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = "round";
      for (const p of particles) {
        ctx.strokeStyle = `rgba(200,215,225,${p.op})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.drift * 2, p.y + p.len);
        ctx.stroke();
        p.y += p.speed;
        p.x -= p.drift;
        if (p.y > h) { p.y = -p.len; p.x = Math.random() * w; }
      }
      rafRef.current = requestAnimationFrame(drawRain);
    };

    const drawSnow = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx.fillStyle = `rgba(255,255,255,${p.op})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.sway += p.swaySpeed;
        p.y += p.speed;
        p.x += Math.sin(p.sway) * 0.6;
        if (p.y > h) { p.y = -p.r; p.x = Math.random() * w; }
      }
      rafRef.current = requestAnimationFrame(drawSnow);
    };

    if (weather === "rain") drawRain();
    else if (weather === "snow") drawSnow();
    else ctx.clearRect(0, 0, w, h);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [weather]);

  if (weather === "clear") return null;
  return (
    <canvas
      ref={canvasRef}
      data-testid="weather-canvas"
      style={{ position: "fixed", inset: 0, zIndex: 30, pointerEvents: "none" }}
    />
  );
}
