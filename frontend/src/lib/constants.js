// Static config for the journey experience.

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

// Old Bangers — 90s Hindi classics
export const SAMPLE_TRACKS = [
  { id: "bg_1",  title: "Aawara Hawa Ka Jhonka Hoon",           artist: "Altaf Raja",                        album: "Tum To Thehre Pardesi",      duration: 777, url: "/audio/banger_01.mp3" },
  { id: "bg_2",  title: "Ab Tere Bin",                           artist: "Kumar Sanu",                        album: "Aashiqui",                   duration: 345, url: "/audio/banger_02.mp3" },
  { id: "bg_3",  title: "Achchha Sila Diya Toone Mere Pyar Ka", artist: "Sonu Nigam",                        album: "Bewafa Sanam",               duration: 311, url: "/audio/banger_03.mp3" },
  { id: "bg_4",  title: "Aitbaar Nahi Karna",                   artist: "Abhijeet, Sadhana Sargam",          album: "Qayamat",                    duration: 277, url: "/audio/banger_04.mp3" },
  { id: "bg_5",  title: "Ankh Hai Bhari Bhari (Male Version)",  artist: "Kumar Sanu",                        album: "Nadeem - Shravan Hits",      duration: 437, url: "/audio/banger_05.mp3" },
  { id: "bg_6",  title: "Bahut Pyar Karte Hai",                 artist: "S. P. Balasubrahmanyam",            album: "Saajan",                     duration: 185, url: "/audio/banger_06.mp3" },
  { id: "bg_7",  title: "Chehra Kya Dekhte Ho",                 artist: "Asha Bhosle, Kumar Sanu",           album: "Salaami",                    duration: 358, url: "/audio/banger_07.mp3" },
  { id: "bg_8",  title: "Chhupana Bhi Nahin Aata",              artist: "Vinod Rathod",                      album: "Baazigar",                   duration: 419, url: "/audio/banger_08.mp3" },
  { id: "bg_9",  title: "Chori Chori Dil Tera",                 artist: "Kumar Sanu, Sujata Goswamy",        album: "Phool Aur Angaar",           duration: 279, url: "/audio/banger_09.mp3" },
  { id: "bg_10", title: "Chura Ke Dil Mera",                    artist: "Kumar Sanu, Alka Yagnik",           album: "Main Khiladi Tu Anari",      duration: 468, url: "/audio/banger_10.mp3" },
  { id: "bg_11", title: "Dekha Hai Pehli Baar",                 artist: "Alka Yagnik, S. P. Balasubrahmanyam", album: "Saajan",                  duration: 529, url: "/audio/banger_11.mp3" },
  { id: "bg_12", title: "Dekhne Walon Ne",                      artist: "Udit Narayan, Alka Yagnik",         album: "Chori Chori Chupke Chupke", duration: 373, url: "/audio/banger_12.mp3" },
  { id: "bg_13", title: "Dheere Dheere Pyar Ko",                artist: "Alka Yagnik, Kumar Sanu",           album: "Phool Aur Kaante",           duration: 328, url: "/audio/banger_13.mp3" },
  { id: "bg_14", title: "Dil Cheer Ke Dekh",                    artist: "Kumar Sanu",                        album: "Rang",                       duration: 313, url: "/audio/banger_14.mp3" },
  { id: "bg_15", title: "Dil Diwana",                           artist: "Anuradha Paudwal, Kumar Sanu",      album: "Daag The Fire",              duration: 376, url: "/audio/banger_15.mp3" },
  { id: "bg_16", title: "Dil Ka Aalam",                         artist: "Kumar Sanu",                        album: "Aashiqui",                   duration: 298, url: "/audio/banger_16.mp3" },
  { id: "bg_17", title: "Ek Aisi Ladki",                        artist: "Kumar Sanu",                        album: "Dilwale",                    duration: 266, url: "/audio/banger_17.mp3" },
  { id: "bg_18", title: "Ek Ladki Ko Dekha",                    artist: "Kumar Sanu, R. D. Burman",          album: "1942 A Love Story",          duration: 275, url: "/audio/banger_18.mp3" },
  { id: "bg_19", title: "Ek Sanam Chahiye Aashiqui Ke Liye",   artist: "Kumar Sanu",                        album: "Aashiqui Hits",              duration: 372, url: "/audio/banger_19.mp3" },
  { id: "bg_20", title: "Hum Laakh Chupaye",                    artist: "Asha Bhosle, Kumar Sanu",           album: "Jaan Tere Naam",             duration: 415, url: "/audio/banger_20.mp3" },
  { id: "bg_21", title: "Hum Pyaar Hai Tumhare",                artist: "Kumar Sanu, Alka Yagnik",           album: "Haan Maine Bhi Pyaar Kiya",  duration: 426, url: "/audio/banger_21.mp3" },
  { id: "bg_22", title: "Hum Yaar Hai Tumhare",                 artist: "Udit Narayan, Alka Yagnik",         album: "Haan Maine Bhi Pyaar Kiya",  duration: 434, url: "/audio/banger_22.mp3" },
  { id: "bg_23", title: "Is Tarah Aashiqui Ka",                 artist: "Kumar Sanu",                        album: "Imtihan",                    duration: 443, url: "/audio/banger_23.mp3" },
  { id: "bg_24", title: "Jeeta Tha Jiske Liye",                 artist: "Kumar Sanu, Alka Yagnik",           album: "Dilwale",                    duration: 458, url: "/audio/banger_24.mp3" },
  { id: "bg_25", title: "Jeeye to Jeeye Kaise",                 artist: "Pankaj Udhas",                      album: "Saajan",                     duration: 209, url: "/audio/banger_25.mp3" },
  { id: "bg_26", title: "Kaash Kahin Aisa Hota",                artist: "Kumar Sanu",                        album: "Mohra",                      duration: 305, url: "/audio/banger_26.mp3" },
  { id: "bg_27", title: "Kahin Mujhe Pyar Hua Toh Nahin",       artist: "Alka Yagnik, Kumar Sanu",           album: "Rang",                       duration: 424, url: "/audio/banger_27.mp3" },
  { id: "bg_28", title: "Kitna Haseen Chehra",                  artist: "Kumar Sanu",                        album: "Dilwale",                    duration: 354, url: "/audio/banger_28.mp3" },
  { id: "bg_29", title: "Kitna Pyaara Tujhe Rabne Banaya",      artist: "Alka Yagnik, Udit Narayan",         album: "Raja Hindustani",            duration: 382, url: "/audio/banger_29.mp3" },
  { id: "bg_30", title: "Kya Karte They Sajna",                 artist: "Udit Narayan, Anuradha Paudwal",    album: "Lal Dupatta Malmal Ka",      duration: 421, url: "/audio/banger_30.mp3" },
  { id: "bg_31", title: "Kyo Kisi Ko",                          artist: "Udit Narayan",                      album: "Tere Naam",                  duration: 334, url: "/audio/banger_31.mp3" },
  { id: "bg_32", title: "Love Tujhe Love Main Karta",           artist: "Kumar Sanu, Alka Yagnik",           album: "Barsaat",                    duration: 346, url: "/audio/banger_32.mp3" },
  { id: "bg_33", title: "Main Duniya Bhula Doonga",             artist: "Anuradha Paudwal, Kumar Sanu",      album: "Aashiqui",                   duration: 316, url: "/audio/banger_33.mp3" },
  { id: "bg_34", title: "Maine Pyar Tumhi Se Kiya Hai",         artist: "Anuradha Paudwal, Kumar Sanu",      album: "Phool Aur Kaante",           duration: 422, url: "/audio/banger_34.mp3" },
  { id: "bg_35", title: "Mujhse Mohabbat Ka",                   artist: "Kumar Sanu, Alka Yagnik",           album: "Hum Hain Rahi Pyar Ke",      duration: 311, url: "/audio/banger_35.mp3" },
  { id: "bg_36", title: "Na Kajare Ki Dhar (Jhankar Beats)",    artist: "Pankaj Udhas, Sadhana Sargam",      album: "Mohra",                      duration: 322, url: "/audio/banger_36.mp3" },
  { id: "bg_37", title: "Nahin Yeh Ho Nahin Sakta",             artist: "Kumar Sanu, Sadhana Sargam",        album: "Barsaat",                    duration: 364, url: "/audio/banger_37.mp3" },
  { id: "bg_38", title: "Oye Raju",                             artist: "Anand Raj Anand",                   album: "Hadh Kar Di Aapne",          duration: 353, url: "/audio/banger_38.mp3" },
  { id: "bg_39", title: "Paas Woh Aane Lage",                   artist: "Kumar Sanu, Alka Yagnik",           album: "Main Khiladi Tu Anari",      duration: 372, url: "/audio/banger_39.mp3" },
  { id: "bg_40", title: "Pehli Pehli Baar Mohabbat Ki Hai",     artist: "Kumar Sanu, Alka Yagnik",           album: "Sirf Tum",                   duration: 458, url: "/audio/banger_40.mp3" },
  { id: "bg_41", title: "Premi Aashiq Aawara",                  artist: "Kumar Sanu",                        album: "Phool Aur Kaante",           duration: 296, url: "/audio/banger_41.mp3" },
  { id: "bg_42", title: "Raah Mein Unse Mulaqat",               artist: "Kumar Sanu, Alka Yagnik",           album: "Vijaypath",                  duration: 519, url: "/audio/banger_42.mp3" },
  { id: "bg_43", title: "Saaton Janam Main Tere",               artist: "Kumar Sanu, Alka Yagnik",           album: "Dilwale",                    duration: 339, url: "/audio/banger_43.mp3" },
  { id: "bg_44", title: "Sab Kuchh Bhula Diya",                 artist: "Sonu Nigam, Sapna Awasthi",         album: "Hum Tumhare Hain Sanam",     duration: 475, url: "/audio/banger_44.mp3" },
  { id: "bg_45", title: "Sanam Bewafa",                         artist: "Lata Mangeshkar",                   album: "Sanam Bewafa",               duration: 370, url: "/audio/banger_45.mp3" },
  { id: "bg_46", title: "Sochenge Tumhe Pyar",                  artist: "Kumar Sanu",                        album: "Deewana",                    duration: 362, url: "/audio/banger_46.mp3" },
  { id: "bg_47", title: "Tera Naam Liya",                       artist: "Manhar Udhas, Anuradha Paudwal",    album: "Ram Lakhan",                 duration: 356, url: "/audio/banger_47.mp3" },
  { id: "bg_48", title: "Tere Dar Par Sanam",                   artist: "Kumar Sanu",                        album: "Phir Teri Kahani Yaad Aayee", duration: 368, url: "/audio/banger_48.mp3" },
  { id: "bg_49", title: "Tere Dard Se Dil",                     artist: "Kumar Sanu",                        album: "Deewana",                    duration: 291, url: "/audio/banger_49.mp3" },
  { id: "bg_50", title: "Tere Dard Se Dil (Jhankar Beats)",     artist: "Kumar Sanu",                        album: "90s Bollywood Sad Songs",    duration: 281, url: "/audio/banger_50.mp3" },
  { id: "bg_51", title: "Teri Umeed Tera Intezar",              artist: "Kumar Sanu, Sadhana Sargam",        album: "Deewana",                    duration: 379, url: "/audio/banger_51.mp3" },
  { id: "bg_52", title: "Too Shayar Hai Main Teri Shayari",     artist: "Alka Yagnik",                       album: "Saajan",                     duration: 389, url: "/audio/banger_52.mp3" },
  { id: "bg_53", title: "Tu Meri Zindagi Hai",                  artist: "Anuradha Paudwal, Kumar Sanu",      album: "Aashiqui",                   duration: 283, url: "/audio/banger_53.mp3" },
  { id: "bg_54", title: "Tu Pyar Hai Kisi Aur Ka",              artist: "Anuradha Paudwal",                  album: "Aashiqui Hits",              duration: 405, url: "/audio/banger_54.mp3" },
  { id: "bg_55", title: "Tujhko Na Dekhun",                     artist: "Udit Narayan, Sunidhi Chauhan",     album: "Jaanwar",                    duration: 293, url: "/audio/banger_55.mp3" },
  { id: "bg_56", title: "Tum Dil Ki Dhadkan Mein",              artist: "Kumar Sanu",                        album: "Dhadkan",                    duration: 314, url: "/audio/banger_56.mp3" },
  { id: "bg_57", title: "Tum Se Achcha Kaun Hai",               artist: "Tauseef Akhtar",                    album: "Tum Se Achcha Kaun Hain",    duration: 304, url: "/audio/banger_57.mp3" },
  { id: "bg_58", title: "Tum To Thehre Pardesi",                artist: "Altaf Raja",                        album: "Tum To Thehre Pardesi",      duration: 874, url: "/audio/banger_58.mp3" },
  { id: "bg_59", title: "Tumhein Apna Banane Ki Kasam",         artist: "Kumar Sanu",                        album: "Sadak",                      duration: 339, url: "/audio/banger_59.mp3" },
  { id: "bg_60", title: "Tumsa Koi Pyaara",                     artist: "Kumar Sanu, Alka Yagnik",           album: "Khuddar",                    duration: 342, url: "/audio/banger_60.mp3" },
  { id: "bg_61", title: "Tumse Milna",                          artist: "Udit Narayan, Alka Yagnik",         album: "Tere Naam",                  duration: 279, url: "/audio/banger_61.mp3" },
  { id: "bg_62", title: "Tumse Milne Ko Dil",                   artist: "Alka Yagnik, Kumar Sanu",           album: "Phool Aur Kaante",           duration: 300, url: "/audio/banger_62.mp3" },
  { id: "bg_63", title: "Woh Meri Neend Mera Chain",            artist: "Sadhana Sargam",                    album: "Hum Hain Rahi Pyar Ke",      duration: 298, url: "/audio/banger_63.mp3" },
];

export const fmtTime = (s) => {
  if (!s || Number.isNaN(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};
