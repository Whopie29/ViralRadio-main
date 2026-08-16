import React, { useState, useEffect, useRef, useCallback } from "react";
import "@/App.css";
import { AnimatePresence } from "framer-motion";
import MountainScene from "@/components/MountainScene";
import WeatherFX from "@/components/WeatherFX";
import WindowOverlay from "@/components/WindowOverlay";
import LoadingScreen from "@/components/LoadingScreen";
import CassettePlayer from "@/components/CassettePlayer";
import PlaylistDrawer from "@/components/PlaylistDrawer";
import TopControls from "@/components/TopControls";
import InfoReadout from "@/components/InfoReadout";
import TimeReadout from "@/components/TimeReadout";
import SettingsPanel from "@/components/SettingsPanel";
import KarwaanTitle from "@/components/KarwaanTitle";
import { TRACK_CATEGORIES, SAMPLE_TRACKS } from "@/lib/constants";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useAmbientAudio } from "@/hooks/useAmbientAudio";

const DEFAULTS = {
  location: "himachal",
  weather: "rain",
  time: "evening",
  category: "90s",
  musicVol: 0.8,
  envVol: 0.5,
  busVol: 0.5,
  muted: false,
  index: 0,
  shuffle: false,
  repeat: "off",
};

export default function App() {
  const [started, setStarted] = useState(false);

  const [location, setLocation] = useLocalStorage("ps.location", DEFAULTS.location);
  const [weather, setWeather] = useLocalStorage("ps.weather", DEFAULTS.weather);
  const [time, setTime] = useLocalStorage("ps.time", DEFAULTS.time);
  const [category, setCategory] = useLocalStorage("ps.category", DEFAULTS.category);
  const [musicVol, setMusicVol] = useLocalStorage("ps.musicVol", DEFAULTS.musicVol);
  const [envVol, setEnvVol] = useLocalStorage("ps.envVol", DEFAULTS.envVol);
  const [busVol, setBusVol] = useLocalStorage("ps.busVol", DEFAULTS.busVol);
  const [muted, setMuted] = useLocalStorage("ps.muted", DEFAULTS.muted);
  const [index, setIndex] = useLocalStorage("ps.index", DEFAULTS.index);
  const [shuffle, setShuffle] = useLocalStorage("ps.shuffle", DEFAULTS.shuffle);
  const [repeat, setRepeat] = useLocalStorage("ps.repeat", DEFAULTS.repeat);

  const tracks = TRACK_CATEGORIES[category] || TRACK_CATEGORIES["90s"] || SAMPLE_TRACKS;
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playlistOpen, setPlaylistOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const audioRef = useRef(null);
  const simRef = useRef(null);
  // Keep a ref that always mirrors `playing` so effects/callbacks never see a stale closure value.
  const playingRef = useRef(playing);
  useEffect(() => { playingRef.current = playing; }, [playing]);
  // Flag set by handleEnd so the load effect knows to autoplay the next track
  // even if the setPlaying(true) state update hasn't been committed yet.
  const shouldAutoPlayRef = useRef(false);
  // Always-fresh ref for tracks so handleEnd never captures a stale length.
  const tracksRef = useRef(tracks);
  useEffect(() => { tracksRef.current = tracks; }, [tracks]);
  // Guard: true while we are loading a new src — suppresses spurious 'ended' events
  // that some browsers fire when src is reassigned and load() is called.
  const isLoadingRef = useRef(false);
  const ambient = useAmbientAudio();
  const { hornHonk } = ambient;

  const safeIndex = Math.min(index, Math.max(0, tracks.length - 1));
  const track = tracks[safeIndex] || tracks[0];

  // ---- ambient wiring ----
  useEffect(() => {
    if (started) ambient.setWeather(weather);
  }, [started, weather, ambient]);

  useEffect(() => {
    if (started) ambient.setVolumes({ env: envVol, bus: busVol, muted });
  }, [started, envVol, busVol, muted, ambient]);

  // ---- music element volume ----
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = muted ? 0 : musicVol;
  }, [musicVol, muted, safeIndex]);

  // ---- load source when track changes ----
  useEffect(() => {
    setCurrentTime(0);
    const a = audioRef.current;
    if (!a) return;
    // Raise the loading guard BEFORE touching src so any spurious 'ended' from
    // load() is ignored by handleEnd.
    isLoadingRef.current = true;
    if (track?.url) {
      a.src = track.url;
      a.load();
      // Use the ref (not the stale `playing` closure) so we correctly autoplay
      // when handleEnd advances to the next track before setPlaying(true) commits.
      const shouldPlay = shouldAutoPlayRef.current || playingRef.current;
      shouldAutoPlayRef.current = false; // consume the flag
      if (shouldPlay) {
        a.play()
          .then(() => { isLoadingRef.current = false; })
          .catch(() => { isLoadingRef.current = false; });
      } else {
        // Not playing — clear the guard after a short delay so real ended events
        // are handled correctly once the user presses play.
        setTimeout(() => { isLoadingRef.current = false; }, 500);
      }
    } else {
      shouldAutoPlayRef.current = false;
      a.removeAttribute("src");
      a.load();
      setTimeout(() => { isLoadingRef.current = false; }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeIndex, track?.url]);

  const handleEnd = useCallback(() => {
    // Ignore spurious 'ended' events fired during src load.
    if (isLoadingRef.current) return;

    const currentTracks = tracksRef.current;
    const currentIdx = Math.min(index, Math.max(0, currentTracks.length - 1));

    if (repeat === "one") {
      setCurrentTime(0);
      const a = audioRef.current;
      if (track?.url && a) { a.currentTime = 0; a.play().catch(() => {}); }
      return;
    }
    const last = currentIdx === currentTracks.length - 1;
    let nextIdx;
    if (shuffle) {
      nextIdx = currentTracks.length > 1 ? (currentIdx + 1 + Math.floor(Math.random() * (currentTracks.length - 1))) % currentTracks.length : 0;
    } else if (last) {
      if (repeat === "all") nextIdx = 0;
      else { setPlaying(false); setCurrentTime(0); return; }
    } else {
      nextIdx = currentIdx + 1;
    }
    // Set the flag BEFORE setIndex so the load effect sees it when it fires.
    shouldAutoPlayRef.current = true;
    setIndex(nextIdx);
    setCurrentTime(0);
    setPlaying(true);
  }, [repeat, shuffle, index, track?.url, setIndex]);

  // ---- playback tick (audio for real files, simulation for placeholders) ----
  useEffect(() => {
    if (simRef.current) { clearInterval(simRef.current); simRef.current = null; }
    const a = audioRef.current;
    if (!playing) { if (a) a.pause(); return; }

    if (track?.url) {
      if (a) a.play().then(() => { isLoadingRef.current = false; }).catch(() => { isLoadingRef.current = false; });
    } else {
      const dur = track?.duration || 1;
      simRef.current = setInterval(() => {
        setCurrentTime((t) => {
          const nt = t + 0.25;
          if (nt >= dur) { handleEnd(); return 0; }
          return nt;
        });
      }, 250);
    }
    return () => { if (simRef.current) { clearInterval(simRef.current); simRef.current = null; } };
  }, [playing, safeIndex, track?.url, track?.duration, handleEnd]);

  // ---- audio element events ----
  const onTimeUpdate = () => { const a = audioRef.current; if (a && track?.url) setCurrentTime(a.currentTime); };
  const onLoadedMeta = () => {
    // Durations already populated from ID3 tags; no update needed.
  };


  // ---- fullscreen ----
  useEffect(() => {
    const onFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);
  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else document.documentElement.requestFullscreen?.().catch(() => {});
  };

  // ---- controls ----
  const togglePlay = () => setPlaying((p) => !p);
  const next = () => { handleEnd(); };
  const prev = () => {
    if (currentTime > 3) {
      setCurrentTime(0);
      const a = audioRef.current; if (track?.url && a) a.currentTime = 0;
      return;
    }
    const idx = (safeIndex - 1 + tracks.length) % tracks.length;
    setIndex(idx); setCurrentTime(0); setPlaying(true);
  };
  const seek = (t) => {
    setCurrentTime(t);
    const a = audioRef.current; if (track?.url && a) a.currentTime = t;
  };
  const selectTrack = (cat, i) => {
    if (typeof cat === "string") {
      setCategory(cat);
      setIndex(i);
    } else {
      setIndex(cat);
    }
    setCurrentTime(0);
    setPlaying(true);
  };
  const cycleRepeat = () => setRepeat((r) => (r === "off" ? "all" : r === "all" ? "one" : "off"));

  const begin = () => {
    setStarted(true);
    ambient.start();
    ambient.setWeather(weather);
    ambient.setVolumes({ env: envVol, bus: busVol, muted });
    setPlaying(true);
  };


  const resetPrefs = () => {
    setLocation(DEFAULTS.location); setWeather(DEFAULTS.weather); setTime(DEFAULTS.time);
    setCategory(DEFAULTS.category);
    setMusicVol(DEFAULTS.musicVol); setEnvVol(DEFAULTS.envVol); setBusVol(DEFAULTS.busVol);
    setMuted(DEFAULTS.muted); setShuffle(DEFAULTS.shuffle); setRepeat(DEFAULTS.repeat);
  };

  return (
    <div className="stage" data-testid="app-root">
      <MountainScene location={location} weather={weather} time={time} />
      <WeatherFX weather={weather} />
      <WindowOverlay weather={weather} />
      <div className="grain" />

      <audio ref={audioRef} onEnded={handleEnd} onTimeUpdate={onTimeUpdate} onLoadedMetadata={onLoadedMeta} />

      {started && (
        <>
          <KarwaanTitle />

          <TopControls
            location={location} setLocation={setLocation}
            weather={weather} setWeather={setWeather}
            time={time} setTime={setTime}
            onOpenPlaylist={() => setPlaylistOpen(true)}
            onOpenSettings={() => setSettingsOpen(true)}
            muted={muted} onToggleMute={() => setMuted((m) => !m)}
            onToggleFullscreen={toggleFullscreen} isFullscreen={isFullscreen}
            onHorn={hornHonk}
          />

          {/* Bottom Bar: Left (Location/Weather/Passengers), Center (Cylinder Player), Right (Time/Date) */}
          <div className="fixed bottom-3 sm:bottom-6 left-0 right-0 px-3 sm:px-6 z-[80] pointer-events-none flex items-center justify-between gap-2 sm:gap-4">
            {/* Left: Location & Weather & Live Passengers */}
            <div className="pointer-events-auto flex-1 flex justify-start min-w-0">
              <InfoReadout location={location} weather={weather} playing={playing} />
            </div>

            {/* Center: Horizontal Cylinder Player */}
            <div className="pointer-events-auto shrink-0 flex justify-center translate-x-20 sm:translate-x-24">
              <CassettePlayer
                track={track}
                playing={playing}
                currentTime={currentTime}
                duration={track?.duration}
                onTogglePlay={togglePlay}
                onPrev={prev}
                onNext={next}
                onSeek={seek}
                musicVol={musicVol}
                onMusicVol={setMusicVol}
                shuffle={shuffle}
                repeat={repeat}
                onShuffle={() => setShuffle((s) => !s)}
                onRepeat={cycleRepeat}
                onOpenPlaylist={() => setPlaylistOpen(true)}
              />
            </div>

            {/* Right: Time & Date — hidden when playlist is open to avoid overlap */}
            <div className={`pointer-events-auto flex-1 flex justify-end min-w-0 hidden md:flex transition-opacity duration-200 ${playlistOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
              <TimeReadout time={time} />
            </div>
          </div>

          <PlaylistDrawer
            open={playlistOpen}
            onClose={() => setPlaylistOpen(false)}
            currentCategory={category}
            currentIndex={safeIndex}
            playing={playing}
            onSelect={selectTrack}
          />

          <SettingsPanel
            open={settingsOpen}
            onClose={() => setSettingsOpen(false)}
            musicVol={musicVol} envVol={envVol} busVol={busVol}
            setMusicVol={setMusicVol} setEnvVol={setEnvVol} setBusVol={setBusVol}
            muted={muted} onToggleMute={() => setMuted((m) => !m)}
            time={time} setTime={setTime}
            onReset={resetPrefs}
          />
        </>
      )}

      <AnimatePresence>{!started && <LoadingScreen onBegin={begin} />}</AnimatePresence>
    </div>
  );
}
