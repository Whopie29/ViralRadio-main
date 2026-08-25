import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Music, Wind, Bus, RotateCcw, ListPlus } from "lucide-react";
import { TIMES } from "../lib/constants";

function Slider({ icon: Icon, label, value, onChange, testid }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-2 font-body text-sm text-[#efe6d0]"><Icon size={15} className="text-[#e6b64c]" /> {label}</span>
        <span className="font-tech text-[11px] text-[#8a7a55]">{Math.round(value * 100)}</span>
      </div>
      <input type="range" className="range w-full" min={0} max={1} step={0.01} value={value} data-testid={testid} onChange={(e) => onChange(parseFloat(e.target.value))} />
    </div>
  );
}

export default function SettingsPanel({
  open, onClose, musicVol, envVol, busVol, setMusicVol, setEnvVol, setBusVol,
  muted, onToggleMute, time, setTime, onReset, onOpenAdminSuggestions,
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="fixed inset-0 z-[90] bg-black/55" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} data-testid="settings-backdrop" />
          <motion.div
            className="glass-panel fixed z-[91] left-1/2 top-1/2 w-[90vw] max-w-[420px] rounded-2xl p-5"
            style={{ x: "-50%", y: "-50%" }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.2 }}
            data-testid="settings-panel"
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-display text-xl text-[#efe6d0]">Journey Settings</h3>
                <p className="font-tech text-[10px] text-[#8a7a55] tracking-widest">SOUND · ATMOSPHERE</p>
              </div>
              <button className="chip w-9 h-9 justify-center" data-testid="close-settings-btn" onClick={onClose}><X size={16} /></button>
            </div>

            <p className="font-tech text-[10px] text-[#8a7a55] tracking-widest mb-3">SOUND MIX</p>
            <div className="space-y-4">
              <Slider icon={Music} label="Music" value={musicVol} onChange={setMusicVol} testid="settings-music-vol" />
              <Slider icon={Wind} label="Environment" value={envVol} onChange={setEnvVol} testid="settings-env-vol" />
              <Slider icon={Bus} label="Bus" value={busVol} onChange={setBusVol} testid="settings-bus-vol" />
            </div>

            <button
              className={`chip w-full justify-center py-2.5 mt-4 font-tech text-xs tracking-widest ${muted ? "active" : ""}`}
              data-testid="settings-mute-btn"
              onClick={onToggleMute}
            >
              {muted ? "AMBIENCE MUTED" : "MUTE AMBIENCE"}
            </button>

            <p className="font-tech text-[10px] text-[#8a7a55] tracking-widest mt-6 mb-3">TIME OF DAY</p>
            <div className="grid grid-cols-4 gap-2">
              {Object.values(TIMES).map((tm) => (
                <button
                  key={tm.id}
                  data-testid={`settings-time-${tm.id}`}
                  onClick={() => setTime(tm.id)}
                  className={`chip flex-col py-2.5 justify-center ${time === tm.id ? "active" : ""}`}
                >
                  <span className="font-body text-xs">{tm.label}</span>
                </button>
              ))}
            </div>

            {/* Admin Song Suggestions Button */}
            {onOpenAdminSuggestions && (
              <button
                className="chip w-full justify-center py-2.5 mt-5 font-tech text-xs tracking-wider border-[rgba(230,182,76,0.3)] text-[#e6b64c] hover:bg-[#e6b64c]/10 transition-colors"
                onClick={() => {
                  onClose();
                  onOpenAdminSuggestions();
                }}
                data-testid="open-admin-suggestions-btn"
              >
                <ListPlus size={14} /> REVIEW SONG SUGGESTIONS (ADMIN)
              </button>
            )}

            <button className="w-full flex items-center justify-center gap-2 mt-5 py-2 font-body text-xs text-[#a99b78] hover:text-[#e6b64c] transition-colors" data-testid="reset-prefs-btn" onClick={onReset}>
              <RotateCcw size={13} /> Reset preferences
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

