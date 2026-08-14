import React from "react";
import { LOCATIONS, WEATHERS } from "../lib/constants";

export default function InfoReadout({ location, weather }) {
  const loc = LOCATIONS[location];
  const w = WEATHERS[weather];
  const temp = w.temps[location];

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[80] select-none" data-testid="info-readout">
      <h2 className="font-display text-2xl sm:text-3xl tracking-wide text-[#efe6d0] drop-shadow-md leading-none">
        {loc.name}
      </h2>
      <p className="font-tech text-[11px] sm:text-xs text-[#e6b64c] mt-1.5 tracking-widest drop-shadow-md" data-testid="weather-readout">
        {w.label.toUpperCase()} • {temp}°C
      </p>
      <p className="font-tech text-[10px] text-[#a99b78] mt-1 tracking-wide drop-shadow-md hidden sm:block">
        {loc.coords} · {loc.tagline}
      </p>
    </div>
  );
}
