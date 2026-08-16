import React from "react";
import { LOCATIONS, WEATHERS } from "../lib/constants";

export default function InfoReadout({ location, weather, className = "" }) {
  const loc = LOCATIONS[location];
  const w = WEATHERS[weather];
  const temp = w.temps[location];

  return (
    <div className={`select-none ${className}`} data-testid="info-readout">
      <div className="chip px-3 py-2 sm:px-3.5 sm:py-2.5 flex flex-col gap-1 sm:gap-1.5 text-left rounded-xl shadow-lg border border-[rgba(233,201,120,0.18)] bg-gradient-to-b from-[rgba(31,26,18,0.75)] to-[rgba(18,15,10,0.88)] backdrop-blur-md" style={{ alignItems: "flex-start" }}>
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-tech text-xs sm:text-sm font-semibold tracking-wide text-[#efe6d0]">
            {loc.name}
          </span>
          <span className="font-tech text-[10px] sm:text-xs text-[#e6b64c] opacity-90" data-testid="weather-readout">
            • {w.label.toUpperCase()} {temp}°C
          </span>
        </div>
        <div className="font-tech text-[10px] sm:text-[11px] text-[#cdbf9f] flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
          <span>{loc.tagline}</span>
          <span className="hidden sm:inline text-[rgba(233,201,120,0.3)]">|</span>
          <span className="text-[#a99b78] font-mono text-[9.5px] sm:text-[10.5px]">{loc.coords}</span>
        </div>
      </div>
    </div>
  );
}


