import json

with open('all_processed_tracks.json', 'r', encoding='utf-8') as f:
    categories = json.load(f)

header = '''// Static config for the journey experience.

export const ASSETS = {
  himachal: { far: "/assets/mtn_far_himachal.png", mid: "/assets/hills_mid_himachal.png" },
  uttarakhand: { far: "/assets/mtn_far_uttarakhand.png", mid: "/assets/hills_mid_uttarakhand.png" },
  trees: "/assets/trees_near_pine.png",
  window: "/assets/bus_window_frame.png",
};

export const LOCATIONS = {
  himachal: {
    id: "himachal",
    name: "Himachal Pradesh",
    coords: "31.10°N  77.17°E",
    tagline: "Pine valleys & winding roads",
  },
  uttarakhand: {
    id: "uttarakhand",
    name: "Uttarakhand",
    coords: "30.07°N  79.09°E",
    tagline: "Himalayan forests & snow peaks",
  },
};

export const WEATHERS = {
  clear: { id: "clear", label: "Clear", temps: { himachal: 19, uttarakhand: 17 } },
  rain: { id: "rain", label: "Rainy", temps: { himachal: 14, uttarakhand: 12 } },
  snow: { id: "snow", label: "Snow", temps: { himachal: 2, uttarakhand: -1 } },
};

// Time-of-day atmosphere presets. `sky` is a CSS gradient, others tune the mood.
export const TIMES = {
  morning: {
    id: "morning",
    label: "Morning",
    sky: "linear-gradient(180deg,#7ea6c4 0%,#bcd4dd 42%,#f0e2bd 100%)",
    filter: "saturate(1.05) brightness(1.04) contrast(1.02)",
    tint: "rgba(255,224,160,0.05)",
    fog: "rgba(220,232,236,0.55)",
    stars: false,
    interiorGlow: false,
    headlights: false,
    celestial: { color: "#fff2cf", glow: "rgba(255,235,175,0.7)", x: "18%", y: "24%", size: 90 },
  },
  afternoon: {
    id: "afternoon",
    label: "Afternoon",
    sky: "linear-gradient(180deg,#8fb3cf 0%,#c8dde4 46%,#eaeee6 100%)",
    filter: "saturate(1) brightness(1)",
    tint: "rgba(255,255,255,0)",
    fog: "rgba(210,224,230,0.5)",
    stars: false,
    interiorGlow: false,
    headlights: false,
    celestial: { color: "#fffaf0", glow: "rgba(255,250,235,0.55)", x: "72%", y: "16%", size: 70 },
  },
  evening: {
    id: "evening",
    label: "Evening",
    sky: "linear-gradient(180deg,#20304f 0%,#4d3f61 38%,#b56a48 74%,#e0a15b 100%)",
    filter: "saturate(0.98) brightness(0.9) contrast(1.03)",
    tint: "rgba(224,120,56,0.08)",
    fog: "rgba(120,110,120,0.5)",
    stars: false,
    interiorGlow: true,
    headlights: true,
    celestial: { color: "#ffb96a", glow: "rgba(255,170,90,0.75)", x: "26%", y: "40%", size: 78 },
  },
  night: {
    id: "night",
    label: "Night",
    sky: "linear-gradient(180deg,#050914 0%,#0b1730 55%,#17273f 100%)",
    filter: "brightness(0.62) saturate(0.82) contrast(1.05)",
    tint: "rgba(8,16,38,0.34)",
    fog: "rgba(40,52,80,0.5)",
    stars: true,
    interiorGlow: true,
    headlights: true,
    celestial: { color: "#e8eefc", glow: "rgba(200,215,255,0.5)", x: "76%", y: "18%", size: 54 },
  },
};

export const PLAYLIST_CATEGORIES = [
  { id: "90s", label: "90s", fullName: "90s Bollywood Classics", subtitle: "Golden Era Cassettes & Melodies", count: ''' + str(len(categories.get('90s', []))) + ''' },
  { id: "nostalgic", label: "Nostalgic", fullName: "2000s Nostalgia", subtitle: "Unforgettable Childhood Tunes", count: ''' + str(len(categories.get('nostalgic', []))) + ''' },
  { id: "rajasthani", label: "Rajasthani", fullName: "Rajasthani Folk & Heritage", subtitle: "Desert Winds & Authentic Folk Melodies", count: ''' + str(len(categories.get('rajasthani', []))) + ''' },
  { id: "english", label: "English", fullName: "English Hits & Classics", subtitle: "Global Bangers & Roadtrip Anthems", count: ''' + str(len(categories.get('english', []))) + ''' },
  { id: "hitlist", label: "Hitlist", fullName: "Top Hitlist", subtitle: "Chartbusters on the Highway", count: ''' + str(len(categories.get('hitlist', []))) + ''' },
  { id: "punjabi", label: "Punjabi", fullName: "Punjabi Bangers", subtitle: "High-energy Dhol & Highway Beats", count: ''' + str(len(categories.get('punjabi', []))) + ''' },
  { id: "haryanvi", label: "Haryanvi", fullName: "Haryanvi Hits", subtitle: "Desi Ragni & Bass Boosts", count: ''' + str(len(categories.get('haryanvi', []))) + ''' },
  { id: "pahadi", label: "Pahadi", fullName: "Pahadi Safar", subtitle: "Mountain Melodies & Folk Acoustic", count: ''' + str(len(categories.get('pahadi', []))) + ''' },
];
'''

track_categories_js = 'export const TRACK_CATEGORIES = ' + json.dumps(categories, indent=2, ensure_ascii=False) + ';\n\n'
sample_tracks_js = 'export const SAMPLE_TRACKS = TRACK_CATEGORIES["90s"];\n\n'

footer = '''export const fmtTime = (s) => {
  if (!s || Number.isNaN(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};
'''

with open('frontend/src/lib/constants.js', 'w', encoding='utf-8') as f:
    f.write(header + '\n' + track_categories_js + sample_tracks_js + footer)

print('Updated frontend/src/lib/constants.js successfully!')
