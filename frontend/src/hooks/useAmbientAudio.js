import { useRef, useCallback, useEffect } from "react";

// Synthesised ambient soundscape (engine, road, wind, rain, birds, horn) via Web Audio.
// Two mix buses: `bus` (vehicle) and `env` (environment). Music is handled separately.
export function useAmbientAudio() {
  const ref = useRef(null);

  const build = useCallback(() => {
    if (ref.current) return ref.current;
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = new AC();

    const master = ctx.createGain();
    master.gain.value = 1;
    master.connect(ctx.destination);

    const busGain = ctx.createGain();
    busGain.gain.value = 0.6;
    busGain.connect(master);

    const envGain = ctx.createGain();
    envGain.gain.value = 0.5;
    envGain.connect(master);

    // ---- noise buffer (reusable) ----
    const noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 3, ctx.sampleRate);
    const nd = noiseBuf.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;

    const makeNoise = () => {
      const n = ctx.createBufferSource();
      n.buffer = noiseBuf;
      n.loop = true;
      return n;
    };

    // ---- engine hum ----
    const eng1 = ctx.createOscillator();
    eng1.type = "sawtooth";
    eng1.frequency.value = 52;
    const eng2 = ctx.createOscillator();
    eng2.type = "sawtooth";
    eng2.frequency.value = 78;
    const engFilter = ctx.createBiquadFilter();
    engFilter.type = "lowpass";
    engFilter.frequency.value = 180;
    const engGain = ctx.createGain();
    engGain.gain.value = 0.16;
    eng1.connect(engFilter);
    eng2.connect(engFilter);
    engFilter.connect(engGain);
    engGain.connect(busGain);
    // chug LFO
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 6;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.05;
    lfo.connect(lfoGain);
    lfoGain.connect(engGain.gain);

    // ---- road rumble (brown-ish noise) ----
    const road = makeNoise();
    const roadLP = ctx.createBiquadFilter();
    roadLP.type = "lowpass";
    roadLP.frequency.value = 380;
    const roadGain = ctx.createGain();
    roadGain.gain.value = 0.12;
    road.connect(roadLP);
    roadLP.connect(roadGain);
    roadGain.connect(busGain);

    // ---- wind ----
    const wind = makeNoise();
    const windBP = ctx.createBiquadFilter();
    windBP.type = "bandpass";
    windBP.frequency.value = 480;
    windBP.Q.value = 0.7;
    const windGain = ctx.createGain();
    windGain.gain.value = 0.05;
    wind.connect(windBP);
    windBP.connect(windGain);
    windGain.connect(envGain);
    // slow wind swell
    const windLfo = ctx.createOscillator();
    windLfo.frequency.value = 0.08;
    const windLfoGain = ctx.createGain();
    windLfoGain.gain.value = 0.035;
    windLfo.connect(windLfoGain);
    windLfoGain.connect(windGain.gain);

    // ---- rain ----
    const rain = makeNoise();
    const rainHP = ctx.createBiquadFilter();
    rainHP.type = "highpass";
    rainHP.frequency.value = 1200;
    const rainLP = ctx.createBiquadFilter();
    rainLP.type = "lowpass";
    rainLP.frequency.value = 8000;
    const rainGain = ctx.createGain();
    rainGain.gain.value = 0; // set by weather
    rain.connect(rainHP);
    rainHP.connect(rainLP);
    rainLP.connect(rainGain);
    rainGain.connect(envGain);

    const nodes = {
      ctx, master, busGain, envGain, engGain, windGain, rainGain,
      birdTimer: null, honkTimer: null, weather: "clear",
      makeNoise,
    };

    // start continuous sources
    [eng1, eng2, lfo, road, wind, windLfo, rain].forEach((s) => {
      try { s.start(); } catch { /* already */ }
    });

    ref.current = nodes;
    return nodes;
  }, []);

  const chirp = useCallback(() => {
    const n = ref.current;
    if (!n) return;
    const { ctx, envGain } = n;
    const t = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = "sine";
    const g = ctx.createGain();
    const base = 1800 + Math.random() * 1400;
    o.frequency.setValueAtTime(base, t);
    o.frequency.linearRampToValueAtTime(base + 500, t + 0.08);
    o.frequency.linearRampToValueAtTime(base - 200, t + 0.16);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.05, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    o.connect(g);
    g.connect(envGain);
    o.start(t);
    o.stop(t + 0.25);
  }, []);

  const honk = useCallback(() => {
    const n = ref.current;
    if (!n) return;
    const { ctx, busGain } = n;
    const t = ctx.currentTime;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.14, t + 0.05);
    g.gain.setValueAtTime(0.14, t + 0.55);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.85);
    g.connect(busGain);
    [370, 440].forEach((f) => {
      const o = ctx.createOscillator();
      o.type = "square";
      o.frequency.value = f;
      const og = ctx.createGain();
      og.gain.value = 0.5;
      o.connect(og);
      og.connect(g);
      o.start(t);
      o.stop(t + 0.9);
    });
  }, []);

  const start = useCallback(() => {
    const n = build();
    if (n.ctx.state === "suspended") n.ctx.resume();
    if (!n.honkTimer) {
      const scheduleHonk = () => {
        n.honkTimer = setTimeout(() => {
          honk();
          scheduleHonk();
        }, 45000 + Math.random() * 75000);
      };
      scheduleHonk();
    }
    if (!n.birdTimer) {
      n.birdTimer = setInterval(() => {
        if (n.weather === "clear" && Math.random() > 0.45) chirp();
      }, 9000);
    }
  }, [build, honk, chirp]);

  const setWeather = useCallback((weather) => {
    const n = ref.current;
    if (!n) return;
    n.weather = weather;
    const t = n.ctx.currentTime;
    const rainTarget = weather === "rain" ? 0.11 : 0;
    n.rainGain.gain.setTargetAtTime(rainTarget, t, 0.6);
    const windTarget = weather === "snow" ? 0.075 : weather === "rain" ? 0.06 : 0.05;
    n.windGain.gain.setTargetAtTime(windTarget, t, 0.8);
  }, []);

  const setVolumes = useCallback(({ env, bus, muted }) => {
    const n = ref.current;
    if (!n) return;
    const t = n.ctx.currentTime;
    n.busGain.gain.setTargetAtTime(muted ? 0 : bus, t, 0.15);
    n.envGain.gain.setTargetAtTime(muted ? 0 : env, t, 0.15);
  }, []);

  useEffect(() => {
    return () => {
      const n = ref.current;
      if (!n) return;
      if (n.honkTimer) clearTimeout(n.honkTimer);
      if (n.birdTimer) clearInterval(n.birdTimer);
      try { n.ctx.close(); } catch { /* ignore */ }
      ref.current = null;
    };
  }, []);

  return { start, setWeather, setVolumes, honk };
}
