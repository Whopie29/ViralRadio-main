import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { TIMES } from "../lib/constants";

export default function TimeReadout({ time, className = "" }) {
  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setDateStr(
        now.toLocaleDateString([], {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeLabel = TIMES[time]?.label || "Live";

  return (
    <div
      className={`select-none ${className}`}
      data-testid="time-readout"
    >
      <div className="chip px-3 py-2 sm:px-3.5 sm:py-2.5 flex flex-col items-start gap-1 sm:gap-1.5 text-left rounded-xl shadow-lg border border-[rgba(233,201,120,0.18)] bg-gradient-to-b from-[rgba(31,26,18,0.75)] to-[rgba(18,15,10,0.88)] backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-[#e6b64c] shrink-0" />
          <span className="font-tech text-xs sm:text-sm font-semibold tracking-wider text-[#efe6d0]">
            {timeStr}
          </span>
          <span className="font-tech text-[10px] sm:text-xs text-[#e6b64c] ml-1 opacity-90">
            • {timeLabel.toUpperCase()}
          </span>
        </div>
        <div className="font-tech text-[10px] sm:text-[11px] text-[#cdbf9f] flex items-center gap-2 pl-[22px]">
          <span>{dateStr}</span>
        </div>
      </div>
    </div>
  );
}
