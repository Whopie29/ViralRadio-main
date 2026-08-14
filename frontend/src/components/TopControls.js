import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CloudRain, Sun, Snowflake, MapPin, Clock, ListMusic, Settings2,
  Maximize, Minimize, Volume2, VolumeX, Cloud, Check, Megaphone,
} from "lucide-react";
import { LOCATIONS, WEATHERS, TIMES } from "../lib/constants";

const weatherIcon = { clear: Cloud, rain: CloudRain, snow: Snowflake };
const timeIcon = { morning: Sun, afternoon: Sun, evening: Clock, night: Clock };

function Dropdown({ open, children }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="glass-panel absolute right-0 mt-2 w-52 rounded-xl p-1.5 z-[81]"
          initial={{ opacity: 0, y: -6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.98 }}
          transition={{ duration: 0.16 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Item({ active, onClick, icon: Icon, label, testid }) {
  return (
    <button
      onClick={onClick}
      data-testid={testid}
      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors"
      style={{ background: active ? "rgba(230,182,76,0.14)" : "transparent", color: active ? "#e6b64c" : "#efe6d0" }}
    >
      {Icon && <Icon size={15} />}
      <span className="font-body text-sm flex-1">{label}</span>
      {active && <Check size={14} />}
    </button>
  );
}

export default function TopControls({
  location, setLocation, weather, setWeather, time, setTime,
  onOpenPlaylist, onOpenSettings, muted, onToggleMute, onToggleFullscreen, isFullscreen,
  onHorn,
}) {
  const [menu, setMenu] = useState(null);
  const [hornPressed, setHornPressed] = useState(false);
  const toggle = (m) => setMenu((cur) => (cur === m ? null : m));
  const WIcon = weatherIcon[weather];
  const TIcon = timeIcon[time];

  const handleHorn = () => {
    setHornPressed(true);
    onHorn?.();
    setTimeout(() => setHornPressed(false), 200);
  };

  return (
    <div className="fixed top-3 right-3 sm:top-5 sm:right-5 z-[80] flex items-center gap-2" data-testid="top-controls">
      {/* Weather */}
      <div className="relative">
        <button className={`chip px-3 py-2 ${menu === "weather" ? "active" : ""}`} data-testid="weather-toggle" onClick={() => toggle("weather")}>
          <WIcon size={16} />
          <span className="hidden sm:inline font-tech text-xs tracking-wide">{WEATHERS[weather].label}</span>
        </button>
        <Dropdown open={menu === "weather"}>
          {Object.values(WEATHERS).map((w) => {
            const Icon = weatherIcon[w.id];
            return <Item key={w.id} testid={`weather-${w.id}`} icon={Icon} label={w.label} active={weather === w.id} onClick={() => { setWeather(w.id); setMenu(null); }} />;
          })}
        </Dropdown>
      </div>

      {/* Location */}
      <div className="relative">
        <button className={`chip px-3 py-2 ${menu === "loc" ? "active" : ""}`} data-testid="location-toggle" onClick={() => toggle("loc")}>
          <MapPin size={16} />
          <span className="hidden sm:inline font-tech text-xs tracking-wide">{location === "himachal" ? "Himachal" : "Uttarakhand"}</span>
        </button>
        <Dropdown open={menu === "loc"}>
          {Object.values(LOCATIONS).map((l) => (
            <Item key={l.id} testid={`location-${l.id}`} icon={MapPin} label={l.name} active={location === l.id} onClick={() => { setLocation(l.id); setMenu(null); }} />
          ))}
        </Dropdown>
      </div>

      {/* Time of day */}
      <div className="relative">
        <button className={`chip px-3 py-2 ${menu === "time" ? "active" : ""}`} data-testid="time-toggle" onClick={() => toggle("time")}>
          <TIcon size={16} />
          <span className="hidden sm:inline font-tech text-xs tracking-wide">{TIMES[time].label}</span>
        </button>
        <Dropdown open={menu === "time"}>
          {Object.values(TIMES).map((tm) => (
            <Item key={tm.id} testid={`time-${tm.id}`} icon={timeIcon[tm.id]} label={tm.label} active={time === tm.id} onClick={() => { setTime(tm.id); setMenu(null); }} />
          ))}
        </Dropdown>
      </div>

      {/* Playlist */}
      <button className="chip w-9 h-9 sm:w-auto sm:px-3 sm:py-2 justify-center" data-testid="playlist-toggle" onClick={onOpenPlaylist} title="Playlist">
        <ListMusic size={16} />
      </button>

      {/* Mute */}
      <button className={`chip w-9 h-9 justify-center ${muted ? "active" : ""}`} data-testid="mute-toggle" onClick={onToggleMute} title="Mute ambience">
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      {/* Horn */}
      <motion.button
        className={`chip px-3 py-2 ${hornPressed ? "active" : ""}`}
        data-testid="horn-button"
        title="Honk horn"
        onClick={handleHorn}
        animate={hornPressed ? { scale: 0.92 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 600, damping: 18 }}
      >
        <Megaphone size={16} />
        <span className="hidden sm:inline font-tech text-xs tracking-wide">Horn</span>
      </motion.button>

      {/* Settings */}
      <button className="chip w-9 h-9 justify-center" data-testid="settings-toggle" onClick={onOpenSettings} title="Settings">
        <Settings2 size={16} />
      </button>

      {/* Fullscreen */}
      <button className="chip w-9 h-9 justify-center hidden sm:flex" data-testid="fullscreen-toggle" onClick={onToggleFullscreen} title="Fullscreen">
        {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
      </button>
    </div>
  );
}
