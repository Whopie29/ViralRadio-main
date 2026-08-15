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

export const PLAYLIST_CATEGORIES = [
  { id: "90s", label: "90s", fullName: "90s Bollywood Classics", subtitle: "Golden Era Cassettes & Melodies", count: 224 },
  { id: "nostalgic", label: "Nostalgic", fullName: "2000s Nostalgia", subtitle: "Unforgettable Childhood Tunes", count: 131 },
  { id: "rajasthani", label: "Rajasthani", fullName: "Rajasthani Folk & Heritage", subtitle: "Desert Winds & Authentic Folk Melodies", count: 21 },
  { id: "english", label: "English", fullName: "English Hits & Classics", subtitle: "Global Bangers & Roadtrip Anthems", count: 79 },
  { id: "hitlist", label: "Hitlist", fullName: "Top Hitlist", subtitle: "Chartbusters on the Highway", count: 0 },
  { id: "punjabi", label: "Punjabi", fullName: "Punjabi Bangers", subtitle: "High-energy Dhol & Highway Beats", count: 97 },
  { id: "haryanvi", label: "Haryanvi", fullName: "Haryanvi Hits", subtitle: "Desi Ragni & Bass Boosts", count: 64 },
  { id: "pahadi", label: "Pahadi", fullName: "Pahadi Safar", subtitle: "Mountain Melodies & Folk Acoustic", count: 26 },
];

export const TRACK_CATEGORIES = {
  "90s": [
    {
      "id": "90s_1",
      "title": "Aa Chal Ke Tujhe",
      "artist": "Kishore Kumar",
      "album": "Door Gagan Ki Chhaon Mein",
      "duration": 278,
      "url": "/audio/90s_001.mp3",
      "category": "90s"
    },
    {
      "id": "90s_2",
      "title": "Aage Bhi Jane Na Tu",
      "artist": "Asha Bhosle",
      "album": "Waqt",
      "duration": 448,
      "url": "/audio/90s_002.mp3",
      "category": "90s"
    },
    {
      "id": "90s_3",
      "title": "Aaiye Meharban",
      "artist": "Asha Bhosle",
      "album": "Howrah Bridge",
      "duration": 252,
      "url": "/audio/90s_003.mp3",
      "category": "90s"
    },
    {
      "id": "90s_4",
      "title": "Aaj Mausam Bada Beimaan Hai",
      "artist": "Mohammed Rafi, Laxmikant–Pyarelal",
      "album": "Loafer",
      "duration": 374,
      "url": "/audio/90s_004.mp3",
      "category": "90s"
    },
    {
      "id": "90s_5",
      "title": "Aaja Piya Tohe Pyar Doon",
      "artist": "Lata Mangeshkar",
      "album": "Masterworks Lata Mangeshkar",
      "duration": 251,
      "url": "/audio/90s_005.mp3",
      "category": "90s"
    },
    {
      "id": "90s_6",
      "title": "Aaja Sanam Madhur Chandni Men",
      "artist": "Lata Mangeshkar, Manna Dey",
      "album": "Chori Chori",
      "duration": 265,
      "url": "/audio/90s_006.mp3",
      "category": "90s"
    },
    {
      "id": "90s_7",
      "title": "Aankhen Bandh Karke",
      "artist": "Udit Narayan, Alka Yagnik, Himesh Reshammiya, Sameer Anjaan",
      "album": "Aitraaz",
      "duration": 341,
      "url": "/audio/90s_007.mp3",
      "category": "90s"
    },
    {
      "id": "90s_8",
      "title": "Aao Huzoor Tumko",
      "artist": "Asha Bhosle",
      "album": "Kismet",
      "duration": 352,
      "url": "/audio/90s_008.mp3",
      "category": "90s"
    },
    {
      "id": "90s_9",
      "title": "Aap Ki Ankhon Mein Kuch",
      "artist": "Kishore Kumar, Lata Mangeshkar, R. D. Burman",
      "album": "Ghar",
      "duration": 249,
      "url": "/audio/90s_009.mp3",
      "category": "90s"
    },
    {
      "id": "90s_10",
      "title": "Aap Ki Nazron Ne Samjha",
      "artist": "Lata Mangeshkar",
      "album": "Anpadh",
      "duration": 234,
      "url": "/audio/90s_010.mp3",
      "category": "90s"
    },
    {
      "id": "90s_11",
      "title": "Aawara Hawa Ka Jhonka Hoon",
      "artist": "Altaf Raja",
      "album": "Tum To Thehre Pardesi",
      "duration": 777,
      "url": "/audio/90s_011.mp3",
      "category": "90s"
    },
    {
      "id": "90s_12",
      "title": "Aaye Ho Meri Zindagi Mein (Male)",
      "artist": "Udit Narayan",
      "album": "Raja Hindustani",
      "duration": 362,
      "url": "/audio/90s_012.mp3",
      "category": "90s"
    },
    {
      "id": "90s_13",
      "title": "Ab Tere Bin",
      "artist": "Kumar Sanu",
      "album": "Aashiqui",
      "duration": 345,
      "url": "/audio/90s_013.mp3",
      "category": "90s"
    },
    {
      "id": "90s_14",
      "title": "Abhi Na Jao Chhod Kar",
      "artist": "Asha Bhosle, Mohammed Rafi",
      "album": "Hum Dono",
      "duration": 255,
      "url": "/audio/90s_014.mp3",
      "category": "90s"
    },
    {
      "id": "90s_15",
      "title": "Achchha Sila Diya Toone Mere Pyar Ka",
      "artist": "Sonu Nigam",
      "album": "Bewafa Sanam",
      "duration": 311,
      "url": "/audio/90s_015.mp3",
      "category": "90s"
    },
    {
      "id": "90s_16",
      "title": "Ae Ajnabi",
      "artist": "Udit Narayan, Mahalakshmi Iyer",
      "album": "Dil Se",
      "duration": 349,
      "url": "/audio/90s_016.mp3",
      "category": "90s"
    },
    {
      "id": "90s_17",
      "title": "Ae Mere Humsafar",
      "artist": "Alka Yagnik, Udit Narayan",
      "album": "Qayamat Se Qayamat Tak",
      "duration": 355,
      "url": "/audio/90s_017.mp3",
      "category": "90s"
    },
    {
      "id": "90s_18",
      "title": "Agar Main Kahoon",
      "artist": "Shankar-Ehsaan-Loy, Alka Yagnik, Udit Narayan",
      "album": "Lakshya",
      "duration": 292,
      "url": "/audio/90s_018.mp3",
      "category": "90s"
    },
    {
      "id": "90s_19",
      "title": "Agar Tum Mil Jao (Male)",
      "artist": "Roop Kumar Rathod, Anu Malik, Udit Narayan",
      "album": "Zeher",
      "duration": 361,
      "url": "/audio/90s_019.mp3",
      "category": "90s"
    },
    {
      "id": "90s_20",
      "title": "Aitbaar Nahi Karna",
      "artist": "Abhijeet, Sadhana Sargam",
      "album": "Qayamat",
      "duration": 277,
      "url": "/audio/90s_020.mp3",
      "category": "90s"
    },
    {
      "id": "90s_21",
      "title": "Ajib Dastan Hai Yeh",
      "artist": "Lata Mangeshkar",
      "album": "Dil Apna Aur Preet Parai",
      "duration": 315,
      "url": "/audio/90s_021.mp3",
      "category": "90s"
    },
    {
      "id": "90s_22",
      "title": "Akele Hum Akele Tum",
      "artist": "Udit Narayan, Aditya Narayan",
      "album": "Akele Hum Akele Tum",
      "duration": 288,
      "url": "/audio/90s_022.mp3",
      "category": "90s"
    },
    {
      "id": "90s_23",
      "title": "Akeli Na Bazar Jaya Karo",
      "artist": "Udit Narayan",
      "album": "Major Saab",
      "duration": 347,
      "url": "/audio/90s_023.mp3",
      "category": "90s"
    },
    {
      "id": "90s_24",
      "title": "Ankh Hai Bhari Bhari (Male Version)",
      "artist": "Kumar Sanu",
      "album": "Bollywood Best Trio - Kumar Sanu, Nadeem - Shravan",
      "duration": 437,
      "url": "/audio/90s_024.mp3",
      "category": "90s"
    },
    {
      "id": "90s_25",
      "title": "Aye Meri Zindagi",
      "artist": "Udit Narayan",
      "album": "Saaya",
      "duration": 388,
      "url": "/audio/90s_025.mp3",
      "category": "90s"
    },
    {
      "id": "90s_26",
      "title": "Aye-Dil-E-Nadan, Pt. 1",
      "artist": "Lata Mangeshkar",
      "album": "Razia Sultan",
      "duration": 339,
      "url": "/audio/90s_026.mp3",
      "category": "90s"
    },
    {
      "id": "90s_27",
      "title": "Bade Achhe Lagte Hain",
      "artist": "Amit Kumar, R. D. Burman",
      "album": "Balika Badhu",
      "duration": 312,
      "url": "/audio/90s_027.mp3",
      "category": "90s"
    },
    {
      "id": "90s_28",
      "title": "Bahon Mein Chale Aao",
      "artist": "Lata Mangeshkar, R. D. Burman",
      "album": "Anamika",
      "duration": 241,
      "url": "/audio/90s_028.mp3",
      "category": "90s"
    },
    {
      "id": "90s_29",
      "title": "Bahut Pyar Karte Hai (Male)",
      "artist": "S. P. Balasubrahmanyam",
      "album": "Saajan",
      "duration": 185,
      "url": "/audio/90s_029.mp3",
      "category": "90s"
    },
    {
      "id": "90s_30",
      "title": "Bekhudi Mein Sanam",
      "artist": "Mohammed Rafi, Lata Mangeshkar",
      "album": "Darmiyaan: Mohd. Rafi and Lata Mangeshkar",
      "duration": 260,
      "url": "/audio/90s_030.mp3",
      "category": "90s"
    },
    {
      "id": "90s_31",
      "title": "Beqarar Karke Hamen Yun Na Jaiye",
      "artist": "Hemant Kumar",
      "album": "Baarishein, Chai Aur Hemant Kumar",
      "duration": 189,
      "url": "/audio/90s_031.mp3",
      "category": "90s"
    },
    {
      "id": "90s_32",
      "title": "Bholi Si Surat",
      "artist": "Uttam Singh, Lata Mangeshkar, Udit Narayan, Anand Bakshi",
      "album": "Dil To Pagal Hai",
      "duration": 254,
      "url": "/audio/90s_032.mp3",
      "category": "90s"
    },
    {
      "id": "90s_33",
      "title": "Bin Tere Sanam",
      "artist": "Udit Narayan, Kavita Krishnamurthy",
      "album": "Yaara Dildara (Original Mostion Picture Soundtrack)",
      "duration": 390,
      "url": "/audio/90s_033.mp3",
      "category": "90s"
    },
    {
      "id": "90s_34",
      "title": "Chahoonga Main Tujhe",
      "artist": "Mohammed Rafi",
      "album": "Dosti",
      "duration": 294,
      "url": "/audio/90s_034.mp3",
      "category": "90s"
    },
    {
      "id": "90s_35",
      "title": "Chalo Chale Mitwa",
      "artist": "Udit Narayan, Kavita Krishnamurthy",
      "album": "Nayak",
      "duration": 398,
      "url": "/audio/90s_035.mp3",
      "category": "90s"
    },
    {
      "id": "90s_36",
      "title": "Chalte Chalte - Part 1 / From \"Chalte Chalte\"",
      "artist": "Kishore Kumar",
      "album": "Romantic Hits by Kishore Kumar",
      "duration": 317,
      "url": "/audio/90s_036.mp3",
      "category": "90s"
    },
    {
      "id": "90s_37",
      "title": "Chand Chhupa Badal Mein",
      "artist": "Udit Narayan, Alka Yagnik",
      "album": "Hum Dil De Chuke Sanam",
      "duration": 344,
      "url": "/audio/90s_037.mp3",
      "category": "90s"
    },
    {
      "id": "90s_38",
      "title": "Chaudhvin Ka Chand Ho",
      "artist": "Mohammed Rafi",
      "album": "Chaudhvin Ka Chand",
      "duration": 223,
      "url": "/audio/90s_038.mp3",
      "category": "90s"
    },
    {
      "id": "90s_39",
      "title": "Chehra Kya Dekhte Ho",
      "artist": "Asha Bhosle, Kumar Sanu",
      "album": "Suron Ki Mallika - Asha Bhosle",
      "duration": 358,
      "url": "/audio/90s_039.mp3",
      "category": "90s"
    },
    {
      "id": "90s_40",
      "title": "Chhu Kar Mere Manko",
      "artist": "Kishore Kumar",
      "album": "Kishore Kumar Songs",
      "duration": 252,
      "url": "/audio/90s_040.mp3",
      "category": "90s"
    },
    {
      "id": "90s_41",
      "title": "Chhup Gaya",
      "artist": "Udit Narayan, Alka Yagnik",
      "album": "Hum Aapke Dil Mein Rahte Hain",
      "duration": 399,
      "url": "/audio/90s_041.mp3",
      "category": "90s"
    },
    {
      "id": "90s_42",
      "title": "Chhupana Bhi Nahin Aata",
      "artist": "Vinod Rathod",
      "album": "Baazigar",
      "duration": 419,
      "url": "/audio/90s_042.mp3",
      "category": "90s"
    },
    {
      "id": "90s_43",
      "title": "Chori Chori Dil Tera",
      "artist": "Kumar Sanu, Sujata Goswamy",
      "album": "Phool Aur Angaar",
      "duration": 279,
      "url": "/audio/90s_043.mp3",
      "category": "90s"
    },
    {
      "id": "90s_44",
      "title": "Chupke Se Sun",
      "artist": "Udit Narayan, Alka Yagnik",
      "album": "Mission Kashmir",
      "duration": 296,
      "url": "/audio/90s_044.mp3",
      "category": "90s"
    },
    {
      "id": "90s_45",
      "title": "Chura Ke Dil Mera",
      "artist": "Kumar Sanu, Alka Yagnik",
      "album": "Main Khiladi Tu Anari",
      "duration": 468,
      "url": "/audio/90s_045.mp3",
      "category": "90s"
    },
    {
      "id": "90s_46",
      "title": "Chura Liya Hai Tumne Jo Dil Ko",
      "artist": "Asha Bhosle, Mohammed Rafi",
      "album": "Yaadon Ki Baaraat",
      "duration": 287,
      "url": "/audio/90s_046.mp3",
      "category": "90s"
    },
    {
      "id": "90s_47",
      "title": "Dekha Hai Pehli Baar",
      "artist": "Alka Yagnik, S. P. Balasubrahmanyam",
      "album": "My Best Collection - Alka Yagnik",
      "duration": 529,
      "url": "/audio/90s_047.mp3",
      "category": "90s"
    },
    {
      "id": "90s_48",
      "title": "Dekhne Walon Ne",
      "artist": "Udit Narayan, Alka Yagnik",
      "album": "Chori Chori Chupke Chupke",
      "duration": 373,
      "url": "/audio/90s_048.mp3",
      "category": "90s"
    },
    {
      "id": "90s_49",
      "title": "Dheere Dheere Pyar Ko",
      "artist": "Alka Yagnik, Kumar Sanu",
      "album": "Phool Aur Kaante",
      "duration": 328,
      "url": "/audio/90s_049.mp3",
      "category": "90s"
    },
    {
      "id": "90s_50",
      "title": "Dil Cheer Ke Dekh",
      "artist": "Kumar Sanu",
      "album": "Rang",
      "duration": 313,
      "url": "/audio/90s_050.mp3",
      "category": "90s"
    },
    {
      "id": "90s_51",
      "title": "Dil Cheez Kya Hai",
      "artist": "Asha Bhosle",
      "album": "Umrao Jaan",
      "duration": 370,
      "url": "/audio/90s_051.mp3",
      "category": "90s"
    },
    {
      "id": "90s_52",
      "title": "Dil Diwana",
      "artist": "Anuradha Paudwal, Kumar Sanu",
      "album": "Daag The Fire",
      "duration": 376,
      "url": "/audio/90s_052.mp3",
      "category": "90s"
    },
    {
      "id": "90s_53",
      "title": "Dil Ka Aalam",
      "artist": "Kumar Sanu",
      "album": "Aashiqui",
      "duration": 298,
      "url": "/audio/90s_053.mp3",
      "category": "90s"
    },
    {
      "id": "90s_54",
      "title": "Dil Ka Bhanwar Kare Pukar",
      "artist": "Mohammed Rafi, S. D. Burman",
      "album": "Tere Ghar Ke Samne",
      "duration": 199,
      "url": "/audio/90s_054.mp3",
      "category": "90s"
    },
    {
      "id": "90s_55",
      "title": "Dil Kya Kare",
      "artist": "Jatin-Lalit, Udit Narayan, Alka Yagnik",
      "album": "Dil Kya Kare",
      "duration": 267,
      "url": "/audio/90s_055.mp3",
      "category": "90s"
    },
    {
      "id": "90s_56",
      "title": "Dil Ne Yeh Kaha Hain Dil Se",
      "artist": "Udit Narayan, Alka Yagnik",
      "album": "Dhadkan",
      "duration": 426,
      "url": "/audio/90s_056.mp3",
      "category": "90s"
    },
    {
      "id": "90s_57",
      "title": "Dil Tadap Tadap Ke Kah Raha",
      "artist": "Mukesh, Lata Mangeshkar",
      "album": "Madhumati",
      "duration": 207,
      "url": "/audio/90s_057.mp3",
      "category": "90s"
    },
    {
      "id": "90s_58",
      "title": "Dil To Pagal Hai",
      "artist": "Uttam Singh, Lata Mangeshkar, Udit Narayan, Anand Bakshi",
      "album": "Dil To Pagal Hai",
      "duration": 335,
      "url": "/audio/90s_058.mp3",
      "category": "90s"
    },
    {
      "id": "90s_59",
      "title": "Dilbar Mere",
      "artist": "Kishore Kumar, Anette, R. D. Burman",
      "album": "Romantic Hits by Kishore Kumar",
      "duration": 287,
      "url": "/audio/90s_059.mp3",
      "category": "90s"
    },
    {
      "id": "90s_60",
      "title": "Do Ghadi Baitho - Geet",
      "artist": "Mohammed Rafi",
      "album": "Mohd Rafi Ghazals And Geet",
      "duration": 210,
      "url": "/audio/90s_060.mp3",
      "category": "90s"
    },
    {
      "id": "90s_61",
      "title": "Do Lafzon Ki Hai Dil Ki Kahani - Asha Bhosle",
      "artist": "Asha Bhosle, R. D. Burman",
      "album": "The Great Gambler",
      "duration": 279,
      "url": "/audio/90s_061.mp3",
      "category": "90s"
    },
    {
      "id": "90s_62",
      "title": "Duniya Haseenon Ka Mela",
      "artist": "Udit Narayan, Sunita Rao",
      "album": "Gupt",
      "duration": 393,
      "url": "/audio/90s_062.mp3",
      "category": "90s"
    },
    {
      "id": "90s_63",
      "title": "Ehsan Tera Hoga Mujh Par",
      "artist": "Mohammed Rafi",
      "album": "Junglee",
      "duration": 206,
      "url": "/audio/90s_063.mp3",
      "category": "90s"
    },
    {
      "id": "90s_64",
      "title": "Ek Aisi Ladki",
      "artist": "Kumar Sanu",
      "album": "Dilwale",
      "duration": 266,
      "url": "/audio/90s_064.mp3",
      "category": "90s"
    },
    {
      "id": "90s_65",
      "title": "Ek Ajnabee Haseena Se",
      "artist": "Kishore Kumar",
      "album": "Double Dose - Kishore Kumar and Rajesh Khanna",
      "duration": 266,
      "url": "/audio/90s_065.mp3",
      "category": "90s"
    },
    {
      "id": "90s_66",
      "title": "Ek Ladki Bheegi Bhagi Si",
      "artist": "Kishore Kumar",
      "album": "Chalti Ka Naam Gaadi",
      "duration": 236,
      "url": "/audio/90s_066.mp3",
      "category": "90s"
    },
    {
      "id": "90s_67",
      "title": "Ek Ladki Ko Dekha",
      "artist": "Kumar Sanu, R. D. Burman",
      "album": "1942 A Love Story",
      "duration": 275,
      "url": "/audio/90s_067.mp3",
      "category": "90s"
    },
    {
      "id": "90s_68",
      "title": "Ek Sanam Chahiye Aashiqui Ke Liye",
      "artist": "Kumar Sanu",
      "album": "Dheere Dheere Se - The Era Of Kumar Sanu",
      "duration": 372,
      "url": "/audio/90s_068.mp3",
      "category": "90s"
    },
    {
      "id": "90s_69",
      "title": "Ghar Se Nikalte",
      "artist": "Udit Narayan",
      "album": "Papa Kehte Hain",
      "duration": 442,
      "url": "/audio/90s_069.mp3",
      "category": "90s"
    },
    {
      "id": "90s_70",
      "title": "Ghoongte Mein Chanda",
      "artist": "Udit Narayan",
      "album": "Koyla",
      "duration": 372,
      "url": "/audio/90s_070.mp3",
      "category": "90s"
    },
    {
      "id": "90s_71",
      "title": "Gulabi Ankhen",
      "artist": "Mohammed Rafi, R. D. Burman",
      "album": "The Train",
      "duration": 198,
      "url": "/audio/90s_071.mp3",
      "category": "90s"
    },
    {
      "id": "90s_72",
      "title": "Hai Apna Dil To Aawara (Happy)",
      "artist": "Hemant Kumar",
      "album": "Baarishein, Chai Aur Hemant Kumar",
      "duration": 261,
      "url": "/audio/90s_072.mp3",
      "category": "90s"
    },
    {
      "id": "90s_73",
      "title": "Ham Hain Rahi Pyar Ke",
      "artist": "Kishore Kumar, S. D. Burman",
      "album": "Nau Do Gyarah",
      "duration": 291,
      "url": "/audio/90s_073.mp3",
      "category": "90s"
    },
    {
      "id": "90s_74",
      "title": "Ham Tere Pyar Mein",
      "artist": "Lata Mangeshkar",
      "album": "Dil Ek Mandir",
      "duration": 286,
      "url": "/audio/90s_074.mp3",
      "category": "90s"
    },
    {
      "id": "90s_75",
      "title": "Hothon Se Chhu Lo Tum",
      "artist": "Jagjit Singh",
      "album": "Prem Geet",
      "duration": 294,
      "url": "/audio/90s_075.mp3",
      "category": "90s"
    },
    {
      "id": "90s_76",
      "title": "Hum Laakh Chupaye",
      "artist": "Asha Bhosle, Kumar Sanu, Nadeem Shravan, Syed Rahi",
      "album": "Jaan Tere Naam",
      "duration": 415,
      "url": "/audio/90s_076.mp3",
      "category": "90s"
    },
    {
      "id": "90s_77",
      "title": "Hum Pyaar Hai Tumhare",
      "artist": "Kumar Sanu, Alka Yagnik",
      "album": "Haan Maine Bhi Pyaar Kiya",
      "duration": 426,
      "url": "/audio/90s_077.mp3",
      "category": "90s"
    },
    {
      "id": "90s_78",
      "title": "Hum Pyar Karne Wale",
      "artist": "Anuradha Paudwal, Udit Narayan",
      "album": "Dil",
      "duration": 414,
      "url": "/audio/90s_078.mp3",
      "category": "90s"
    },
    {
      "id": "90s_79",
      "title": "Hum Yaar Hai Tumhare",
      "artist": "Udit Narayan, Alka Yagnik",
      "album": "Haan Maine Bhi Pyaar Kiya",
      "duration": 434,
      "url": "/audio/90s_079.mp3",
      "category": "90s"
    },
    {
      "id": "90s_80",
      "title": "Humne Ghar Chhoda Hai",
      "artist": "Udit Narayan, Sadhana Sargam",
      "album": "Dil",
      "duration": 373,
      "url": "/audio/90s_080.mp3",
      "category": "90s"
    },
    {
      "id": "90s_81",
      "title": "Intaha Ho Gai Intezar Ki",
      "artist": "Kishore Kumar, Asha Bhosle",
      "album": "Sharaabi",
      "duration": 529,
      "url": "/audio/90s_081.mp3",
      "category": "90s"
    },
    {
      "id": "90s_82",
      "title": "Is Dil Mein Kya Hai",
      "artist": "Lata Mangeshkar, Udit Narayan",
      "album": "Jab Pyaar Kisise Hota Hai",
      "duration": 289,
      "url": "/audio/90s_082.mp3",
      "category": "90s"
    },
    {
      "id": "90s_83",
      "title": "Is Tarah Aashiqui Ka - Kumar Sanu Version",
      "artist": "Kumar Sanu",
      "album": "Imtihan",
      "duration": 443,
      "url": "/audio/90s_083.mp3",
      "category": "90s"
    },
    {
      "id": "90s_84",
      "title": "Isharon Isharon Men Dil Lenewale",
      "artist": "Asha Bhosle, Mohammed Rafi",
      "album": "Kashmir Ki Kali",
      "duration": 290,
      "url": "/audio/90s_084.mp3",
      "category": "90s"
    },
    {
      "id": "90s_85",
      "title": "Ishq Hua Kaise Hua",
      "artist": "Udit Narayan, Vibha Sharma",
      "album": "Ishq",
      "duration": 454,
      "url": "/audio/90s_085.mp3",
      "category": "90s"
    },
    {
      "id": "90s_86",
      "title": "Itna Na Mujhse Tu Pyar Badha",
      "artist": "Talat Mahmood, Lata Mangeshkar, Salil Chowdhury",
      "album": "Chhaya",
      "duration": 235,
      "url": "/audio/90s_086.mp3",
      "category": "90s"
    },
    {
      "id": "90s_87",
      "title": "Jaadu Teri Nazar",
      "artist": "Udit Narayan",
      "album": "Darr",
      "duration": 279,
      "url": "/audio/90s_087.mp3",
      "category": "90s"
    },
    {
      "id": "90s_88",
      "title": "Jaane Ja Jane Ja",
      "artist": "Udit Narayan, Shreya Ghoshal",
      "album": "Zeher",
      "duration": 396,
      "url": "/audio/90s_088.mp3",
      "category": "90s"
    },
    {
      "id": "90s_89",
      "title": "Jaane Kyon Log Pyar",
      "artist": "Udit Narayan, Alka Yagnik",
      "album": "Dil Chahta Hai",
      "duration": 289,
      "url": "/audio/90s_089.mp3",
      "category": "90s"
    },
    {
      "id": "90s_90",
      "title": "Janam Janam Ka Saath Hai",
      "artist": "Mohammed Rafi, Lata Mangeshkar",
      "album": "Bheegi Palken",
      "duration": 242,
      "url": "/audio/90s_090.mp3",
      "category": "90s"
    },
    {
      "id": "90s_91",
      "title": "Je Hum Tum Chori Se",
      "artist": "Lata Mangeshkar, Mukesh, Laxmikant–Pyarelal",
      "album": "Dharti Kahe Pukar Ke",
      "duration": 326,
      "url": "/audio/90s_091.mp3",
      "category": "90s"
    },
    {
      "id": "90s_92",
      "title": "Jeeta Tha Jiske Liye",
      "artist": "Kumar Sanu, Alka Yagnik, Ajay Devgan",
      "album": "Bollywood Music - Kumar Sanu At His Best, Vol. 2",
      "duration": 458,
      "url": "/audio/90s_092.mp3",
      "category": "90s"
    },
    {
      "id": "90s_93",
      "title": "Jeeye to Jeeye Kaise",
      "artist": "Pankaj Udhas",
      "album": "Saajan",
      "duration": 209,
      "url": "/audio/90s_093.mp3",
      "category": "90s"
    },
    {
      "id": "90s_94",
      "title": "Jhuki Jhuki Si Nazar - Jagjit",
      "artist": "Jagjit Singh",
      "album": "Arth",
      "duration": 302,
      "url": "/audio/90s_094.mp3",
      "category": "90s"
    },
    {
      "id": "90s_95",
      "title": "Jo Bhi Kasmein",
      "artist": "Nadeem Shravan, Alka Yagnik, Udit Narayan, Sameer Anjaan",
      "album": "Raaz",
      "duration": 339,
      "url": "/audio/90s_095.mp3",
      "category": "90s"
    },
    {
      "id": "90s_96",
      "title": "Jo Wada Kiya Woh Nibhana Padega - Happy",
      "artist": "Mohammed Rafi, Lata Mangeshkar",
      "album": "Taj Mahal",
      "duration": 195,
      "url": "/audio/90s_096.mp3",
      "category": "90s"
    },
    {
      "id": "90s_97",
      "title": "Kaash Kahin Aisa Hota",
      "artist": "Kumar Sanu",
      "album": "Mohra",
      "duration": 305,
      "url": "/audio/90s_097.mp3",
      "category": "90s"
    },
    {
      "id": "90s_98",
      "title": "Kabhi Kabhi Mere Dil Mein (Duet)",
      "artist": "Mukesh, Lata Mangeshkar",
      "album": "#HumForLataDidi",
      "duration": 298,
      "url": "/audio/90s_098.mp3",
      "category": "90s"
    },
    {
      "id": "90s_99",
      "title": "Kahin Door Jab Din Dhal Jaye",
      "artist": "Mukesh, Salil Chowdhury",
      "album": "Anand",
      "duration": 337,
      "url": "/audio/90s_099.mp3",
      "category": "90s"
    },
    {
      "id": "90s_100",
      "title": "Kahin Mujhe Pyar Hua Toh Nahin",
      "artist": "Alka Yagnik, Kumar Sanu",
      "album": "Rang",
      "duration": 424,
      "url": "/audio/90s_100.mp3",
      "category": "90s"
    },
    {
      "id": "90s_101",
      "title": "Kaho Naa Pyar Hai, Pt. 2",
      "artist": "Udit Narayan",
      "album": "Kaho Naa Pyaar Hai",
      "duration": 67,
      "url": "/audio/90s_101.mp3",
      "category": "90s"
    },
    {
      "id": "90s_102",
      "title": "Kasme Vaade Nibhayenge Hum - Part I - Kasme Vaade / Soundtrack Version",
      "artist": "Lata Mangeshkar",
      "album": "Kasme Vaade",
      "duration": 285,
      "url": "/audio/90s_102.mp3",
      "category": "90s"
    },
    {
      "id": "90s_103",
      "title": "Kehna Hai Kehna Hai",
      "artist": "Kishore Kumar, R. D. Burman",
      "album": "Padosan",
      "duration": 221,
      "url": "/audio/90s_103.mp3",
      "category": "90s"
    },
    {
      "id": "90s_104",
      "title": "Kehna Hai Tumse",
      "artist": "Udit Narayan, Hema Sardesai",
      "album": "Mann",
      "duration": 282,
      "url": "/audio/90s_104.mp3",
      "category": "90s"
    },
    {
      "id": "90s_105",
      "title": "Khilte Hain Gul Yahan",
      "artist": "Kishore Kumar",
      "album": "Sharmilee",
      "duration": 242,
      "url": "/audio/90s_105.mp3",
      "category": "90s"
    },
    {
      "id": "90s_106",
      "title": "Khoya Khoya Chand Khula Aasman",
      "artist": "Mohammed Rafi",
      "album": "Kala Bazar",
      "duration": 280,
      "url": "/audio/90s_106.mp3",
      "category": "90s"
    },
    {
      "id": "90s_107",
      "title": "Khud KO Kya Samajhti Hai",
      "artist": "Abhijeet, Udit Narayan, Kavita Krishnamurthy",
      "album": "Khiladi",
      "duration": 393,
      "url": "/audio/90s_107.mp3",
      "category": "90s"
    },
    {
      "id": "90s_108",
      "title": "Khwab Ho Tum Ya Koi Haqeeqat",
      "artist": "Kishore Kumar, S. D. Burman",
      "album": "Teen Devian",
      "duration": 333,
      "url": "/audio/90s_108.mp3",
      "category": "90s"
    },
    {
      "id": "90s_109",
      "title": "Kisi Ki Muskurahaton Se",
      "artist": "Mukesh",
      "album": "Anari",
      "duration": 267,
      "url": "/audio/90s_109.mp3",
      "category": "90s"
    },
    {
      "id": "90s_110",
      "title": "Kisi Raah Men Kisi Mod Par",
      "artist": "Lata Mangeshkar, Mukesh, Kalyanji-Anandji",
      "album": "Mere Humsafar",
      "duration": 344,
      "url": "/audio/90s_110.mp3",
      "category": "90s"
    },
    {
      "id": "90s_111",
      "title": "Kitna Haseen Chehra",
      "artist": "Kumar Sanu",
      "album": "Bollywood Best Trio - Kumar Sanu, Nadeem - Shravan",
      "duration": 354,
      "url": "/audio/90s_111.mp3",
      "category": "90s"
    },
    {
      "id": "90s_112",
      "title": "Kitna Pyaara Tujhe Rabne Banaya",
      "artist": "Alka Yagnik, Udit Narayan",
      "album": "Raja Hindustani",
      "duration": 382,
      "url": "/audio/90s_112.mp3",
      "category": "90s"
    },
    {
      "id": "90s_113",
      "title": "Koyal Si Teri Boli",
      "artist": "Anuradha Paudwal, Udit Narayan",
      "album": "Beta",
      "duration": 336,
      "url": "/audio/90s_113.mp3",
      "category": "90s"
    },
    {
      "id": "90s_114",
      "title": "Kuch Kuch Hota Hai",
      "artist": "Jatin-Lalit, Udit Narayan, Alka Yagnik",
      "album": "Kuch Kuch Hota Hai",
      "duration": 297,
      "url": "/audio/90s_114.mp3",
      "category": "90s"
    },
    {
      "id": "90s_115",
      "title": "Kya Hua Tera Vada [1977]",
      "artist": "Mohammed Rafi, Sushma Shrestha",
      "album": "Bollywood Songs: From 28 Movies (1963-1978), Vol. 2",
      "duration": 265,
      "url": "/audio/90s_115.mp3",
      "category": "90s"
    },
    {
      "id": "90s_116",
      "title": "Kya Kare Kya Na Kare",
      "artist": "A.R. Rahman, Udit Narayan, Mehboob",
      "album": "Rangeela",
      "duration": 343,
      "url": "/audio/90s_116.mp3",
      "category": "90s"
    },
    {
      "id": "90s_117",
      "title": "Kya Karte They Sajna",
      "artist": "Udit Narayan, Anuradha Paudwal",
      "album": "Lal Dupatta Malmal Ka",
      "duration": 421,
      "url": "/audio/90s_117.mp3",
      "category": "90s"
    },
    {
      "id": "90s_118",
      "title": "Kyo Kisi Ko",
      "artist": "Udit Narayan",
      "album": "Tere Naam",
      "duration": 334,
      "url": "/audio/90s_118.mp3",
      "category": "90s"
    },
    {
      "id": "90s_119",
      "title": "Lag Ja Gale Se Phir",
      "artist": "Lata Mangeshkar",
      "album": "Lata Surili Phuljhadi",
      "duration": 257,
      "url": "/audio/90s_119.mp3",
      "category": "90s"
    },
    {
      "id": "90s_120",
      "title": "Likhe Jo Khat Tujhe",
      "artist": "Mohammed Rafi",
      "album": "Kanyadaan",
      "duration": 273,
      "url": "/audio/90s_120.mp3",
      "category": "90s"
    },
    {
      "id": "90s_121",
      "title": "Love Tujhe Love Main Karta",
      "artist": "Kumar Sanu, Alka Yagnik",
      "album": "Barsaat",
      "duration": 346,
      "url": "/audio/90s_121.mp3",
      "category": "90s"
    },
    {
      "id": "90s_122",
      "title": "Main Duniya Bhula Doonga",
      "artist": "Anuradha Paudwal, Kumar Sanu",
      "album": "Aashiqui",
      "duration": 316,
      "url": "/audio/90s_122.mp3",
      "category": "90s"
    },
    {
      "id": "90s_123",
      "title": "Main Pal Do Pal Ka Shair Hoon",
      "artist": "Mukesh",
      "album": "Bachchan Wala Love",
      "duration": 204,
      "url": "/audio/90s_123.mp3",
      "category": "90s"
    },
    {
      "id": "90s_124",
      "title": "Main Tere Ishq Mein",
      "artist": "Lata Mangeshkar, Laxmikant–Pyarelal",
      "album": "Loafer",
      "duration": 286,
      "url": "/audio/90s_124.mp3",
      "category": "90s"
    },
    {
      "id": "90s_125",
      "title": "Main Yahaan Hoon",
      "artist": "Madan Mohan, Udit Narayan, Javed Akhtar",
      "album": "Veer - Zaara",
      "duration": 294,
      "url": "/audio/90s_125.mp3",
      "category": "90s"
    },
    {
      "id": "90s_126",
      "title": "Main Zindagi Ka Saath Nibhata Chala Gaya",
      "artist": "Mohammed Rafi",
      "album": "Hum Dono",
      "duration": 230,
      "url": "/audio/90s_126.mp3",
      "category": "90s"
    },
    {
      "id": "90s_127",
      "title": "Maine Pyar Tumhi Se Kiya Hai",
      "artist": "Anuradha Paudwal, Kumar Sanu",
      "album": "Phool Aur Kaante",
      "duration": 422,
      "url": "/audio/90s_127.mp3",
      "category": "90s"
    },
    {
      "id": "90s_128",
      "title": "Maine Tere Liye",
      "artist": "Mukesh",
      "album": "Mukesh Ki Barfi",
      "duration": 186,
      "url": "/audio/90s_128.mp3",
      "category": "90s"
    },
    {
      "id": "90s_129",
      "title": "Mehlon Ka Raja Mila",
      "artist": "Lata Mangeshkar",
      "album": "Anokhi Raat",
      "duration": 195,
      "url": "/audio/90s_129.mp3",
      "category": "90s"
    },
    {
      "id": "90s_130",
      "title": "Mehndi Laga Ke Rakhna",
      "artist": "Lata Mangeshkar, Udit Narayan",
      "album": "Dilwale Dulhania Le Jayenge",
      "duration": 286,
      "url": "/audio/90s_130.mp3",
      "category": "90s"
    },
    {
      "id": "90s_131",
      "title": "Mera Mann",
      "artist": "Udit Narayan, Alka Yagnik",
      "album": "Mann",
      "duration": 275,
      "url": "/audio/90s_131.mp3",
      "category": "90s"
    },
    {
      "id": "90s_132",
      "title": "Mera Saaya Saath Hoga",
      "artist": "Lata Mangeshkar",
      "album": "Lag Ja Gale - Best of Lata Mangeshkar and Madan Mohan",
      "duration": 363,
      "url": "/audio/90s_132.mp3",
      "category": "90s"
    },
    {
      "id": "90s_133",
      "title": "Mere Khwabon Ka",
      "artist": "Udit Narayan, Sayeed Quadri",
      "album": "Jism",
      "duration": 277,
      "url": "/audio/90s_133.mp3",
      "category": "90s"
    },
    {
      "id": "90s_134",
      "title": "Mere Mehboob Mere Sanam",
      "artist": "Udit Narayan, Alka Yagnik",
      "album": "Duplicate",
      "duration": 419,
      "url": "/audio/90s_134.mp3",
      "category": "90s"
    },
    {
      "id": "90s_135",
      "title": "Mere Mehboob Qayamat Hogi, Pt. 1",
      "artist": "Kishore Kumar",
      "album": "Krazy Kishore",
      "duration": 228,
      "url": "/audio/90s_135.mp3",
      "category": "90s"
    },
    {
      "id": "90s_136",
      "title": "Mere Sanam",
      "artist": "Sadhana Sargam, Udit Narayan",
      "album": "Gupt",
      "duration": 350,
      "url": "/audio/90s_136.mp3",
      "category": "90s"
    },
    {
      "id": "90s_137",
      "title": "Meri Bheegi Bheegi Si",
      "artist": "Kishore Kumar, R. D. Burman",
      "album": "Anamika",
      "duration": 246,
      "url": "/audio/90s_137.mp3",
      "category": "90s"
    },
    {
      "id": "90s_138",
      "title": "Meri Sanson Mein",
      "artist": "Udit Narayan",
      "album": "Aur Pyar Ho Gaya",
      "duration": 459,
      "url": "/audio/90s_138.mp3",
      "category": "90s"
    },
    {
      "id": "90s_139",
      "title": "Mitwa",
      "artist": "A.R. Rahman, Alka Yagnik, Udit Narayan, Sukhwinder Singh, Srinivas",
      "album": "Lagaan",
      "duration": 407,
      "url": "/audio/90s_139.mp3",
      "category": "90s"
    },
    {
      "id": "90s_140",
      "title": "Mujhe Chu Rahi Hain Teri Garam Sansen",
      "artist": "Mohammed Rafi, Lata Mangeshkar",
      "album": "Swayamvar",
      "duration": 256,
      "url": "/audio/90s_140.mp3",
      "category": "90s"
    },
    {
      "id": "90s_141",
      "title": "Mujhse Mohabbat Ka",
      "artist": "Kumar Sanu, Alka Yagnik",
      "album": "Hum Hain Rahi Pyar Ke",
      "duration": 311,
      "url": "/audio/90s_141.mp3",
      "category": "90s"
    },
    {
      "id": "90s_142",
      "title": "Na Kajare Ki Dhar (Jhankar)",
      "artist": "Pankaj Udhas, Sadhana Sargam",
      "album": "Mohra (With Jhankar Beats)",
      "duration": 322,
      "url": "/audio/90s_142.mp3",
      "category": "90s"
    },
    {
      "id": "90s_143",
      "title": "Na Tum Hamen Jano - Male Vocals",
      "artist": "Hemant Kumar",
      "album": "Baat Ek Raat Ki",
      "duration": 201,
      "url": "/audio/90s_143.mp3",
      "category": "90s"
    },
    {
      "id": "90s_144",
      "title": "Nahin Yeh Ho Nahin Sakta",
      "artist": "Kumar Sanu, Sadhana Sargam",
      "album": "Barsaat",
      "duration": 364,
      "url": "/audio/90s_144.mp3",
      "category": "90s"
    },
    {
      "id": "90s_145",
      "title": "Nainon Mein Badra Chhaye",
      "artist": "Lata Mangeshkar",
      "album": "Mera Saaya",
      "duration": 213,
      "url": "/audio/90s_145.mp3",
      "category": "90s"
    },
    {
      "id": "90s_146",
      "title": "Nasha Yeh Pyar Ka",
      "artist": "Udit Narayan",
      "album": "Mann",
      "duration": 316,
      "url": "/audio/90s_146.mp3",
      "category": "90s"
    },
    {
      "id": "90s_147",
      "title": "Nindiya Se Jagi Bahar",
      "artist": "Lata Mangeshkar, Laxmikant–Pyarelal",
      "album": "Hero",
      "duration": 380,
      "url": "/audio/90s_147.mp3",
      "category": "90s"
    },
    {
      "id": "90s_148",
      "title": "O Mere Dil Ke Chain",
      "artist": "Kishore Kumar, R. D. Burman",
      "album": "Mere Jeevan Saathi",
      "duration": 273,
      "url": "/audio/90s_148.mp3",
      "category": "90s"
    },
    {
      "id": "90s_149",
      "title": "O Saathi Re - Kishore Kumar",
      "artist": "Kishore Kumar, Kalyanji-Anandji",
      "album": "Muqaddar Ka Sikandar",
      "duration": 269,
      "url": "/audio/90s_149.mp3",
      "category": "90s"
    },
    {
      "id": "90s_150",
      "title": "Oye Raju",
      "artist": "Anand Raj Anand",
      "album": "Hadh Kar Di Aapne",
      "duration": 353,
      "url": "/audio/90s_150.mp3",
      "category": "90s"
    },
    {
      "id": "90s_151",
      "title": "Paas Woh Aane Lage",
      "artist": "Kumar Sanu, Alka Yagnik",
      "album": "Bollywood Music - Kumar Sanu At His Best, Vol. 1",
      "duration": 372,
      "url": "/audio/90s_151.mp3",
      "category": "90s"
    },
    {
      "id": "90s_152",
      "title": "Pal Pal Dil Ke Paas",
      "artist": "Kishore Kumar",
      "album": "The Golden Years, Vol. 1",
      "duration": 328,
      "url": "/audio/90s_152.mp3",
      "category": "90s"
    },
    {
      "id": "90s_153",
      "title": "Papa Kahte Hain",
      "artist": "Udit Narayan",
      "album": "Qayamat Se Qayamat Tak",
      "duration": 353,
      "url": "/audio/90s_153.mp3",
      "category": "90s"
    },
    {
      "id": "90s_154",
      "title": "Pehla Nasha",
      "artist": "Udit Narayan, Sadhana Sargam",
      "album": "Jo Jeeta Wohi Sikandar",
      "duration": 291,
      "url": "/audio/90s_154.mp3",
      "category": "90s"
    },
    {
      "id": "90s_155",
      "title": "Pehli Pehli Baar Mohabbat Ki Hai",
      "artist": "Kumar Sanu, Alka Yagnik",
      "album": "Dheere Dheere Se - The Era Of Kumar Sanu",
      "duration": 458,
      "url": "/audio/90s_155.mp3",
      "category": "90s"
    },
    {
      "id": "90s_156",
      "title": "Phir Bhi Dil Hai Hindustani",
      "artist": "Jatin-Lalit, Udit Narayan",
      "album": "Phir Bhi Dil Hai Hindustani",
      "duration": 240,
      "url": "/audio/90s_156.mp3",
      "category": "90s"
    },
    {
      "id": "90s_157",
      "title": "Phoolon Ke Rang Se",
      "artist": "Kishore Kumar",
      "album": "Prem Pujari",
      "duration": 306,
      "url": "/audio/90s_157.mp3",
      "category": "90s"
    },
    {
      "id": "90s_158",
      "title": "Phoolon Sa Chehra Tera",
      "artist": "Udit Narayan",
      "album": "Anari",
      "duration": 408,
      "url": "/audio/90s_158.mp3",
      "category": "90s"
    },
    {
      "id": "90s_159",
      "title": "Premi Aashiq Aawara",
      "artist": "Kumar Sanu",
      "album": "Phool Aur Kaante",
      "duration": 296,
      "url": "/audio/90s_159.mp3",
      "category": "90s"
    },
    {
      "id": "90s_160",
      "title": "Pyar Diwana Hota Hai",
      "artist": "Kishore Kumar, R. D. Burman",
      "album": "Kati Patang",
      "duration": 284,
      "url": "/audio/90s_160.mp3",
      "category": "90s"
    },
    {
      "id": "90s_161",
      "title": "Pyar Hua Iqrar Hua",
      "artist": "Manna Dey, Lata Mangeshkar",
      "album": "Shree 420",
      "duration": 260,
      "url": "/audio/90s_161.mp3",
      "category": "90s"
    },
    {
      "id": "90s_162",
      "title": "Pyar Ki Kashti Mein",
      "artist": "Udit Narayan, Alka Yagnik",
      "album": "Kaho Naa Pyar Hai",
      "duration": 356,
      "url": "/audio/90s_162.mp3",
      "category": "90s"
    },
    {
      "id": "90s_163",
      "title": "Raah Mein Unse Mulaqat",
      "artist": "Kumar Sanu, Alka Yagnik",
      "album": "Vijaypath",
      "duration": 519,
      "url": "/audio/90s_163.mp3",
      "category": "90s"
    },
    {
      "id": "90s_164",
      "title": "Raat Ki Hatheli Par",
      "artist": "Udit Narayan",
      "album": "Refugee",
      "duration": 396,
      "url": "/audio/90s_164.mp3",
      "category": "90s"
    },
    {
      "id": "90s_165",
      "title": "Radha Kaise Na Jale",
      "artist": "Asha Bhosle, Udit Narayan, Vaishali Samant, A.R. Rahman",
      "album": "Lagaan",
      "duration": 334,
      "url": "/audio/90s_165.mp3",
      "category": "90s"
    },
    {
      "id": "90s_166",
      "title": "Ram Jaane",
      "artist": "Udit Narayan, Alka Yagnik, Sonu Nigam",
      "album": "Ram Jaane",
      "duration": 455,
      "url": "/audio/90s_166.mp3",
      "category": "90s"
    },
    {
      "id": "90s_167",
      "title": "Rimjhim Gire Sawan",
      "artist": "Kishore Kumar, Lata Mangeshkar",
      "album": "In Love with Kishore Kumar",
      "duration": 216,
      "url": "/audio/90s_167.mp3",
      "category": "90s"
    },
    {
      "id": "90s_168",
      "title": "Ruk Ja O Dil Deewane",
      "artist": "Udit Narayan",
      "album": "Dilwale Dulhania Le Jayenge",
      "duration": 312,
      "url": "/audio/90s_168.mp3",
      "category": "90s"
    },
    {
      "id": "90s_169",
      "title": "Saagar Jaisi Aankhonwali",
      "artist": "Kishore Kumar, R. D. Burman",
      "album": "Romantic Hits by Kishore Kumar",
      "duration": 303,
      "url": "/audio/90s_169.mp3",
      "category": "90s"
    },
    {
      "id": "90s_170",
      "title": "Saagar Kinare",
      "artist": "Lata Mangeshkar, Kishore Kumar, R. D. Burman",
      "album": "Saagar",
      "duration": 257,
      "url": "/audio/90s_170.mp3",
      "category": "90s"
    },
    {
      "id": "90s_171",
      "title": "Saaton Janam Main Tere",
      "artist": "Kumar Sanu, Alka Yagnik",
      "album": "Dilwale",
      "duration": 339,
      "url": "/audio/90s_171.mp3",
      "category": "90s"
    },
    {
      "id": "90s_172",
      "title": "Sab Kuchh Bhula Diya (Female)",
      "artist": "Sonu Nigam, Sapna Awasthi, Bali Brahmbhatt, Kartik Awasthi",
      "album": "Hum Tumhare Hain Sanam",
      "duration": 475,
      "url": "/audio/90s_172.mp3",
      "category": "90s"
    },
    {
      "id": "90s_173",
      "title": "Sama Hai Suhana Suhana",
      "artist": "Kishore Kumar, Kalyanji-Anandji",
      "album": "Ghar Ghar Ki Kahani",
      "duration": 206,
      "url": "/audio/90s_173.mp3",
      "category": "90s"
    },
    {
      "id": "90s_174",
      "title": "Sanam Bewafa",
      "artist": "Lata Mangeshkar, Vipin Sachdeva",
      "album": "Sanam Bewafa",
      "duration": 370,
      "url": "/audio/90s_174.mp3",
      "category": "90s"
    },
    {
      "id": "90s_175",
      "title": "Seena Pada",
      "artist": "Udit Narayan",
      "album": "Saaya",
      "duration": 428,
      "url": "/audio/90s_175.mp3",
      "category": "90s"
    },
    {
      "id": "90s_176",
      "title": "Shadi Karvaho - Jis Desh Mein Ganga Rehta Hai / Soundtrack Version",
      "artist": "Udit Narayan, Sapna Avasthi",
      "album": "Jis Desh Mein Ganga Rehta Hai",
      "duration": 301,
      "url": "/audio/90s_176.mp3",
      "category": "90s"
    },
    {
      "id": "90s_177",
      "title": "Sochenge Tumhe Pyar",
      "artist": "Kumar Sanu",
      "album": "Bollywood Best Trio - Kumar Sanu, Nadeem - Shravan",
      "duration": 362,
      "url": "/audio/90s_177.mp3",
      "category": "90s"
    },
    {
      "id": "90s_178",
      "title": "Suhana Safar Aur Yeh Mausam",
      "artist": "Mukesh",
      "album": "Madhumati",
      "duration": 229,
      "url": "/audio/90s_178.mp3",
      "category": "90s"
    },
    {
      "id": "90s_179",
      "title": "Sunta Hai Mera Khuda",
      "artist": "Udit Narayan, Kavita Krishnamurthy, Swarnalatha",
      "album": "Pukar",
      "duration": 396,
      "url": "/audio/90s_179.mp3",
      "category": "90s"
    },
    {
      "id": "90s_180",
      "title": "Tadpaoge Tadpa Lo",
      "artist": "Lata Mangeshkar",
      "album": "Barkha",
      "duration": 201,
      "url": "/audio/90s_180.mp3",
      "category": "90s"
    },
    {
      "id": "90s_181",
      "title": "Tera Mujhse",
      "artist": "Kishore Kumar, Sushma Shrestha, R. D. Burman",
      "album": "Aa Gale Lag Jaa",
      "duration": 254,
      "url": "/audio/90s_181.mp3",
      "category": "90s"
    },
    {
      "id": "90s_182",
      "title": "Tera Naam Liya",
      "artist": "Manhar Udhas, Anuradha Paudwal, Laxmikant–Pyarelal",
      "album": "Ram Lakhan",
      "duration": 356,
      "url": "/audio/90s_182.mp3",
      "category": "90s"
    },
    {
      "id": "90s_183",
      "title": "Tere Dar Par Sanam (Male)",
      "artist": "Kumar Sanu",
      "album": "Phir Teri Kahani Yaad Aayee",
      "duration": 368,
      "url": "/audio/90s_183.mp3",
      "category": "90s"
    },
    {
      "id": "90s_184",
      "title": "Tere Dard Se Dil",
      "artist": "Kumar Sanu",
      "album": "Deewana",
      "duration": 291,
      "url": "/audio/90s_184.mp3",
      "category": "90s"
    },
    {
      "id": "90s_185",
      "title": "Tere Dard Se Dil (Jhankar)",
      "artist": "Kumar Sanu",
      "album": "90's Bollywood Sad Songs (With Jhankar Beats)",
      "duration": 281,
      "url": "/audio/90s_185.mp3",
      "category": "90s"
    },
    {
      "id": "90s_186",
      "title": "Tere Mere Milan Ki Yeh Raina",
      "artist": "Lata Mangeshkar, Kishore Kumar",
      "album": "In Love with Kishore Kumar",
      "duration": 294,
      "url": "/audio/90s_186.mp3",
      "category": "90s"
    },
    {
      "id": "90s_187",
      "title": "Tere Mere Sapne Ab Ek Rang Hain",
      "artist": "Mohammed Rafi",
      "album": "Guide",
      "duration": 261,
      "url": "/audio/90s_187.mp3",
      "category": "90s"
    },
    {
      "id": "90s_188",
      "title": "Tere Naam",
      "artist": "Udit Narayan, Alka Yagnik",
      "album": "Tere Naam",
      "duration": 391,
      "url": "/audio/90s_188.mp3",
      "category": "90s"
    },
    {
      "id": "90s_189",
      "title": "Teri Bindiya Re",
      "artist": "Lata Mangeshkar, Mohammed Rafi, S. D. Burman",
      "album": "Abhimaan",
      "duration": 272,
      "url": "/audio/90s_189.mp3",
      "category": "90s"
    },
    {
      "id": "90s_190",
      "title": "Teri Galiyon Mein",
      "artist": "Mohammed Rafi",
      "album": "Hawas",
      "duration": 283,
      "url": "/audio/90s_190.mp3",
      "category": "90s"
    },
    {
      "id": "90s_191",
      "title": "Teri Umeed Tera Intezar",
      "artist": "Kumar Sanu, Sadhana Sargam",
      "album": "Deewana",
      "duration": 379,
      "url": "/audio/90s_191.mp3",
      "category": "90s"
    },
    {
      "id": "90s_192",
      "title": "Too Shayar Hai Main Teri Shayari",
      "artist": "Alka Yagnik",
      "album": "My Best Collection - Alka Yagnik",
      "duration": 389,
      "url": "/audio/90s_192.mp3",
      "category": "90s"
    },
    {
      "id": "90s_193",
      "title": "Tu Mere Samne",
      "artist": "Lata Mangeshkar, Udit Narayan",
      "album": "Darr",
      "duration": 366,
      "url": "/audio/90s_193.mp3",
      "category": "90s"
    },
    {
      "id": "90s_194",
      "title": "Tu Meri Zindagi Hai",
      "artist": "Anuradha Paudwal, Kumar Sanu",
      "album": "Aashiqui",
      "duration": 283,
      "url": "/audio/90s_194.mp3",
      "category": "90s"
    },
    {
      "id": "90s_195",
      "title": "Tu Pyar Hai Kisi Aur Ka",
      "artist": "Anuradha Paudwal",
      "album": "Anuradha Paudwal Songs, Vol.1",
      "duration": 405,
      "url": "/audio/90s_195.mp3",
      "category": "90s"
    },
    {
      "id": "90s_196",
      "title": "Tujhe Jeevan Ki Dor Se",
      "artist": "Mohammed Rafi, Lata Mangeshkar",
      "album": "Woh Jab Yaad Aaye - Lata and Mohd. Rafi",
      "duration": 199,
      "url": "/audio/90s_196.mp3",
      "category": "90s"
    },
    {
      "id": "90s_197",
      "title": "Tujhko Na Dekhun",
      "artist": "Udit Narayan, Sunidhi Chauhan",
      "album": "Jaanwar",
      "duration": 293,
      "url": "/audio/90s_197.mp3",
      "category": "90s"
    },
    {
      "id": "90s_198",
      "title": "Tum Dil Ki Dhadkan Mein",
      "artist": "Kumar Sanu",
      "album": "Dhadkan",
      "duration": 314,
      "url": "/audio/90s_198.mp3",
      "category": "90s"
    },
    {
      "id": "90s_199",
      "title": "Tum Itna Jo Muskura Rahe Ho",
      "artist": "Jagjit Singh",
      "album": "Kaifi Azmi Ki Kalam Se",
      "duration": 321,
      "url": "/audio/90s_199.mp3",
      "category": "90s"
    },
    {
      "id": "90s_200",
      "title": "Tum Jo Mil Gaye Ho",
      "artist": "Mohammed Rafi",
      "album": "Hanste Zakhm",
      "duration": 486,
      "url": "/audio/90s_200.mp3",
      "category": "90s"
    },
    {
      "id": "90s_201",
      "title": "Tum Se Achcha Kaun Hai Chand Tare Phool",
      "artist": "Tauseef Akhtar",
      "album": "Tum Se Achcha Kaun Hain",
      "duration": 304,
      "url": "/audio/90s_201.mp3",
      "category": "90s"
    },
    {
      "id": "90s_202",
      "title": "Tum To Thehre Pardesi",
      "artist": "Altaf Raja",
      "album": "Tum To Thehre Pardesi",
      "duration": 874,
      "url": "/audio/90s_202.mp3",
      "category": "90s"
    },
    {
      "id": "90s_203",
      "title": "Tumhein Apna Banane Ki Kasam Khai Hai",
      "artist": "Kumar Sanu",
      "album": "Sadak",
      "duration": 339,
      "url": "/audio/90s_203.mp3",
      "category": "90s"
    },
    {
      "id": "90s_204",
      "title": "Tumsa Koi Pyaara",
      "artist": "Kumar Sanu, Alka Yagnik",
      "album": "Khuddar",
      "duration": 342,
      "url": "/audio/90s_204.mp3",
      "category": "90s"
    },
    {
      "id": "90s_205",
      "title": "Tumse Milna",
      "artist": "Udit Narayan, Alka Yagnik",
      "album": "Tere Naam",
      "duration": 279,
      "url": "/audio/90s_205.mp3",
      "category": "90s"
    },
    {
      "id": "90s_206",
      "title": "Tumse Milne Ko Dil",
      "artist": "Alka Yagnik, Kumar Sanu",
      "album": "Phool Aur Kaante",
      "duration": 300,
      "url": "/audio/90s_206.mp3",
      "category": "90s"
    },
    {
      "id": "90s_207",
      "title": "Uden Jab Jab Zulfen Teri",
      "artist": "Mohammed Rafi, Asha Bhosle",
      "album": "Naya Daur",
      "duration": 295,
      "url": "/audio/90s_207.mp3",
      "category": "90s"
    },
    {
      "id": "90s_208",
      "title": "Unse Mili Nazar Ke Mere Hosh Ud Gai",
      "artist": "Lata Mangeshkar",
      "album": "Jhuk Gaya Aasman",
      "duration": 245,
      "url": "/audio/90s_208.mp3",
      "category": "90s"
    },
    {
      "id": "90s_209",
      "title": "Woh Hai Zara Khafa Khafa",
      "artist": "Lata Mangeshkar, Mohammed Rafi",
      "album": "Shagird",
      "duration": 353,
      "url": "/audio/90s_209.mp3",
      "category": "90s"
    },
    {
      "id": "90s_210",
      "title": "Woh Meri Neend Mera Chain",
      "artist": "Sadhana Sargam",
      "album": "Hum Hain Rahi Pyar Ke",
      "duration": 298,
      "url": "/audio/90s_210.mp3",
      "category": "90s"
    },
    {
      "id": "90s_211",
      "title": "Yaad Kiya Dil Ne",
      "artist": "Lata Mangeshkar, Hemant Kumar",
      "album": "Patita",
      "duration": 254,
      "url": "/audio/90s_211.mp3",
      "category": "90s"
    },
    {
      "id": "90s_212",
      "title": "Yaaron Sun Lo Zara",
      "artist": "A.R. Rahman, Udit Narayan, K. S. Chithra, Mehboob",
      "album": "Rangeela",
      "duration": 354,
      "url": "/audio/90s_212.mp3",
      "category": "90s"
    },
    {
      "id": "90s_213",
      "title": "Yeh Jo Mohabbat Hai",
      "artist": "Kishore Kumar",
      "album": "Kati Patang",
      "duration": 247,
      "url": "/audio/90s_213.mp3",
      "category": "90s"
    },
    {
      "id": "90s_214",
      "title": "Yeh Kahan Aa Gaye Hum",
      "artist": "Lata Mangeshkar, Amitabh Bachchan, Javed Akhtar",
      "album": "Silsila",
      "duration": 474,
      "url": "/audio/90s_214.mp3",
      "category": "90s"
    },
    {
      "id": "90s_215",
      "title": "Yeh Ladka Hai Deewana",
      "artist": "Jatin-Lalit, Udit Narayan, Alka Yagnik",
      "album": "Kuch Kuch Hota Hai",
      "duration": 397,
      "url": "/audio/90s_215.mp3",
      "category": "90s"
    },
    {
      "id": "90s_216",
      "title": "Yeh Raat Bheegi Bheegi",
      "artist": "Manna Dey, Lata Mangeshkar",
      "album": "Chori Chori",
      "duration": 269,
      "url": "/audio/90s_216.mp3",
      "category": "90s"
    },
    {
      "id": "90s_217",
      "title": "Yeh Raat Yeh Chandni - Hemant Kumar",
      "artist": "Hemant Kumar, S. D. Burman",
      "album": "Jaal",
      "duration": 296,
      "url": "/audio/90s_217.mp3",
      "category": "90s"
    },
    {
      "id": "90s_218",
      "title": "Yeh Raaten Yeh Mausam",
      "artist": "Kishore Kumar, Asha Bhosle",
      "album": "Dilli Ka Thug",
      "duration": 201,
      "url": "/audio/90s_218.mp3",
      "category": "90s"
    },
    {
      "id": "90s_219",
      "title": "Yeh Raaten",
      "artist": "Lata Mangeshkar",
      "album": "Julie",
      "duration": 336,
      "url": "/audio/90s_219.mp3",
      "category": "90s"
    },
    {
      "id": "90s_220",
      "title": "Yeh Sham Mastani",
      "artist": "Kishore Kumar, R. D. Burman",
      "album": "Kati Patang",
      "duration": 276,
      "url": "/audio/90s_220.mp3",
      "category": "90s"
    },
    {
      "id": "90s_221",
      "title": "Yeh Tara Woh Tara",
      "artist": "Udit Narayan, Master Vignesh, Baby Miss Pooja, Kids",
      "album": "Swades",
      "duration": 432,
      "url": "/audio/90s_221.mp3",
      "category": "90s"
    },
    {
      "id": "90s_222",
      "title": "Yun Hi Chala Chal",
      "artist": "Udit Narayan, Hariharan, Kailash Kher",
      "album": "Swades",
      "duration": 447,
      "url": "/audio/90s_222.mp3",
      "category": "90s"
    },
    {
      "id": "90s_223",
      "title": "Yunhi Tum Mujhse",
      "artist": "Mohammed Rafi, Lata Mangeshkar",
      "album": "Sachaa Jhutha",
      "duration": 257,
      "url": "/audio/90s_223.mp3",
      "category": "90s"
    },
    {
      "id": "90s_224",
      "title": "Zindagi Kaisi Hai Paheli",
      "artist": "Manna Dey, Salil Chowdhury",
      "album": "Anand",
      "duration": 209,
      "url": "/audio/90s_224.mp3",
      "category": "90s"
    }
  ],
  "nostalgic": [
    {
      "id": "nostalgic_1",
      "title": "Aadat",
      "artist": "Jal, Mithoon, Atif Aslam",
      "album": "Kalyug",
      "duration": 333,
      "url": "/audio/nostalgic_001.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_2",
      "title": "Aahun Aahun",
      "artist": "Pritam, Neeraj Shridhar, Master Saleem, Suzi Q, Irshad Kamil",
      "album": "Love Aaj Kal",
      "duration": 290,
      "url": "/audio/nostalgic_002.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_3",
      "title": "Aal Izz Well",
      "artist": "Swanand Kirkire, Sonu Nigam, Shaan",
      "album": "3 Idiots",
      "duration": 276,
      "url": "/audio/nostalgic_003.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_4",
      "title": "Aao Milo Chalo",
      "artist": "Pritam, Shaan, Ustad Sultan Khan, Irshad Kamil",
      "album": "Jab We Met",
      "duration": 325,
      "url": "/audio/nostalgic_004.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_5",
      "title": "Aapka Kya Hoga (Dhanno)",
      "artist": "Mika Singh, Sunidhi Chauhan, Sajid Khan",
      "album": "Housefull",
      "duration": 307,
      "url": "/audio/nostalgic_005.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_6",
      "title": "Aashiqui Mein Teri",
      "artist": "Himesh Reshammiya, Sunidhi Chauhan",
      "album": "36 China Town",
      "duration": 293,
      "url": "/audio/nostalgic_006.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_7",
      "title": "Ab To Forever",
      "artist": "Vishal-Shekhar, KK, Shreya Ghoshal, Vishal Dadlani, Javed Akhtar",
      "album": "Ta Ra Rum Pum",
      "duration": 301,
      "url": "/audio/nostalgic_007.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_8",
      "title": "Abhi Mujh Mein Kahin",
      "artist": "Ajay-Atul, Sonu Nigam",
      "album": "Agneepath",
      "duration": 364,
      "url": "/audio/nostalgic_008.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_9",
      "title": "Ada",
      "artist": "Sonu Nigam",
      "album": "Garam Masala",
      "duration": 287,
      "url": "/audio/nostalgic_009.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_10",
      "title": "Ajab Si",
      "artist": "KK",
      "album": "Teri Yaadon Mein - K.K.",
      "duration": 241,
      "url": "/audio/nostalgic_010.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_11",
      "title": "Ale",
      "artist": "Pritam, Neeraj Shridhar, Antara Mitra",
      "album": "Golmaal 3",
      "duration": 279,
      "url": "/audio/nostalgic_011.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_12",
      "title": "Allah Hafiz",
      "artist": "Pritam, KK, Sameer Anjaan",
      "album": "Bhool Bhulaiyaa",
      "duration": 270,
      "url": "/audio/nostalgic_012.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_13",
      "title": "Allah Maaf Kare",
      "artist": "Pritam, Sonu Nigam, Shilpa Rao",
      "album": "Desi Boyz",
      "duration": 230,
      "url": "/audio/nostalgic_013.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_14",
      "title": "Apna Har Din",
      "artist": "Pritam, Shaan, Anushka Manchanda",
      "album": "Golmaal 3",
      "duration": 265,
      "url": "/audio/nostalgic_014.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_15",
      "title": "Banjaara",
      "artist": "Sohail Sen, Sukhwinder Singh, Neelesh Misra",
      "album": "Ek Tha Tiger",
      "duration": 273,
      "url": "/audio/nostalgic_015.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_16",
      "title": "Barso Re",
      "artist": "A.R. Rahman, Shreya Ghoshal, Uday Mazumdar",
      "album": "Guru",
      "duration": 329,
      "url": "/audio/nostalgic_016.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_17",
      "title": "Bas Ek Kinng",
      "artist": "Pritam, Mika Singh, Neeraj Shridhar, Ashish Pandit, Hard Kaur, Mayur Puri",
      "album": "Singh Is Kinng",
      "duration": 280,
      "url": "/audio/nostalgic_017.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_18",
      "title": "Behti Hawa Sa Tha Woh",
      "artist": "Shantanu Moitra, Shaan",
      "album": "3 Idiots",
      "duration": 302,
      "url": "/audio/nostalgic_018.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_19",
      "title": "Bhagam Bhag",
      "artist": "Pritam, Neeraj Shridhar",
      "album": "Bhagam Bhag",
      "duration": 276,
      "url": "/audio/nostalgic_019.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_20",
      "title": "Bheegi Si Bhaagi Si",
      "artist": "Pritam, Mohit Chauhan, Antara Mitra",
      "album": "Raajneeti",
      "duration": 278,
      "url": "/audio/nostalgic_020.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_21",
      "title": "Bhool Bhulaiyaa",
      "artist": "Pritam, Neeraj Shridhar, Sameer Anjaan",
      "album": "Bhool Bhulaiyaa",
      "duration": 325,
      "url": "/audio/nostalgic_021.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_22",
      "title": "Bol Na Halke Halke",
      "artist": "Shankar-Ehsaan-Loy, Rahat Fateh Ali Khan, Mahalakshmi Iyer, Gulzar",
      "album": "Jhoom Barabar Jhoom",
      "duration": 306,
      "url": "/audio/nostalgic_022.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_23",
      "title": "Boss",
      "artist": "Meet Bros Anjjan, Yo Yo Honey Singh",
      "album": "Yo Yo Honey Singh Is Back",
      "duration": 288,
      "url": "/audio/nostalgic_023.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_24",
      "title": "Bure Bure and Boro Boro",
      "artist": "Robert Uhlmarash",
      "album": "Bluff Master",
      "duration": 186,
      "url": "/audio/nostalgic_024.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_25",
      "title": "Chaand Taare",
      "artist": "Abhijeet, Jatin-Lalit",
      "album": "Yes Boss",
      "duration": 289,
      "url": "/audio/nostalgic_025.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_26",
      "title": "Chaiyya Chaiyya",
      "artist": "Sukhwinder Singh, Sapna Awasthi",
      "album": "Dil Se",
      "duration": 406,
      "url": "/audio/nostalgic_026.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_27",
      "title": "Chammak Challo",
      "artist": "Vishal-Shekhar, Akon, Hamsika Iyer, Vishal Dadlani, Niranjan Iyengar",
      "album": "Ra-One",
      "duration": 227,
      "url": "/audio/nostalgic_027.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_28",
      "title": "Chand Sifarish",
      "artist": "Jatin-Lalit, Shaan, Kailash Kher, Prasoon Joshi",
      "album": "Fanaa",
      "duration": 275,
      "url": "/audio/nostalgic_028.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_29",
      "title": "Chhaliya",
      "artist": "Vishal-Shekhar, Sunidhi Chauhan, Piyush Mishra, Anvita Dutt Guptan",
      "album": "Tashan",
      "duration": 285,
      "url": "/audio/nostalgic_029.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_30",
      "title": "Chhod Do Aanchal Zamana Kya Kahega",
      "artist": "Kishore Kumar, Asha Bhosle, S. D. Burman",
      "album": "Paying Guest",
      "duration": 250,
      "url": "/audio/nostalgic_030.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_31",
      "title": "Chhod Do Anchal Zamana Kya Kahega - Remix",
      "artist": "Arnab Chakraborty, Pallavi Kelkar, S.D.Burmanuj Mathews",
      "album": "G-16 - Genext- Hot Remixes",
      "duration": 216,
      "url": "/audio/nostalgic_031.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_32",
      "title": "Choomantar",
      "artist": "Sohail Sen, Benny Dayal, Aditi Singh Sharma, Irshad Kamil",
      "album": "Mere Brother Ki Dulhan",
      "duration": 260,
      "url": "/audio/nostalgic_032.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_33",
      "title": "Chor Bazaari",
      "artist": "Pritam, Neeraj Shridhar, Sunidhi Chauhan",
      "album": "Love Aaj Kal",
      "duration": 257,
      "url": "/audio/nostalgic_033.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_34",
      "title": "Chori Chori Chupke Chupke",
      "artist": "Udit Narayan, Shreya Ghoshal",
      "album": "Krrish",
      "duration": 388,
      "url": "/audio/nostalgic_034.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_35",
      "title": "Criminal",
      "artist": "Vishal-Shekhar, Akon, Vishal Dadlani, Shruti Pathak, Kumaar",
      "album": "Ra-One",
      "duration": 306,
      "url": "/audio/nostalgic_035.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_36",
      "title": "Dard - E - Disco",
      "artist": "Sukhwinder Singh, Marianne, Nisha, Caralisa Monteiro, Vishal-Shekhar, Javed Akhtar",
      "album": "Om Shanti Om",
      "duration": 268,
      "url": "/audio/nostalgic_036.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_37",
      "title": "Deewana Main Chala",
      "artist": "Udit Narayan",
      "album": "Pyaar Kiya To Darna Kya",
      "duration": 328,
      "url": "/audio/nostalgic_037.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_38",
      "title": "Dekho Dekho Dil Ye Bole",
      "artist": "Adnan Sami, Shaan",
      "album": "Dhamaal",
      "duration": 313,
      "url": "/audio/nostalgic_038.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_39",
      "title": "Dhadak Dhadak",
      "artist": "Shankar-Ehsaan-Loy, Udit Narayan, Sunidhi Chauhan, Nihira Joshi, Gulzar",
      "album": "Bunty Aur Babli",
      "duration": 392,
      "url": "/audio/nostalgic_039.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_40",
      "title": "Dhoom Machale",
      "artist": "Pritam, Sunidhi Chauhan, Sameer Anjaan",
      "album": "Dhoom",
      "duration": 374,
      "url": "/audio/nostalgic_040.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_41",
      "title": "Dil Dil Nazar",
      "artist": "Shaan, Neeraj, Shaznine",
      "album": "Maine Pyaar Kyun Kiya",
      "duration": 321,
      "url": "/audio/nostalgic_041.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_42",
      "title": "Dil Dooba",
      "artist": "Sonu Nigam, Shreya Ghoshal",
      "album": "Khakee",
      "duration": 229,
      "url": "/audio/nostalgic_042.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_43",
      "title": "Dil Haara",
      "artist": "Vishal-Shekhar, Sukhwinder Singh, Piyush Mishra",
      "album": "Tashan",
      "duration": 351,
      "url": "/audio/nostalgic_043.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_44",
      "title": "Dil Na Diya",
      "artist": "Kunal Ganjawala",
      "album": "Krrish",
      "duration": 354,
      "url": "/audio/nostalgic_044.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_45",
      "title": "Dilbara",
      "artist": "Pritam, Abhijeet, Sowmya Raoh, Sameer Anjaan",
      "album": "Dhoom",
      "duration": 271,
      "url": "/audio/nostalgic_045.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_46",
      "title": "Dildaara (Stand By Me)",
      "artist": "Vishal-Shekhar, Shafqat Amanat Ali, Kumaar",
      "album": "Ra-One",
      "duration": 249,
      "url": "/audio/nostalgic_046.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_47",
      "title": "Do U Know",
      "artist": "Shaan, Shreya Ghoshal",
      "album": "Housefull 2",
      "duration": 322,
      "url": "/audio/nostalgic_047.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_48",
      "title": "Dus Bahane",
      "artist": "Vishal-Shekhar, Shaan, KK",
      "album": "Dus",
      "duration": 207,
      "url": "/audio/nostalgic_048.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_49",
      "title": "Ek Pal Ka Jeena",
      "artist": "Lucky Ali",
      "album": "Kaho Naa Pyar Hai",
      "duration": 397,
      "url": "/audio/nostalgic_049.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_50",
      "title": "Falak Tak",
      "artist": "Vishal-Shekhar, Udit Narayan, Mahalakshmi Iyer, Kausar Munir",
      "album": "Tashan",
      "duration": 355,
      "url": "/audio/nostalgic_050.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_51",
      "title": "Guzarish",
      "artist": "A.R. Rahman, Javed Ali, Prasoon Joshi",
      "album": "Ghajini",
      "duration": 327,
      "url": "/audio/nostalgic_051.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_52",
      "title": "Haule Haule",
      "artist": "Salim–Sulaiman, Sukhwinder Singh, Jaideep Sahni",
      "album": "Rab Ne Bana Di Jodi",
      "duration": 263,
      "url": "/audio/nostalgic_052.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_53",
      "title": "Hey Shona",
      "artist": "Vishal-Shekhar, Shaan, Sunidhi Chauhan, Javed Akhtar",
      "album": "Ta Ra Rum Pum",
      "duration": 318,
      "url": "/audio/nostalgic_053.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_54",
      "title": "Heyy Babyy",
      "artist": "Neeraj Shridhar, Raman, Pervez Qadir, Loy, Shankar-Ehsaan-Loy, Sameer Anjaan",
      "album": "Heyy Babyy",
      "duration": 274,
      "url": "/audio/nostalgic_054.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_55",
      "title": "Hookah Bar",
      "artist": "Himesh Reshammiya, Vineet Singh, Aaman Trikha",
      "album": "Khiladi 786",
      "duration": 254,
      "url": "/audio/nostalgic_055.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_56",
      "title": "Its Magic",
      "artist": "Taz Stereo Nation, Rajesh Roshan",
      "album": "Koi Mil Gaya",
      "duration": 346,
      "url": "/audio/nostalgic_056.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_57",
      "title": "Jhak Maar Ke",
      "artist": "Pritam, Neeraj Shridhar, Harshdeep Kaur",
      "album": "Desi Boyz",
      "duration": 233,
      "url": "/audio/nostalgic_057.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_58",
      "title": "Jhoom Barabar Jhoom",
      "artist": "Shankar-Ehsaan-Loy, KK, Sukhwinder Singh, Mahalakshmi Iyer, Shankar Mahadevan, Gulzar",
      "album": "Jhoom Barabar Jhoom",
      "duration": 425,
      "url": "/audio/nostalgic_058.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_59",
      "title": "Jis Jagah Pe Khatam",
      "artist": "Pritam, Neeraj Shridhar, Siddharth Basrur, Mauli Dave",
      "album": "Players",
      "duration": 250,
      "url": "/audio/nostalgic_059.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_60",
      "title": "Jiya Dhadak Dhadak Jaye",
      "artist": "Rahat Fateh Ali Khan, Rohail Hyatt, Faisal Rafi",
      "album": "Kalyug",
      "duration": 319,
      "url": "/audio/nostalgic_060.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_61",
      "title": "Jo Tere Sang",
      "artist": "Jeet Gannguli, Mustafa Zahid, Sayeed Quadri",
      "album": "Blood Money",
      "duration": 306,
      "url": "/audio/nostalgic_061.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_62",
      "title": "Kabhi Kabhi Aditi",
      "artist": "Rashid Ali",
      "album": "Jaane Tu... Ya Jaane Na",
      "duration": 218,
      "url": "/audio/nostalgic_062.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_63",
      "title": "Kaho Na Kaho",
      "artist": "Amir Jamal",
      "album": "Murder",
      "duration": 311,
      "url": "/audio/nostalgic_063.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_64",
      "title": "Kajra Re",
      "artist": "Shankar-Ehsaan-Loy, Alisha Chinai, Shankar Mahadevan, Gulzar",
      "album": "YRF Top 10 - Nightout Sounds",
      "duration": 482,
      "url": "/audio/nostalgic_064.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_65",
      "title": "Kal Ho Naa Ho",
      "artist": "Shankar-Ehsaan-Loy, Sonu Nigam",
      "album": "Kal Ho Naa Ho",
      "duration": 321,
      "url": "/audio/nostalgic_065.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_66",
      "title": "Khuda Jaane",
      "artist": "Vishal-Shekhar, KK, Shilpa Rao, Anvita Dutt Guptan",
      "album": "Bachna Ae Haseeno",
      "duration": 333,
      "url": "/audio/nostalgic_066.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_67",
      "title": "Khudaya Khair",
      "artist": "Pritam, Soham Chakraborty, Akriti Kakar, Monali Thakur, Gulzar",
      "album": "Billu",
      "duration": 280,
      "url": "/audio/nostalgic_067.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_68",
      "title": "Kiss Me Baby",
      "artist": "Adnan Sami",
      "album": "Garam Masala",
      "duration": 223,
      "url": "/audio/nostalgic_068.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_69",
      "title": "Kiya Kiya",
      "artist": "Anand Raj Anand, Shweta Pandit",
      "album": "Welcome",
      "duration": 301,
      "url": "/audio/nostalgic_069.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_70",
      "title": "Kya Maine Socha (One Love)",
      "artist": "Blaaze, Shaan",
      "album": "Rakht",
      "duration": 207,
      "url": "/audio/nostalgic_070.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_71",
      "title": "Kya Mujhe Pyar Hai",
      "artist": "Pritam, KK, Neelesh Misra",
      "album": "Woh Lamhe",
      "duration": 266,
      "url": "/audio/nostalgic_071.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_72",
      "title": "Laapata",
      "artist": "Sohail Sen, KK, Palak Muchhal, Anvita Dutt",
      "album": "Ek Tha Tiger",
      "duration": 254,
      "url": "/audio/nostalgic_072.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_73",
      "title": "Ladki Badi Anjani Hai",
      "artist": "Jatin-Lalit, Kumar Sanu, Alka Yagnik",
      "album": "Kuch Kuch Hota Hai",
      "duration": 381,
      "url": "/audio/nostalgic_073.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_74",
      "title": "Ladki Kyon",
      "artist": "Jatin-Lalit, Alka Yagnik, Shaan, Prasoon Joshi",
      "album": "Hum Tum",
      "duration": 377,
      "url": "/audio/nostalgic_074.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_75",
      "title": "Laung Da Lashkara",
      "artist": "Mahalakshmi Iyer, Hard Kaur, Jassi",
      "album": "Patiala House",
      "duration": 304,
      "url": "/audio/nostalgic_075.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_76",
      "title": "Let It Be",
      "artist": "Pritam, Shaan",
      "album": "Desi Boyz",
      "duration": 253,
      "url": "/audio/nostalgic_076.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_77",
      "title": "Long Drive",
      "artist": "Mika Singh",
      "album": "Khiladi 786",
      "duration": 268,
      "url": "/audio/nostalgic_077.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_78",
      "title": "Love Mera Hit Hit",
      "artist": "Pritam, Neeraj Shridhar, Tulsi Kumar, Ashish Pandit",
      "album": "Billu",
      "duration": 286,
      "url": "/audio/nostalgic_078.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_79",
      "title": "Lucky Boy",
      "artist": "Vishal-Shekhar, Sunidhi Chauhan, Hard Kaur, Raja Hasan, Anvita Dutt Guptan",
      "album": "Bachna Ae Haseeno",
      "duration": 253,
      "url": "/audio/nostalgic_079.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_80",
      "title": "Luka Chuppi",
      "artist": "A.R. Rahman, Lata Mangeshkar",
      "album": "MasterWorks - Lata Mangeshkar",
      "duration": 396,
      "url": "/audio/nostalgic_080.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_81",
      "title": "Maa",
      "artist": "Shankar Mahadevan, Shankar-Ehsaan-Loy, Prasoon Joshi",
      "album": "Taare Zameen Par",
      "duration": 310,
      "url": "/audio/nostalgic_081.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_82",
      "title": "Main Agar Kahoon",
      "artist": "Sonu Nigam, Shreya Ghoshal, Vishal-Shekhar, Javed Akhtar",
      "album": "Om Shanti Om",
      "duration": 308,
      "url": "/audio/nostalgic_082.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_83",
      "title": "Main Koi Aisa Geet Gaoon",
      "artist": "Abhijeet, Alka Yagnik",
      "album": "Yes Boss",
      "duration": 305,
      "url": "/audio/nostalgic_083.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_84",
      "title": "Make Some Noise For The Desi Boyz",
      "artist": "Pritam, KK, Bob",
      "album": "Desi Boyz",
      "duration": 244,
      "url": "/audio/nostalgic_084.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_85",
      "title": "Masakali",
      "artist": "Mohit Chauhan, A.R. Rahman, Prasoon Joshi",
      "album": "Delhi-6",
      "duration": 288,
      "url": "/audio/nostalgic_085.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_86",
      "title": "Mast Kalandar",
      "artist": "Saleem Shahzada, Rehan Khan, Shankar Mahadevan, Sajid Khan, Shankar-Ehsaan-Loy, Sameer Anjaan",
      "album": "Heyy Babyy",
      "duration": 345,
      "url": "/audio/nostalgic_086.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_87",
      "title": "Mere Bina",
      "artist": "Pritam, Nikhil D'Souza",
      "album": "Crook",
      "duration": 289,
      "url": "/audio/nostalgic_087.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_88",
      "title": "Milo Na Milo",
      "artist": "Shaan",
      "album": "Unknown Album",
      "duration": 289,
      "url": "/audio/nostalgic_088.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_89",
      "title": "Mujhko Yaad Sataye Teri",
      "artist": "Himesh Reshammiya",
      "album": "Phir Hera Pheri",
      "duration": 279,
      "url": "/audio/nostalgic_089.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_90",
      "title": "My Dil Goes Mmmm",
      "artist": "Vishal-Shekhar, Shaan, Gayatri Iyer, Jaideep Sahni",
      "album": "Salaam Namaste",
      "duration": 452,
      "url": "/audio/nostalgic_090.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_91",
      "title": "Naughty Naughty",
      "artist": "Vishal-Shekhar, Anushka Manchanda",
      "album": "Cash",
      "duration": 221,
      "url": "/audio/nostalgic_091.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_92",
      "title": "O Meri Zohrajabeen",
      "artist": "Himesh Reshammiya",
      "album": "Phir Hera Pheri",
      "duration": 323,
      "url": "/audio/nostalgic_092.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_93",
      "title": "O O Jaane Jaana",
      "artist": "Kamaal Khan",
      "album": "Pyaar Kiya To Darna Kya",
      "duration": 343,
      "url": "/audio/nostalgic_093.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_94",
      "title": "O Rangrez",
      "artist": "Shankar-Ehsaan-Loy, Shreya Ghoshal, Javed Bashir, Yusuf Mohammed, Vajid Ali",
      "album": "O Rangrez",
      "duration": 384,
      "url": "/audio/nostalgic_094.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_95",
      "title": "O Yaara Dhol Bajake",
      "artist": "Pritam, Mika Singh, Irshad Kamil",
      "album": "Dhol",
      "duration": 251,
      "url": "/audio/nostalgic_095.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_96",
      "title": "Oh Girl You're Mine .",
      "artist": "Tarun Sagar, Alyssa Mendonsa, Loy Mendonsa",
      "album": "Housefull",
      "duration": 235,
      "url": "/audio/nostalgic_096.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_97",
      "title": "Paisa",
      "artist": "Manak-E, Selina, R.D.B.",
      "album": "De Dana Dan",
      "duration": 234,
      "url": "/audio/nostalgic_097.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_98",
      "title": "Papa Jag Jayega",
      "artist": "Ritu Pathak, Neeraj Shridhar, Alyssa Mendonsa",
      "album": "Housefull",
      "duration": 198,
      "url": "/audio/nostalgic_098.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_99",
      "title": "Papa Toh Band Bajaye",
      "artist": "Neeraj Shridhar",
      "album": "Housefull 2",
      "duration": 253,
      "url": "/audio/nostalgic_099.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_100",
      "title": "Party All Night",
      "artist": "Yo Yo Honey Singh, Sahil Kaushal",
      "album": "Boss",
      "duration": 282,
      "url": "/audio/nostalgic_100.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_101",
      "title": "Pee Loon",
      "artist": "Pritam, Mohit Chauhan, Irshad Kamil",
      "album": "Once Upon A Time In Mumbaai",
      "duration": 285,
      "url": "/audio/nostalgic_101.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_102",
      "title": "Phir Hera Pheri",
      "artist": "Sonu Nigam",
      "album": "Unknown Album",
      "duration": 140,
      "url": "/audio/nostalgic_102.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_103",
      "title": "Prem Ki Naiyya",
      "artist": "Pritam, Neeraj Shridhar, Suzanne D'Mello",
      "album": "Ajab Prem Ki Ghazab Kahani",
      "duration": 251,
      "url": "/audio/nostalgic_103.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_104",
      "title": "Premika Ne Pyar Se",
      "artist": "S. P. Balasubrahmanyam, S.P. Pallavi, Udit Narayan",
      "album": "Humse Hai Muqabala",
      "duration": 290,
      "url": "/audio/nostalgic_104.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_105",
      "title": "Pungi",
      "artist": "Pritam, Mika Singh, Amitabh Bhattacharya, Nakash Aziz, Javed Jaffrey",
      "album": "Agent Vinod",
      "duration": 247,
      "url": "/audio/nostalgic_105.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_106",
      "title": "Pyaar Ki Ek Kahani",
      "artist": "Sonu Nigam, Shreya Ghoshal",
      "album": "Krrish",
      "duration": 388,
      "url": "/audio/nostalgic_106.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_107",
      "title": "Rehja Re",
      "artist": "Vishal-Shekhar, Javed Ali, Sunidhi Chauhan, Vishal Dadlani, Kumaar",
      "album": "Golmaal Fun Unlimited",
      "duration": 306,
      "url": "/audio/nostalgic_107.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_108",
      "title": "Right Now Now",
      "artist": "Wajid, Sunidhi Chauhan, Suzanne D'Mello",
      "album": "Housefull 2",
      "duration": 246,
      "url": "/audio/nostalgic_108.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_109",
      "title": "Saiyaara",
      "artist": "Sohail Sen, Mohit Chauhan, Tarannum Malik Jain, Kausar Munir",
      "album": "Ek Tha Tiger",
      "duration": 251,
      "url": "/audio/nostalgic_109.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_110",
      "title": "Second Hand Jawaani",
      "artist": "Pritam, Miss Pooja, Neha Kakkar, Nakash Aziz",
      "album": "Cocktail",
      "duration": 241,
      "url": "/audio/nostalgic_110.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_111",
      "title": "Signal",
      "artist": "Pritam, Remo Fernandes, Suzanne",
      "album": "Bhagam Bhag",
      "duration": 297,
      "url": "/audio/nostalgic_111.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_112",
      "title": "Small Town Girl",
      "artist": "Vishal-Shekhar, Shankar Mahadevan, Anvita Dutt Guptan",
      "album": "Bachna Ae Haseeno",
      "duration": 227,
      "url": "/audio/nostalgic_112.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_113",
      "title": "Soni De Nakhre",
      "artist": "Wajid, Labh Janjua, Sneha Pant, Sajid-Wajid, Shabbir Ahmed",
      "album": "Partner",
      "duration": 258,
      "url": "/audio/nostalgic_113.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_114",
      "title": "Subha Hone Na De",
      "artist": "Mika Singh, Shefali Alvares",
      "album": "Pritam's Musical Journey",
      "duration": 288,
      "url": "/audio/nostalgic_114.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_115",
      "title": "Such Keh Raha Hai",
      "artist": "KK",
      "album": "Rehnaa Hai Terre Dil Mein",
      "duration": 328,
      "url": "/audio/nostalgic_115.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_116",
      "title": "Ta Ra Ra Ra Rum Tararumpum",
      "artist": "Vishal-Shekhar, Shreya Ghoshal, Javed Akhtar",
      "album": "Ta Ra Rum Pum",
      "duration": 329,
      "url": "/audio/nostalgic_116.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_117",
      "title": "Ta Ra Rum Pum",
      "artist": "Vishal-Shekhar, Shaan, Mahalakshmi Iyer, Sneha Suresh, Shravan Suresh, Javed Akhtar",
      "album": "Ta Ra Rum Pum",
      "duration": 234,
      "url": "/audio/nostalgic_117.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_118",
      "title": "Tere Liye",
      "artist": "Atif Aslam, Shreya Ghoshal, Sachin Gupta, Sameer Anjaan",
      "album": "Best of Romance: Atif Aslam",
      "duration": 279,
      "url": "/audio/nostalgic_118.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_119",
      "title": "Teri Ore",
      "artist": "Pritam, Rahat Fateh Ali Khan, Shreya Ghoshal, Mayur Puri",
      "album": "Singh Is Kinng",
      "duration": 339,
      "url": "/audio/nostalgic_119.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_120",
      "title": "Tha Kar Ke",
      "artist": "Pritam, Neeraj Shridhar, Anweshaa, Aakariti, Earl Edgar, Indie",
      "album": "Golmaal Returns",
      "duration": 267,
      "url": "/audio/nostalgic_120.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_121",
      "title": "Ticket To Hollywood",
      "artist": "Shankar-Ehsaan-Loy, Neeraj Shridhar, Alisha Chinai, Gulzar",
      "album": "Jhoom Barabar Jhoom",
      "duration": 279,
      "url": "/audio/nostalgic_121.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_122",
      "title": "Tu Hi Haqeeqat",
      "artist": "Pritam, Javed Ali, Irshan Ashraf, Shadab, Sayeed Quadri",
      "album": "Tum Mile",
      "duration": 302,
      "url": "/audio/nostalgic_122.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_123",
      "title": "Tum Se Hi",
      "artist": "Pritam, Mohit Chauhan, Irshad Kamil",
      "album": "Jab We Met",
      "duration": 321,
      "url": "/audio/nostalgic_123.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_124",
      "title": "Tumse Milke Dil Ka",
      "artist": "Sonu Nigam, Sabri Brothers",
      "album": "Love Anthems - Sonu Nigam",
      "duration": 359,
      "url": "/audio/nostalgic_124.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_125",
      "title": "Ucha Lamba Kad",
      "artist": "Anand Raj Anand, Kalpana Patowary, Chorus",
      "album": "Welcome",
      "duration": 279,
      "url": "/audio/nostalgic_125.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_126",
      "title": "You're My Love",
      "artist": "Shaan, Shweta Pandit, Suzi Q, Earl Edgar, Sajid-Wajid, Shabbir Ahmed",
      "album": "Partner",
      "duration": 277,
      "url": "/audio/nostalgic_126.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_127",
      "title": "Ypd Title Track (Rdb Version) Part 1",
      "artist": "Sonu Nigam, Nindy Kaur",
      "album": "Yamla Pagla Deewana",
      "duration": 272,
      "url": "/audio/nostalgic_127.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_128",
      "title": "Yun Hi Chala Chal",
      "artist": "Udit Narayan, Hariharan, Kailash Kher",
      "album": "Swades",
      "duration": 447,
      "url": "/audio/nostalgic_128.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_129",
      "title": "Zara Sa",
      "artist": "Pritam, KK, Sayeed Quadri",
      "album": "Jannat",
      "duration": 303,
      "url": "/audio/nostalgic_129.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_130",
      "title": "Zindagi Kuch Toh Bata (Reprise)",
      "artist": "Pritam, Jubin Nautiyal, Neelesh Misra",
      "album": "Bajrangi Bhaijaan",
      "duration": 258,
      "url": "/audio/nostalgic_130.mp3",
      "category": "nostalgic"
    },
    {
      "id": "nostalgic_131",
      "title": "Zoobi Doobi",
      "artist": "Sonu Nigam, Shreya Ghoshal",
      "album": "Best Of Shreya Ghoshal",
      "duration": 246,
      "url": "/audio/nostalgic_131.mp3",
      "category": "nostalgic"
    }
  ],
  "rajasthani": [
    {
      "id": "rajasthani_1",
      "title": "Aur Rang De",
      "artist": "Seema Mishra",
      "album": "Balam Chhoto So (Rajasthani Dance Songs)",
      "duration": 417,
      "url": "/audio/rajasthani_001.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_2",
      "title": "Baawre",
      "artist": "Mame Khan, Shankar Mahadevan, Loy Mendonsa, Shankar-Ehsaan-Loy, Javed Akhtar",
      "album": "Luck By Chance",
      "duration": 308,
      "url": "/audio/rajasthani_002.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_3",
      "title": "Baisaa",
      "artist": "Gazi Khan Barna",
      "album": "Parched",
      "duration": 246,
      "url": "/audio/rajasthani_003.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_4",
      "title": "Banni",
      "artist": "Kapil Jangir, Komal Amrawat",
      "album": "Kapil's - EP",
      "duration": 162,
      "url": "/audio/rajasthani_004.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_5",
      "title": "Boli Pyari Lage",
      "artist": "Kheta Khan, Kailash Jangid",
      "album": "Boli Pyari Lage",
      "duration": 295,
      "url": "/audio/rajasthani_005.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_6",
      "title": "Chaudhary - Studio",
      "artist": "Mame Khan, Amit Trivedi, Shellee",
      "album": "Coke Studio S2",
      "duration": 420,
      "url": "/audio/rajasthani_006.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_7",
      "title": "Chirmi",
      "artist": "Seema Mishra",
      "album": "Ghoomar, Vol. 3",
      "duration": 401,
      "url": "/audio/rajasthani_007.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_8",
      "title": "Ghani Khamma 2",
      "artist": "Anchal Bhatt, SP Jodha, Shyamli Thakur",
      "album": "Ghani Khamma 2",
      "duration": 294,
      "url": "/audio/rajasthani_008.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_9",
      "title": "Ghani Khamma",
      "artist": "Anchal Bhatt",
      "album": "Ghani Khamma",
      "duration": 290,
      "url": "/audio/rajasthani_009.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_10",
      "title": "Ghoomar",
      "artist": "Shreya Ghoshal, Swaroop Khan, A.M. Turaz, Sanjay Leela Bhansali",
      "album": "Ghoomar (From \"Padmaavat\")",
      "duration": 282,
      "url": "/audio/rajasthani_010.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_11",
      "title": "Hichki",
      "artist": "Seema Mishra",
      "album": "Ghoomar, Vol. 3",
      "duration": 384,
      "url": "/audio/rajasthani_011.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_12",
      "title": "Jalalo Bilalo",
      "artist": "Raahein Gharana, Anwar Khan, Husain Khan, Aslam Khan",
      "album": "Jalalo Bilalo",
      "duration": 318,
      "url": "/audio/rajasthani_012.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_13",
      "title": "Kajaliyo",
      "artist": "Kapil Jangir, Aakanksha Sharma",
      "album": "Kajaliyo",
      "duration": 204,
      "url": "/audio/rajasthani_013.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_14",
      "title": "Kalyo Kood Padyo Mela Me",
      "artist": "Seema Mishra",
      "album": "Chudi Chamke (Rajasthani Folk Songs)",
      "duration": 413,
      "url": "/audio/rajasthani_014.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_15",
      "title": "Kesariya Balam",
      "artist": "Salim–Sulaiman",
      "album": "Dor",
      "duration": 273,
      "url": "/audio/rajasthani_015.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_16",
      "title": "Laal Peeli Ankhiyan",
      "artist": "Mame Khan",
      "album": "Laal Peeli Ankhiyan",
      "duration": 287,
      "url": "/audio/rajasthani_016.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_17",
      "title": "Moriya",
      "artist": "Kheta Khan",
      "album": "Unknown Album",
      "duration": 312,
      "url": "/audio/rajasthani_017.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_18",
      "title": "Naina Ra Lobhi",
      "artist": "Seema Mishra",
      "album": "Ghoomar, Vol. 2",
      "duration": 442,
      "url": "/audio/rajasthani_018.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_19",
      "title": "Padharo Mhare Desh Ghoomar",
      "artist": "Mame Khan",
      "album": "Padharo Mhare Desh Ghoomar",
      "duration": 154,
      "url": "/audio/rajasthani_019.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_20",
      "title": "Peeli Lugdi",
      "artist": "Rekha Rao, Parmeshwar Premi",
      "album": "Gori Nakhra Wali",
      "duration": 360,
      "url": "/audio/rajasthani_020.mp3",
      "category": "rajasthani"
    },
    {
      "id": "rajasthani_21",
      "title": "Tuti Bajuda Re Loom",
      "artist": "Seema Mishra",
      "album": "Ghoomar, Vol. 2",
      "duration": 414,
      "url": "/audio/rajasthani_021.mp3",
      "category": "rajasthani"
    }
  ],
  "english": [
    {
      "id": "eng_1",
      "title": "Ashes in the Wind",
      "artist": "Shana Veyra",
      "album": "Unknown Album",
      "duration": 267,
      "url": "/audio/eng_001.mp3",
      "category": "english"
    },
    {
      "id": "eng_2",
      "title": "Attention",
      "artist": "Charlie Puth",
      "album": "Voicenotes",
      "duration": 208,
      "url": "/audio/eng_002.mp3",
      "category": "english"
    },
    {
      "id": "eng_3",
      "title": "Avalon",
      "artist": "Alan Walker, Anne Gudrun",
      "album": "Avalon",
      "duration": 136,
      "url": "/audio/eng_003.mp3",
      "category": "english"
    },
    {
      "id": "eng_4",
      "title": "Baby",
      "artist": "Justin Bieber, Ludacris",
      "album": "Baby",
      "duration": 214,
      "url": "/audio/eng_004.mp3",
      "category": "english"
    },
    {
      "id": "eng_5",
      "title": "Back One Day (Outro Song)",
      "artist": "TheFatRat, NEFFEX",
      "album": "Back One Day (Outro Song)",
      "duration": 231,
      "url": "/audio/eng_005.mp3",
      "category": "english"
    },
    {
      "id": "eng_6",
      "title": "Beautiful Nightmare",
      "artist": "Alan Walker, bludnymph",
      "album": "Neon Nights",
      "duration": 167,
      "url": "/audio/eng_006.mp3",
      "category": "english"
    },
    {
      "id": "eng_7",
      "title": "Believer",
      "artist": "Imagine Dragons",
      "album": "Evolve",
      "duration": 204,
      "url": "/audio/eng_007.mp3",
      "category": "english"
    },
    {
      "id": "eng_8",
      "title": "Blinding Lights",
      "artist": "The Weeknd",
      "album": "After Hours",
      "duration": 200,
      "url": "/audio/eng_008.mp3",
      "category": "english"
    },
    {
      "id": "eng_9",
      "title": "Born Between Extremes",
      "artist": "Shana Veyra",
      "album": "Unknown Album",
      "duration": 239,
      "url": "/audio/eng_009.mp3",
      "category": "english"
    },
    {
      "id": "eng_10",
      "title": "Cheap Thrills",
      "artist": "Sia",
      "album": "This Is Acting (Deluxe Version)",
      "duration": 211,
      "url": "/audio/eng_010.mp3",
      "category": "english"
    },
    {
      "id": "eng_11",
      "title": "Cheri Cheri Lady",
      "artist": "Modern Talking",
      "album": "Let's Talk About Love",
      "duration": 226,
      "url": "/audio/eng_011.mp3",
      "category": "english"
    },
    {
      "id": "eng_12",
      "title": "Close To The Sun",
      "artist": "TheFatRat, Anjulie",
      "album": "Unity - 10th Anniversary Compilation",
      "duration": 192,
      "url": "/audio/eng_012.mp3",
      "category": "english"
    },
    {
      "id": "eng_13",
      "title": "Con Calma",
      "artist": "Daddy Yankee, Snow",
      "album": "Con Calma",
      "duration": 193,
      "url": "/audio/eng_013.mp3",
      "category": "english"
    },
    {
      "id": "eng_14",
      "title": "Conquer Yourself",
      "artist": "Bob Dominator",
      "album": "Conquer Yourself",
      "duration": 158,
      "url": "/audio/eng_014.mp3",
      "category": "english"
    },
    {
      "id": "eng_15",
      "title": "Dandelions",
      "artist": "Ruth B.",
      "album": "Safe Haven",
      "duration": 233,
      "url": "/audio/eng_015.mp3",
      "category": "english"
    },
    {
      "id": "eng_16",
      "title": "Demons",
      "artist": "Imagine Dragons",
      "album": "Night Visions",
      "duration": 177,
      "url": "/audio/eng_016.mp3",
      "category": "english"
    },
    {
      "id": "eng_17",
      "title": "Devil In Disguise",
      "artist": "RAGS AND RICHES",
      "album": "Devil In Disguise",
      "duration": 136,
      "url": "/audio/eng_017.mp3",
      "category": "english"
    },
    {
      "id": "eng_18",
      "title": "Diamond Heart",
      "artist": "Alan Walker, Sophia Somajo",
      "album": "Different World",
      "duration": 240,
      "url": "/audio/eng_018.mp3",
      "category": "english"
    },
    {
      "id": "eng_19",
      "title": "Die For You",
      "artist": "The Weeknd",
      "album": "Starboy",
      "duration": 260,
      "url": "/audio/eng_019.mp3",
      "category": "english"
    },
    {
      "id": "eng_20",
      "title": "Die With A Smile",
      "artist": "Lady Gaga, Bruno Mars",
      "album": "Die With A Smile",
      "duration": 251,
      "url": "/audio/eng_020.mp3",
      "category": "english"
    },
    {
      "id": "eng_21",
      "title": "Different World (feat. CORSAK)",
      "artist": "Alan Walker, K-391, Sofia Carson, CORSAK",
      "album": "Different World",
      "duration": 202,
      "url": "/audio/eng_021.mp3",
      "category": "english"
    },
    {
      "id": "eng_22",
      "title": "Dracula",
      "artist": "Tame Impala",
      "album": "Dracula",
      "duration": 205,
      "url": "/audio/eng_022.mp3",
      "category": "english"
    },
    {
      "id": "eng_23",
      "title": "FREAKED OUT",
      "artist": "Fat Papi, prodshushy",
      "album": "FREAKED OUT",
      "duration": 158,
      "url": "/audio/eng_023.mp3",
      "category": "english"
    },
    {
      "id": "eng_24",
      "title": "Fairytale",
      "artist": "Alexander Rybak",
      "album": "Fairytale",
      "duration": 182,
      "url": "/audio/eng_024.mp3",
      "category": "english"
    },
    {
      "id": "eng_25",
      "title": "Fly Away",
      "artist": "TheFatRat, Anjulie",
      "album": "Fly Away",
      "duration": 194,
      "url": "/audio/eng_025.mp3",
      "category": "english"
    },
    {
      "id": "eng_26",
      "title": "Forest Drums",
      "artist": "Shana Veyra",
      "album": "Unknown Album",
      "duration": 111,
      "url": "/audio/eng_026.mp3",
      "category": "english"
    },
    {
      "id": "eng_27",
      "title": "Free Me",
      "artist": "NEFFEX",
      "album": "Free Me",
      "duration": 137,
      "url": "/audio/eng_027.mp3",
      "category": "english"
    },
    {
      "id": "eng_28",
      "title": "Gangsta's Paradise",
      "artist": "Coolio, L.V.",
      "album": "Gangsta's Paradise",
      "duration": 240,
      "url": "/audio/eng_028.mp3",
      "category": "english"
    },
    {
      "id": "eng_29",
      "title": "Ghost Light",
      "artist": "TheFatRat, EVERGLOW",
      "album": "Ghost Light",
      "duration": 191,
      "url": "/audio/eng_029.mp3",
      "category": "english"
    },
    {
      "id": "eng_30",
      "title": "Give Myself To You",
      "artist": "TheFatRat, Laura Brehm",
      "album": "Give Myself To You",
      "duration": 170,
      "url": "/audio/eng_030.mp3",
      "category": "english"
    },
    {
      "id": "eng_31",
      "title": "Harleys In Hawaii",
      "artist": "Katy Perry",
      "album": "Smile",
      "duration": 185,
      "url": "/audio/eng_031.mp3",
      "category": "english"
    },
    {
      "id": "eng_32",
      "title": "Headlights (feat. KIDDO)",
      "artist": "Alok, Alan Walker, KIDDO",
      "album": "Headlights (feat. KIDDO)",
      "duration": 158,
      "url": "/audio/eng_032.mp3",
      "category": "english"
    },
    {
      "id": "eng_33",
      "title": "Heat Waves",
      "artist": "Glass Animals",
      "album": "Dreamland",
      "duration": 238,
      "url": "/audio/eng_033.mp3",
      "category": "english"
    },
    {
      "id": "eng_34",
      "title": "Held by the Dark",
      "artist": "Shana Veyra",
      "album": "Unknown Album",
      "duration": 220,
      "url": "/audio/eng_034.mp3",
      "category": "english"
    },
    {
      "id": "eng_35",
      "title": "Hero",
      "artist": "Alan Walker, Sasha Alex Sloan",
      "album": "Hero",
      "duration": 175,
      "url": "/audio/eng_035.mp3",
      "category": "english"
    },
    {
      "id": "eng_36",
      "title": "I Don't Give a Fuck (What You Think about Me)",
      "artist": "Cole Mercer",
      "album": "Unknown Album",
      "duration": 167,
      "url": "/audio/eng_036.mp3",
      "category": "english"
    },
    {
      "id": "eng_37",
      "title": "I Don't Wanna Go",
      "artist": "Alan Walker, Julie Bergan",
      "album": "Different World",
      "duration": 161,
      "url": "/audio/eng_037.mp3",
      "category": "english"
    },
    {
      "id": "eng_38",
      "title": "In The End",
      "artist": "Tommee Profitt, Fleurie, Jung Youth",
      "album": "In The End",
      "duration": 234,
      "url": "/audio/eng_038.mp3",
      "category": "english"
    },
    {
      "id": "eng_39",
      "title": "Kupala Fire",
      "artist": "Shana Veyra",
      "album": "Unknown Album",
      "duration": 228,
      "url": "/audio/eng_039.mp3",
      "category": "english"
    },
    {
      "id": "eng_40",
      "title": "Let Me Down Slowly",
      "artist": "Alec Benjamin",
      "album": "Narrated For You",
      "duration": 169,
      "url": "/audio/eng_040.mp3",
      "category": "english"
    },
    {
      "id": "eng_41",
      "title": "Lily",
      "artist": "Alan Walker, K-391, Emelie Hollow",
      "album": "Different World",
      "duration": 195,
      "url": "/audio/eng_041.mp3",
      "category": "english"
    },
    {
      "id": "eng_42",
      "title": "Live Fast - PUBGM",
      "artist": "Alan Walker, A$AP Rocky, Kameron",
      "album": "Live Fast (PUBGM)",
      "duration": 225,
      "url": "/audio/eng_042.mp3",
      "category": "english"
    },
    {
      "id": "eng_43",
      "title": "Lonely (feat. ISÁK & Omar Noir)",
      "artist": "Alan Walker, Steve Aoki, ISÁK, Omar Noir",
      "album": "Different World",
      "duration": 216,
      "url": "/audio/eng_043.mp3",
      "category": "english"
    },
    {
      "id": "eng_44",
      "title": "Loser",
      "artist": "Tame Impala",
      "album": "Loser",
      "duration": 223,
      "url": "/audio/eng_044.mp3",
      "category": "english"
    },
    {
      "id": "eng_45",
      "title": "Lost Control",
      "artist": "Alan Walker, Sorana",
      "album": "Different World",
      "duration": 222,
      "url": "/audio/eng_045.mp3",
      "category": "english"
    },
    {
      "id": "eng_46",
      "title": "Mockingbird",
      "artist": "Eminem",
      "album": "Encore (Deluxe Version)",
      "duration": 250,
      "url": "/audio/eng_046.mp3",
      "category": "english"
    },
    {
      "id": "eng_47",
      "title": "Morrígan – When the Raven speaks my Name",
      "artist": "Shana Veyra",
      "album": "Unknown Album",
      "duration": 213,
      "url": "/audio/eng_047.mp3",
      "category": "english"
    },
    {
      "id": "eng_48",
      "title": "Myself & I",
      "artist": "TheFatRat, RIELL",
      "album": "Myself & I",
      "duration": 203,
      "url": "/audio/eng_048.mp3",
      "category": "english"
    },
    {
      "id": "eng_49",
      "title": "Neon Mirage",
      "artist": "Zayle Manroe",
      "album": "Unknown Album",
      "duration": 191,
      "url": "/audio/eng_049.mp3",
      "category": "english"
    },
    {
      "id": "eng_50",
      "title": "Night Changes",
      "artist": "One Direction",
      "album": "FOUR (Deluxe)",
      "duration": 226,
      "url": "/audio/eng_050.mp3",
      "category": "english"
    },
    {
      "id": "eng_51",
      "title": "Old Town Road",
      "artist": "Lil Nas X",
      "album": "7",
      "duration": 113,
      "url": "/audio/eng_051.mp3",
      "category": "english"
    },
    {
      "id": "eng_52",
      "title": "On The Floor",
      "artist": "Jennifer Lopez, Pitbull",
      "album": "Love?",
      "duration": 284,
      "url": "/audio/eng_052.mp3",
      "category": "english"
    },
    {
      "id": "eng_53",
      "title": "Paradise",
      "artist": "Alan Walker, K-391, Boy In Space",
      "album": "World Of Walker",
      "duration": 183,
      "url": "/audio/eng_053.mp3",
      "category": "english"
    },
    {
      "id": "eng_54",
      "title": "Party Monster",
      "artist": "The Weeknd",
      "album": "Starboy",
      "duration": 249,
      "url": "/audio/eng_054.mp3",
      "category": "english"
    },
    {
      "id": "eng_55",
      "title": "Popular (with Playboi Carti & Madonna)",
      "artist": "The Weeknd, Playboi Carti, Madonna",
      "album": "Popular (Music from the HBO Original Series)",
      "duration": 215,
      "url": "/audio/eng_055.mp3",
      "category": "english"
    },
    {
      "id": "eng_56",
      "title": "Rescue Me",
      "artist": "OneRepublic",
      "album": "Rescue Me",
      "duration": 159,
      "url": "/audio/eng_056.mp3",
      "category": "english"
    },
    {
      "id": "eng_57",
      "title": "Ride It",
      "artist": "Jay Sean",
      "album": "My Own Way",
      "duration": 190,
      "url": "/audio/eng_057.mp3",
      "category": "english"
    },
    {
      "id": "eng_58",
      "title": "Rise Up",
      "artist": "TheFatRat",
      "album": "Rise Up",
      "duration": 169,
      "url": "/audio/eng_058.mp3",
      "category": "english"
    },
    {
      "id": "eng_59",
      "title": "Safari",
      "artist": "Serena",
      "album": "Safari",
      "duration": 189,
      "url": "/audio/eng_059.mp3",
      "category": "english"
    },
    {
      "id": "eng_60",
      "title": "Save Your Tears",
      "artist": "The Weeknd",
      "album": "After Hours",
      "duration": 215,
      "url": "/audio/eng_060.mp3",
      "category": "english"
    },
    {
      "id": "eng_61",
      "title": "Señorita",
      "artist": "Shawn Mendes, Camila Cabello",
      "album": "Señorita",
      "duration": 191,
      "url": "/audio/eng_061.mp3",
      "category": "english"
    },
    {
      "id": "eng_62",
      "title": "Skyfall",
      "artist": "Adele",
      "album": "Skyfall",
      "duration": 286,
      "url": "/audio/eng_062.mp3",
      "category": "english"
    },
    {
      "id": "eng_63",
      "title": "Sorry",
      "artist": "Alan Walker, ISÁK",
      "album": "Sorry (feat. ISÁK)",
      "duration": 165,
      "url": "/audio/eng_063.mp3",
      "category": "english"
    },
    {
      "id": "eng_64",
      "title": "Stan",
      "artist": "Eminem, Dido",
      "album": "The Marshall Mathers LP",
      "duration": 404,
      "url": "/audio/eng_064.mp3",
      "category": "english"
    },
    {
      "id": "eng_65",
      "title": "Starboy",
      "artist": "The Weeknd, Daft Punk",
      "album": "Starboy",
      "duration": 230,
      "url": "/audio/eng_065.mp3",
      "category": "english"
    },
    {
      "id": "eng_66",
      "title": "Sugar & Brownies",
      "artist": "DHARIA",
      "album": "Sugar & Brownies",
      "duration": 197,
      "url": "/audio/eng_066.mp3",
      "category": "english"
    },
    {
      "id": "eng_67",
      "title": "São Paulo (feat. Anitta)",
      "artist": "The Weeknd, Anitta",
      "album": "Hurry Up Tomorrow",
      "duration": 301,
      "url": "/audio/eng_067.mp3",
      "category": "english"
    },
    {
      "id": "eng_68",
      "title": "The Beacon Chain",
      "artist": "Shana Veyra",
      "album": "Unknown Album",
      "duration": 278,
      "url": "/audio/eng_068.mp3",
      "category": "english"
    },
    {
      "id": "eng_69",
      "title": "The Deer Path - Jelení stezka",
      "artist": "Shana Veyra",
      "album": "Unknown Album",
      "duration": 192,
      "url": "/audio/eng_069.mp3",
      "category": "english"
    },
    {
      "id": "eng_70",
      "title": "The Drum",
      "artist": "Alan Walker",
      "album": "The Drum",
      "duration": 189,
      "url": "/audio/eng_070.mp3",
      "category": "english"
    },
    {
      "id": "eng_71",
      "title": "The Forest Remembers",
      "artist": "Shana Veyra",
      "album": "Unknown Album",
      "duration": 249,
      "url": "/audio/eng_071.mp3",
      "category": "english"
    },
    {
      "id": "eng_72",
      "title": "Thunder",
      "artist": "Imagine Dragons",
      "album": "Evolve",
      "duration": 187,
      "url": "/audio/eng_072.mp3",
      "category": "english"
    },
    {
      "id": "eng_73",
      "title": "Unity",
      "artist": "TheFatRat",
      "album": "Unity",
      "duration": 249,
      "url": "/audio/eng_073.mp3",
      "category": "english"
    },
    {
      "id": "eng_74",
      "title": "Unstoppable",
      "artist": "Sia",
      "album": "This Is Acting",
      "duration": 217,
      "url": "/audio/eng_074.mp3",
      "category": "english"
    },
    {
      "id": "eng_75",
      "title": "VALHALLA CALLING",
      "artist": "Ragal Ironbull",
      "album": "VALHALLA CALLING",
      "duration": 195,
      "url": "/audio/eng_075.mp3",
      "category": "english"
    },
    {
      "id": "eng_76",
      "title": "Venom - Music From The Motion Picture",
      "artist": "Eminem",
      "album": "Venom (Music From The Motion Picture)",
      "duration": 269,
      "url": "/audio/eng_076.mp3",
      "category": "english"
    },
    {
      "id": "eng_77",
      "title": "Way down We Go",
      "artist": "KALEO",
      "album": "A/B",
      "duration": 213,
      "url": "/audio/eng_077.mp3",
      "category": "english"
    },
    {
      "id": "eng_78",
      "title": "You Problem",
      "artist": "Dust & Harmony",
      "album": "Unknown Album",
      "duration": 234,
      "url": "/audio/eng_078.mp3",
      "category": "english"
    },
    {
      "id": "eng_79",
      "title": "Матушка",
      "artist": "Татьяна Куртукова",
      "album": "Матушка",
      "duration": 173,
      "url": "/audio/eng_079.mp3",
      "category": "english"
    }
  ],
  "hitlist": [],
  "punjabi": [
    {
      "id": "punjabi_1",
      "title": "12 Saal",
      "artist": "Bilal Saeed",
      "album": "Twelve By Bilal Saeed",
      "duration": 204,
      "url": "/audio/punjabi_001.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_2",
      "title": "3 Peg",
      "artist": "Sharry Mann, Raviraj",
      "album": "3 Peg",
      "duration": 204,
      "url": "/audio/punjabi_002.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_3",
      "title": "5 Taara",
      "artist": "Diljit Dosanjh",
      "album": "Top Hits-Baisakhi Special",
      "duration": 178,
      "url": "/audio/punjabi_003.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_4",
      "title": "8 Parche",
      "artist": "Baani Sandhu, Gur Sidhu, Jassi Lokha",
      "album": "8 Parche",
      "duration": 210,
      "url": "/audio/punjabi_004.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_5",
      "title": "Aaja We Mahiya",
      "artist": "Imran Khan",
      "album": "Unforgettable",
      "duration": 232,
      "url": "/audio/punjabi_005.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_6",
      "title": "Adi Adi Raat",
      "artist": "Bilal Saeed",
      "album": "Twelve By Bilal Saeed",
      "duration": 247,
      "url": "/audio/punjabi_006.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_7",
      "title": "All Black",
      "artist": "Raftaar, Sukh-E Muzical Doctorz, Jaani",
      "album": "All Black",
      "duration": 218,
      "url": "/audio/punjabi_007.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_8",
      "title": "Amplifier",
      "artist": "Imran Khan",
      "album": "Unforgettable",
      "duration": 232,
      "url": "/audio/punjabi_008.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_9",
      "title": "Angreji Beat",
      "artist": "Yo Yo Honey Singh, Gippy Grewal",
      "album": "International Villager",
      "duration": 217,
      "url": "/audio/punjabi_009.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_10",
      "title": "Badnam ( Orignal Version )",
      "artist": "Mankirt Aulakh, DJ Flow",
      "album": "Badnam (original Version)",
      "duration": 203,
      "url": "/audio/punjabi_010.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_11",
      "title": "Ban Ja Rani",
      "artist": "Guru Randhawa, Rajat Nagpal, Haji Springer",
      "album": "Ban Ja Rani (From \"Tumhari Sulu\")",
      "duration": 225,
      "url": "/audio/punjabi_011.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_12",
      "title": "Bapu Zimidar",
      "artist": "Jassie Gill, Jatinder Shah",
      "album": "Replay",
      "duration": 180,
      "url": "/audio/punjabi_012.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_13",
      "title": "Bewafa",
      "artist": "Imran Khan",
      "album": "Unforgettable",
      "duration": 224,
      "url": "/audio/punjabi_013.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_14",
      "title": "Billian Billian",
      "artist": "Guri",
      "album": "Billian Billian",
      "duration": 177,
      "url": "/audio/punjabi_014.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_15",
      "title": "Billo",
      "artist": "J Star",
      "album": "Billo",
      "duration": 260,
      "url": "/audio/punjabi_015.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_16",
      "title": "Birthday Bash",
      "artist": "Yo Yo Honey Singh, Alfaaz",
      "album": "Super Hits Of Yo Yo Honey Singh",
      "duration": 251,
      "url": "/audio/punjabi_016.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_17",
      "title": "Blue Eyes",
      "artist": "Yo Yo Honey Singh",
      "album": "Blue Eyes",
      "duration": 220,
      "url": "/audio/punjabi_017.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_18",
      "title": "Boss",
      "artist": "Jass Manak",
      "album": "Boss",
      "duration": 162,
      "url": "/audio/punjabi_018.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_19",
      "title": "Breakup Party",
      "artist": "Leo Grewal, Yo Yo Honey Singh",
      "album": "Breakup Party",
      "duration": 282,
      "url": "/audio/punjabi_019.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_20",
      "title": "Bring Me Back",
      "artist": "Yo Yo Honey Singh",
      "album": "Spoken Word",
      "duration": 246,
      "url": "/audio/punjabi_020.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_21",
      "title": "Brown Rang",
      "artist": "Yo Yo Honey Singh",
      "album": "International Villager",
      "duration": 186,
      "url": "/audio/punjabi_021.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_22",
      "title": "Butterfly",
      "artist": "Jass Manak",
      "album": "No Competition",
      "duration": 151,
      "url": "/audio/punjabi_022.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_23",
      "title": "Call Aundi",
      "artist": "Yo Yo Honey Singh",
      "album": "Zorawar",
      "duration": 216,
      "url": "/audio/punjabi_023.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_24",
      "title": "Chaar Botal Vodka",
      "artist": "Yo Yo Honey Singh",
      "album": "Yo Yo Honey Singh Is Back",
      "duration": 225,
      "url": "/audio/punjabi_024.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_25",
      "title": "Chaar Din",
      "artist": "Sandeep Brar, Kulwinder Billa, Abbi Fatehgarhia",
      "album": "Chaar Din",
      "duration": 316,
      "url": "/audio/punjabi_025.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_26",
      "title": "Chal Mere Ghar",
      "artist": "Yo Yo Honey Singh",
      "album": "Desi Kalakaar",
      "duration": 153,
      "url": "/audio/punjabi_026.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_27",
      "title": "Chaska",
      "artist": "Raja Baath, Yo Yo Honey Singh",
      "album": "The Crown",
      "duration": 183,
      "url": "/audio/punjabi_027.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_28",
      "title": "Daang",
      "artist": "Mankirt Aulakh",
      "album": "Mankirt Aulakh - Best Hits",
      "duration": 228,
      "url": "/audio/punjabi_028.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_29",
      "title": "Daaru Party",
      "artist": "Millind Gaba",
      "album": "Daaru Party - Single",
      "duration": 208,
      "url": "/audio/punjabi_029.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_30",
      "title": "Daftar Ki Girl",
      "artist": "Yo Yo Honey Singh",
      "album": "Desi Kalakaar",
      "duration": 187,
      "url": "/audio/punjabi_030.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_31",
      "title": "Daru Badnaam",
      "artist": "Param Singh, Kamal Kahlon, Pratik Studio",
      "album": "Daru Badnaam",
      "duration": 185,
      "url": "/audio/punjabi_031.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_32",
      "title": "Desi Kalakaar",
      "artist": "Yo Yo Honey Singh",
      "album": "Desi Kalakaar",
      "duration": 253,
      "url": "/audio/punjabi_032.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_33",
      "title": "Dheere Dheere",
      "artist": "Yo Yo Honey Singh",
      "album": "Dheere Dheere",
      "duration": 212,
      "url": "/audio/punjabi_033.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_34",
      "title": "Dil Lutiya (feat. Apache Indian)",
      "artist": "Jazzy B, Apache Indian",
      "album": "Romeo",
      "duration": 188,
      "url": "/audio/punjabi_034.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_35",
      "title": "Do You Know",
      "artist": "Diljit Dosanjh",
      "album": "In Love With Diljit Dosanjh",
      "duration": 212,
      "url": "/audio/punjabi_035.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_36",
      "title": "Dollar",
      "artist": "Sidhu Moose Wala, Byg Byrd",
      "album": "Dollar (From \"Dakuaan Da Munda\")",
      "duration": 157,
      "url": "/audio/punjabi_036.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_37",
      "title": "Dooriyan (Female)",
      "artist": "Tanya, Guri",
      "album": "Dooriyan (Female Version)",
      "duration": 225,
      "url": "/audio/punjabi_037.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_38",
      "title": "Dope Shope",
      "artist": "Yo Yo Honey Singh, Deep Money",
      "album": "International Villager",
      "duration": 194,
      "url": "/audio/punjabi_038.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_39",
      "title": "Excuses",
      "artist": "AP Dhillon, Gurinder Gill, Intense",
      "album": "Excuses",
      "duration": 176,
      "url": "/audio/punjabi_039.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_40",
      "title": "Gangland",
      "artist": "Mankirt Aulakh, DJ Flow",
      "album": "Gangland",
      "duration": 168,
      "url": "/audio/punjabi_040.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_41",
      "title": "Glassy",
      "artist": "Yo Yo Honey Singh, Ashok Mastie, Channi Rakhala, Bonafide, Koncept",
      "album": "Glassy",
      "duration": 222,
      "url": "/audio/punjabi_041.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_42",
      "title": "Goliya",
      "artist": "Diljit Dosanjh, Yo Yo Honey Singh",
      "album": "International Villager",
      "duration": 197,
      "url": "/audio/punjabi_042.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_43",
      "title": "Half Window Down",
      "artist": "Ikka",
      "album": "Half Window Down",
      "duration": 215,
      "url": "/audio/punjabi_043.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_44",
      "title": "Haye Mera Dil",
      "artist": "Alfaaz, Yo Yo Honey Singh",
      "album": "Boy Next Door",
      "duration": 203,
      "url": "/audio/punjabi_044.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_45",
      "title": "High Heels",
      "artist": "Jaz Dhami, Yo Yo Honey Singh",
      "album": "High Heels",
      "duration": 297,
      "url": "/audio/punjabi_045.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_46",
      "title": "Hostel",
      "artist": "Sharry Mann",
      "album": "Hostel",
      "duration": 323,
      "url": "/audio/punjabi_046.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_47",
      "title": "Hulara",
      "artist": "J Star",
      "album": "Hulara",
      "duration": 214,
      "url": "/audio/punjabi_047.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_48",
      "title": "Hum Jaha Jaake Khade Ho",
      "artist": "Suraj Jagan",
      "album": "Unknown Album",
      "duration": 221,
      "url": "/audio/punjabi_048.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_49",
      "title": "Insane",
      "artist": "Sukh-E Muzical Doctorz",
      "album": "Insane",
      "duration": 155,
      "url": "/audio/punjabi_049.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_50",
      "title": "Ishare Tere",
      "artist": "Guru Randhawa, Dhvani Bhanushali",
      "album": "Ishare Tere",
      "duration": 189,
      "url": "/audio/punjabi_050.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_51",
      "title": "Jaguar",
      "artist": "Sukh-E Muzical Doctorz",
      "album": "Jaguar",
      "duration": 167,
      "url": "/audio/punjabi_051.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_52",
      "title": "Jatt Da Blood",
      "artist": "Mankirt Aulakh, Goldboy",
      "album": "Jatt Da Blood",
      "duration": 170,
      "url": "/audio/punjabi_052.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_53",
      "title": "Jugadu",
      "artist": "Amar Mohile",
      "album": "Shakal Pe Mat Ja",
      "duration": 74,
      "url": "/audio/punjabi_053.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_54",
      "title": "Kangna",
      "artist": "Dr Zeus, Master Rakesh, Shortie, Deepti",
      "album": "Unda Da Influence",
      "duration": 210,
      "url": "/audio/punjabi_054.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_55",
      "title": "Khaab",
      "artist": "Akhil",
      "album": "Khaab",
      "duration": 201,
      "url": "/audio/punjabi_055.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_56",
      "title": "Khair Mangdi",
      "artist": "Bilal Saeed",
      "album": "Twelve By Bilal Saeed",
      "duration": 177,
      "url": "/audio/punjabi_056.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_57",
      "title": "Khayal",
      "artist": "Mankirt Aulakh",
      "album": "Khayal",
      "duration": 221,
      "url": "/audio/punjabi_057.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_58",
      "title": "Label Black",
      "artist": "Gupz Sehra",
      "album": "Label Black",
      "duration": 175,
      "url": "/audio/punjabi_058.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_59",
      "title": "Laden",
      "artist": "Jassie Gill",
      "album": "Replay",
      "duration": 192,
      "url": "/audio/punjabi_059.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_60",
      "title": "Laembadgini",
      "artist": "Diljit Dosanjh, Jatinder Shah",
      "album": "Laembadgini",
      "duration": 186,
      "url": "/audio/punjabi_060.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_61",
      "title": "Lak 28 Kudi Da",
      "artist": "Diljit Dosanjh, Yo Yo Honey Singh",
      "album": "The Lion Of Punjab",
      "duration": 211,
      "url": "/audio/punjabi_061.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_62",
      "title": "Le Chakk Main Aa Gya",
      "artist": "Parmish Verma",
      "album": "Le Chakk Main Aa Gya",
      "duration": 248,
      "url": "/audio/punjabi_062.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_63",
      "title": "Lehanga",
      "artist": "Jass Manak",
      "album": "Lehanga",
      "duration": 210,
      "url": "/audio/punjabi_063.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_64",
      "title": "Love Dose",
      "artist": "Yo Yo Honey Singh",
      "album": "Desi Kalakaar",
      "duration": 224,
      "url": "/audio/punjabi_064.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_65",
      "title": "Mahi Aaja",
      "artist": "Sasha, Manj Musik",
      "album": "Singh Is Bliing",
      "duration": 200,
      "url": "/audio/punjabi_065.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_66",
      "title": "Mast Kalander",
      "artist": "Mika Singh, Yo Yo Honey Singh",
      "album": "Mika Singh Is King",
      "duration": 270,
      "url": "/audio/punjabi_066.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_67",
      "title": "Meherbaan",
      "artist": "Mohit Chauhan",
      "album": "Unknown Album",
      "duration": 298,
      "url": "/audio/punjabi_067.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_68",
      "title": "Mil Gaya",
      "artist": "Salim Merchant",
      "album": "Unknown Album",
      "duration": 160,
      "url": "/audio/punjabi_068.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_69",
      "title": "Mill Lo Na",
      "artist": "Guri, Sukh-E Muzical Doctorz",
      "album": "Mill Lo Na",
      "duration": 169,
      "url": "/audio/punjabi_069.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_70",
      "title": "Na Ja",
      "artist": "Pav Dharia",
      "album": "Na Ja",
      "duration": 208,
      "url": "/audio/punjabi_070.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_71",
      "title": "No Competition",
      "artist": "DIVINE, Jass Manak",
      "album": "No Competition",
      "duration": 205,
      "url": "/audio/punjabi_071.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_72",
      "title": "One Bottle Down",
      "artist": "Yo Yo Honey Singh",
      "album": "One Bottle Down",
      "duration": 196,
      "url": "/audio/punjabi_072.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_73",
      "title": "One Thousand Miles",
      "artist": "Yo Yo Honey Singh",
      "album": "Desi Kalakaar",
      "duration": 283,
      "url": "/audio/punjabi_073.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_74",
      "title": "Pata Chalgea",
      "artist": "Imran Khan",
      "album": "Unforgettable",
      "duration": 230,
      "url": "/audio/punjabi_074.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_75",
      "title": "Patiala Peg",
      "artist": "Diljit Dosanjh",
      "album": "Patiala Peg",
      "duration": 188,
      "url": "/audio/punjabi_075.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_76",
      "title": "Patola (feat. Bohemia)",
      "artist": "Guru Randhawa, Bohemia",
      "album": "High Rated Gabru - Guru Randhawa",
      "duration": 208,
      "url": "/audio/punjabi_076.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_77",
      "title": "Prada",
      "artist": "Jass Manak",
      "album": "Prada",
      "duration": 182,
      "url": "/audio/punjabi_077.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_78",
      "title": "Proper Patola",
      "artist": "Badshah, Diljit Dosanjh, Aastha Gill",
      "album": "Namaste England",
      "duration": 178,
      "url": "/audio/punjabi_078.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_79",
      "title": "Raat Di Gedi",
      "artist": "Diljit Dosanjh",
      "album": "Chaar Ikke",
      "duration": 198,
      "url": "/audio/punjabi_079.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_80",
      "title": "Raat Jashan Di",
      "artist": "Yo Yo Honey Singh, Jasmine Sandlas",
      "album": "Zorawar",
      "duration": 295,
      "url": "/audio/punjabi_080.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_81",
      "title": "Sakhiyaan",
      "artist": "Maninder Buttar, Babbu, MixSingh",
      "album": "Sakhiyaan",
      "duration": 179,
      "url": "/audio/punjabi_081.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_82",
      "title": "Same Time Same Jagah (Chaar Din)",
      "artist": "Sandeep Brar, Kulwinder Billa",
      "album": "Same Time Same Jagah (Chaar Din)",
      "duration": 316,
      "url": "/audio/punjabi_082.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_83",
      "title": "Satisfya",
      "artist": "Imran Khan",
      "album": "Satisfya",
      "duration": 180,
      "url": "/audio/punjabi_083.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_84",
      "title": "Shakal Pe Mat Ja - Theme",
      "artist": "Amar Mohile",
      "album": "Unknown Album",
      "duration": 114,
      "url": "/audio/punjabi_084.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_85",
      "title": "Shakal Pe Mat Ja",
      "artist": "Gagan Sindhu, Alamgeer",
      "album": "Shakal Pe Mat Ja",
      "duration": 176,
      "url": "/audio/punjabi_085.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_86",
      "title": "Shoot Da Order",
      "artist": "Jass Manak, Jagpal Sandhu",
      "album": "Shoot Da Order (From \"Shooter\")",
      "duration": 217,
      "url": "/audio/punjabi_086.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_87",
      "title": "So High",
      "artist": "Sidhu Moose Wala",
      "album": "So High",
      "duration": 233,
      "url": "/audio/punjabi_087.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_88",
      "title": "Suit Punjabi",
      "artist": "Jass Manak",
      "album": "Suit Punjabi",
      "duration": 201,
      "url": "/audio/punjabi_088.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_89",
      "title": "Suit Suit",
      "artist": "Guru Randhawa, Arjun",
      "album": "Hits Of Guru Randhawa",
      "duration": 190,
      "url": "/audio/punjabi_089.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_90",
      "title": "Tera Mera Viah",
      "artist": "Jass Manak",
      "album": "Tera Mera Viah",
      "duration": 197,
      "url": "/audio/punjabi_090.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_91",
      "title": "This Party Getting Hot",
      "artist": "Jazzy B, Yo Yo Honey Singh",
      "album": "This Party Getting Hot",
      "duration": 211,
      "url": "/audio/punjabi_091.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_92",
      "title": "Vail",
      "artist": "Mankirt Aulakh, Nimrat Khaira, Shree Brar",
      "album": "Vail",
      "duration": 201,
      "url": "/audio/punjabi_092.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_93",
      "title": "Viah",
      "artist": "Jass Manak",
      "album": "Age 19",
      "duration": 162,
      "url": "/audio/punjabi_093.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_94",
      "title": "Wakhra Swag",
      "artist": "Navv Inder, Badshah",
      "album": "Wakhra Swag & Other Hits",
      "duration": 190,
      "url": "/audio/punjabi_094.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_95",
      "title": "Woofer (feat. Snoop Dogg, Zora Randhawa & Nargis Fakhri)",
      "artist": "Dr Zeus, Snoop Dogg, Zora Randhawa, Nargis Fakhri",
      "album": "Woofer (feat. Snoop Dogg, Zora Randhawa & Nargis Fakhri)",
      "duration": 172,
      "url": "/audio/punjabi_095.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_96",
      "title": "Yaar Anmule",
      "artist": "Sharry Mann",
      "album": "Yaar Anmulle",
      "duration": 276,
      "url": "/audio/punjabi_096.mp3",
      "category": "punjabi"
    },
    {
      "id": "punjabi_97",
      "title": "Yaar Berozgaar",
      "artist": "Preet Harpal, Jatinder Shah",
      "album": "Yaar Berozgaar",
      "duration": 229,
      "url": "/audio/punjabi_097.mp3",
      "category": "punjabi"
    }
  ],
  "haryanvi": [
    {
      "id": "haryanvi_1",
      "title": "52 Gaj Ka Daman",
      "artist": "Renuka Panwar, MJ",
      "album": "52 Gaj Ka Daman",
      "duration": 163,
      "url": "/audio/haryanvi_001.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_2",
      "title": "6 Raniyan",
      "artist": "Ndee Kundu",
      "album": "Unknown Album",
      "duration": 140,
      "url": "/audio/haryanvi_002.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_3",
      "title": "7 Janam",
      "artist": "Ndee Kundu",
      "album": "Unknown Album",
      "duration": 201,
      "url": "/audio/haryanvi_003.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_4",
      "title": "Baba Ji",
      "artist": "Vishu Puthi, Sapna Choudhary",
      "album": "Baba Ji",
      "duration": 198,
      "url": "/audio/haryanvi_004.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_5",
      "title": "Bahu Kale Ki",
      "artist": "Gajender Phogat, Anu Kadyan",
      "album": "Bahu Kale Ki",
      "duration": 228,
      "url": "/audio/haryanvi_005.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_6",
      "title": "Bairan",
      "artist": "Banjaare",
      "album": "Bairan",
      "duration": 150,
      "url": "/audio/haryanvi_006.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_7",
      "title": "Balam",
      "artist": "Ashu Twinkle",
      "album": "Unknown Album",
      "duration": 265,
      "url": "/audio/haryanvi_007.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_8",
      "title": "Barsaat",
      "artist": "Banjaare, Roni",
      "album": "Barsaat",
      "duration": 185,
      "url": "/audio/haryanvi_008.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_9",
      "title": "Bawli Tared",
      "artist": "Sumit Goswami, Vicky Kajla",
      "album": "Bawli Tared",
      "duration": 228,
      "url": "/audio/haryanvi_009.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_10",
      "title": "Bhaan Ka Rola",
      "artist": "Raju Punjabi",
      "album": "Bhaan Ka Rola",
      "duration": 197,
      "url": "/audio/haryanvi_010.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_11",
      "title": "Chand",
      "artist": "Masoom Sharma",
      "album": "Chand",
      "duration": 188,
      "url": "/audio/haryanvi_011.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_12",
      "title": "Chetak",
      "artist": "Raj Mawer",
      "album": "Chetak",
      "duration": 253,
      "url": "/audio/haryanvi_012.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_13",
      "title": "Chhori Jail Karawegi Re",
      "artist": "Vinu Gaur",
      "album": "Chhori Jail Karawegi Re",
      "duration": 257,
      "url": "/audio/haryanvi_013.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_14",
      "title": "Choudhar Jaat Ki",
      "artist": "Raju Punjabi",
      "album": "Choudhar Jaat Ki",
      "duration": 242,
      "url": "/audio/haryanvi_014.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_15",
      "title": "Churma (feat. Pranjal Dahiya)",
      "artist": "Ndee Kundu, Upasna Gahlot, Pranjal Dahiya",
      "album": "Churma (feat. Pranjal Dahiya)",
      "duration": 145,
      "url": "/audio/haryanvi_015.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_16",
      "title": "Curfew",
      "artist": "Sukh Deswal",
      "album": "Unknown Album",
      "duration": 174,
      "url": "/audio/haryanvi_016.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_17",
      "title": "Dabya Ni Karde",
      "artist": "Ndee Kundu, Bintu Pabra",
      "album": "Dabya Ni Karde",
      "duration": 219,
      "url": "/audio/haryanvi_017.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_18",
      "title": "Desi Desi Na Bolya Kar",
      "artist": "Raju Punjabi, KD DESIROCK, MD DesiRockstar",
      "album": "Desi Desi Na Bolya Kar",
      "duration": 216,
      "url": "/audio/haryanvi_018.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_19",
      "title": "Desi Haan Ji",
      "artist": "Ndee Kundu",
      "album": "Unknown Album",
      "duration": 260,
      "url": "/audio/haryanvi_019.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_20",
      "title": "Father Saab",
      "artist": "Khasa Aala Chahar",
      "album": "Father Saab",
      "duration": 317,
      "url": "/audio/haryanvi_020.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_21",
      "title": "Feelings",
      "artist": "Sumit Goswami",
      "album": "Feelings",
      "duration": 224,
      "url": "/audio/haryanvi_021.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_22",
      "title": "Gajban",
      "artist": "Vishvajeet Choudhary, Sapna Choudhary",
      "album": "Gajban",
      "duration": 221,
      "url": "/audio/haryanvi_022.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_23",
      "title": "Haryane Ka Jaat",
      "artist": "Raju Punjabi",
      "album": "Haryane Ka Jaat",
      "duration": 167,
      "url": "/audio/haryanvi_023.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_24",
      "title": "His Grace",
      "artist": "Ndee Kundu, Bintu Pabra, Shine",
      "album": "His Grace",
      "duration": 217,
      "url": "/audio/haryanvi_024.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_25",
      "title": "Jaatta Ka Chhora",
      "artist": "Mika Singh",
      "album": "Something Something",
      "duration": 225,
      "url": "/audio/haryanvi_025.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_26",
      "title": "Jadugarni",
      "artist": "Sintaa, Riyaazi",
      "album": "Jadugarni",
      "duration": 145,
      "url": "/audio/haryanvi_026.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_27",
      "title": "Jat Clan",
      "artist": "Dhanda Nyoliwala, Yogi Aulakh",
      "album": "Jat Clan",
      "duration": 206,
      "url": "/audio/haryanvi_027.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_28",
      "title": "Jat Supremacy",
      "artist": "Ndee Kundu",
      "album": "Jat Supremacy",
      "duration": 158,
      "url": "/audio/haryanvi_028.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_29",
      "title": "Jhotte",
      "artist": "Ndee Kundu",
      "album": "Unknown Album",
      "duration": 222,
      "url": "/audio/haryanvi_029.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_30",
      "title": "Jodi (feat. Mahi Dhaka)",
      "artist": "Ndee Kundu, Shine, Mahi Dhaka",
      "album": "Jodi (feat. Mahi Dhaka)",
      "duration": 154,
      "url": "/audio/haryanvi_030.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_31",
      "title": "Kabootar 2",
      "artist": "Renuka Panwar, Surender Romio, Aamin Barodi",
      "album": "Kabootar 2",
      "duration": 146,
      "url": "/audio/haryanvi_031.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_32",
      "title": "Khote Chad Lalkarun",
      "artist": "Masoom Sharma, Sheenam",
      "album": "Khote Chad Lalkarun",
      "duration": 296,
      "url": "/audio/haryanvi_032.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_33",
      "title": "Knife Brows",
      "artist": "Dhanda Nyoliwala",
      "album": "DNW Vol. 1",
      "duration": 175,
      "url": "/audio/haryanvi_033.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_34",
      "title": "Laada ka Lada",
      "artist": "Harjeet Diwana, Pranjal Dahiya, Aman Jaji",
      "album": "Laada ka Lada",
      "duration": 141,
      "url": "/audio/haryanvi_034.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_35",
      "title": "Laado",
      "artist": "MC SQUARE, Hiten",
      "album": "Laado",
      "duration": 148,
      "url": "/audio/haryanvi_035.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_36",
      "title": "Lofar",
      "artist": "Masoom Sharma, Swara Verma",
      "album": "Lofar",
      "duration": 129,
      "url": "/audio/haryanvi_036.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_37",
      "title": "Matak Chalungi",
      "artist": "Raj Mawar, Manisha Sharma, Aman Jaji, Sapna Choudhary",
      "album": "Matak Chalungi",
      "duration": 176,
      "url": "/audio/haryanvi_037.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_38",
      "title": "Mera Dol Kue Me Latke Se",
      "artist": "Krishan Chouhan, Seenam Khatolic",
      "album": "Mera Dol Kue Me Latke Se - Single",
      "duration": 326,
      "url": "/audio/haryanvi_038.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_39",
      "title": "Mhare Gaam Ka Pani",
      "artist": "Raju Punjabi",
      "album": "Unknown Album",
      "duration": 192,
      "url": "/audio/haryanvi_039.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_40",
      "title": "Mithi Bole Bangro",
      "artist": "Masoom Sharma, Sapna Choudhary",
      "album": "Mithi Bole Bangro",
      "duration": 174,
      "url": "/audio/haryanvi_040.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_41",
      "title": "Mithi Boli",
      "artist": "Raju Punjabi",
      "album": "Unknown Album",
      "duration": 152,
      "url": "/audio/haryanvi_041.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_42",
      "title": "Mittran Di Chhatri",
      "artist": "Babbu Maan",
      "album": "Pyass",
      "duration": 337,
      "url": "/audio/haryanvi_042.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_43",
      "title": "Moto",
      "artist": "Diler Kharkiya",
      "album": "Moto",
      "duration": 181,
      "url": "/audio/haryanvi_043.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_44",
      "title": "Nakhro",
      "artist": "Ndee Kundu",
      "album": "Unknown Album",
      "duration": 172,
      "url": "/audio/haryanvi_044.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_45",
      "title": "Nandi Ke Beera",
      "artist": "Ruchika Jangid",
      "album": "Nandi Ke Beera",
      "duration": 161,
      "url": "/audio/haryanvi_045.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_46",
      "title": "Not Guilty",
      "artist": "Dhanda Nyoliwala",
      "album": "Not Guilty",
      "duration": 175,
      "url": "/audio/haryanvi_046.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_47",
      "title": "Pani Chhalke",
      "artist": "Manisha Sharma",
      "album": "Unknown Album",
      "duration": 169,
      "url": "/audio/haryanvi_047.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_48",
      "title": "Phoolan Ki Kyari (She Blooms)",
      "artist": "Ndee Kundu, Guri Nimana",
      "album": "Phoolan Ki Kyari (She Blooms)",
      "duration": 145,
      "url": "/audio/haryanvi_048.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_49",
      "title": "Raam Ki Su",
      "artist": "Somveer Kathurwal",
      "album": "Raam Ki Su",
      "duration": 291,
      "url": "/audio/haryanvi_049.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_50",
      "title": "Raat Ke Shikari",
      "artist": "Masoom Sharma, Sweta Chauhan, Yash Thukral",
      "album": "Raat Ke Shikari",
      "duration": 148,
      "url": "/audio/haryanvi_050.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_51",
      "title": "Radke Radke",
      "artist": "Ndee Kundu",
      "album": "Unknown Album",
      "duration": 139,
      "url": "/audio/haryanvi_051.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_52",
      "title": "Roots",
      "artist": "Bintu Pabra",
      "album": "Roots",
      "duration": 263,
      "url": "/audio/haryanvi_052.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_53",
      "title": "Rose Garden",
      "artist": "Ndee Kundu, Isha Sharma",
      "album": "Rose Garden",
      "duration": 171,
      "url": "/audio/haryanvi_053.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_54",
      "title": "Russian Bandana",
      "artist": "Dhanda Nyoliwala",
      "album": "Russian Bandana",
      "duration": 197,
      "url": "/audio/haryanvi_054.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_55",
      "title": "Solid Body",
      "artist": "Raju Punjabi, Sheenam Katholic",
      "album": "Solid Body",
      "duration": 176,
      "url": "/audio/haryanvi_055.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_56",
      "title": "Superman Jat",
      "artist": "Ndee Kundu, Pranjal Dahiya",
      "album": "Superman Jat",
      "duration": 171,
      "url": "/audio/haryanvi_056.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_57",
      "title": "Sweety",
      "artist": "Raju Punjabi",
      "album": "Sweety",
      "duration": 221,
      "url": "/audio/haryanvi_057.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_58",
      "title": "System Pe System",
      "artist": "R Maan, Billa Sonipat Ala, Vikram Sarkar",
      "album": "System Pe System",
      "duration": 184,
      "url": "/audio/haryanvi_058.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_59",
      "title": "Tagdi",
      "artist": "Gagan Haryanvi, Ak Jatti",
      "album": "Tagdi",
      "duration": 202,
      "url": "/audio/haryanvi_059.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_60",
      "title": "Tension",
      "artist": "Dhanda Nyoliwala",
      "album": "Tension",
      "duration": 143,
      "url": "/audio/haryanvi_060.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_61",
      "title": "Teri Ramjhol Bole Gi (feat. Kay D)",
      "artist": "Masoom Sharma, Sheenam Katholic, Mr. Boota, Aarohi Raghav, Kay D",
      "album": "Teri Ramjhol Bole Gi (feat. Kay D)",
      "duration": 147,
      "url": "/audio/haryanvi_061.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_62",
      "title": "The Villagers",
      "artist": "Sumit Goswami, Jerry",
      "album": "The Villagers",
      "duration": 185,
      "url": "/audio/haryanvi_062.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_63",
      "title": "Unchi Haveli",
      "artist": "Renuka Panwar, Aditya Kalkal, MST",
      "album": "Unchi Haveli",
      "duration": 161,
      "url": "/audio/haryanvi_063.mp3",
      "category": "haryanvi"
    },
    {
      "id": "haryanvi_64",
      "title": "Yaaran Ki Rees",
      "artist": "Ndee Kundu",
      "album": "Unknown Album",
      "duration": 185,
      "url": "/audio/haryanvi_064.mp3",
      "category": "haryanvi"
    }
  ],
  "pahadi": [
    {
      "id": "pahadi_1",
      "title": "Aachhri",
      "artist": "Darshan Farswan",
      "album": "Aachhri",
      "duration": 290,
      "url": "/audio/pahadi_001.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_2",
      "title": "Babli Tero Mobile",
      "artist": "Gajendra Rana, Meena Rana",
      "album": "Hima Maarchhyan",
      "duration": 366,
      "url": "/audio/pahadi_002.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_3",
      "title": "Bedu Pako - Uttarakhandi Folk Song",
      "artist": "Narendra Singh Negi",
      "album": "Unknown Album",
      "duration": 443,
      "url": "/audio/pahadi_003.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_4",
      "title": "Chaita Ki Chaitwali",
      "artist": "Anil Bisht",
      "album": "Unknown Album",
      "duration": 583,
      "url": "/audio/pahadi_004.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_5",
      "title": "Chhakk Chhina - Uttrakhandi",
      "artist": "Prahlad Mehra",
      "album": "Unknown Album",
      "duration": 309,
      "url": "/audio/pahadi_005.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_6",
      "title": "Dev Bhumi - Uttarakhandi",
      "artist": "Lalit Mohan Joshi",
      "album": "Unknown Album",
      "duration": 245,
      "url": "/audio/pahadi_006.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_7",
      "title": "Ghasyeri",
      "artist": "Sahab Singh Ramola",
      "album": "Unknown Album",
      "duration": 470,
      "url": "/audio/pahadi_007.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_8",
      "title": "Ghumede Munsyar",
      "artist": "Mamta Arya",
      "album": "Unknown Album",
      "duration": 422,
      "url": "/audio/pahadi_008.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_9",
      "title": "Ghur Ghur Almora",
      "artist": "Fauji Lalit Mohan Joshi",
      "album": "Ghur Ghur Almora",
      "duration": 245,
      "url": "/audio/pahadi_009.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_10",
      "title": "Gori Tera Gaon Bada Pyara",
      "artist": "K. J. Yesudas",
      "album": "Chitchor",
      "duration": 307,
      "url": "/audio/pahadi_010.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_11",
      "title": "Gulabi Sharara",
      "artist": "Inder Arya",
      "album": "Gulabi Sharara",
      "duration": 206,
      "url": "/audio/pahadi_011.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_12",
      "title": "Kindi Chale Bathade",
      "artist": "Vicky Chauhan",
      "album": "Kindi Chale Bathade",
      "duration": 217,
      "url": "/audio/pahadi_012.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_13",
      "title": "Laal Suit Maa",
      "artist": "Fauji Lalit Mohan Joshi",
      "album": "Unknown Album",
      "duration": 438,
      "url": "/audio/pahadi_013.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_14",
      "title": "Lachima",
      "artist": "Diksha Dhoundiyal, Vijay Prakash",
      "album": "Lachima",
      "duration": 258,
      "url": "/audio/pahadi_014.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_15",
      "title": "Lal Botal Sharaba - Garhwali",
      "artist": "Prakash kahala",
      "album": "Unknown Album",
      "duration": 308,
      "url": "/audio/pahadi_015.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_16",
      "title": "Meri Bhanu",
      "artist": "Lalit Mohan Joshi",
      "album": "Meri Bhanu",
      "duration": 391,
      "url": "/audio/pahadi_016.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_17",
      "title": "Nainital Ki Madhuli - Pahadi",
      "artist": "Lalit Mohan Joshi",
      "album": "Unknown Album",
      "duration": 337,
      "url": "/audio/pahadi_017.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_18",
      "title": "PAHADI - The Folk Songs of Uttarakhand",
      "artist": "Nupur Pant",
      "album": "PAHADI - The Folk Songs of Uttarakhand",
      "duration": 259,
      "url": "/audio/pahadi_018.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_19",
      "title": "Photo Teri - Kumaoni",
      "artist": "Inder Arya",
      "album": "Photo Teri (Kumaoni)",
      "duration": 272,
      "url": "/audio/pahadi_019.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_20",
      "title": "Pingli Sadee",
      "artist": "Fauji Lalit Mohan Joshi",
      "album": "Pingli Sadee",
      "duration": 219,
      "url": "/audio/pahadi_020.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_21",
      "title": "Ramdai Ka Hotel",
      "artist": "Satyendra Gangola",
      "album": "Unknown Album",
      "duration": 319,
      "url": "/audio/pahadi_021.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_22",
      "title": "Ranikhet Ki Baand Neeru",
      "artist": "Lalit Mohan Joshi",
      "album": "Unknown Album",
      "duration": 466,
      "url": "/audio/pahadi_022.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_23",
      "title": "Rifle Meri Kani Ma",
      "artist": "Fauji Lalit Mohan Joshi",
      "album": "Rifle Meri Kani Ma",
      "duration": 334,
      "url": "/audio/pahadi_023.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_24",
      "title": "Sangeeta - Kumaoni",
      "artist": "Jitendra Tomkyal",
      "album": "Unknown Album",
      "duration": 350,
      "url": "/audio/pahadi_024.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_25",
      "title": "Tak Taka Tak Kamla - Pahari",
      "artist": "Lalit Mohan Joshi",
      "album": "Unknown Album",
      "duration": 422,
      "url": "/audio/pahadi_025.mp3",
      "category": "pahadi"
    },
    {
      "id": "pahadi_26",
      "title": "Udi Ja Panchhi",
      "artist": "Fauji Lalit Mohan Joshi",
      "album": "Ki Bhalo Tero Mann",
      "duration": 330,
      "url": "/audio/pahadi_026.mp3",
      "category": "pahadi"
    }
  ]
};

export const SAMPLE_TRACKS = TRACK_CATEGORIES["90s"];

export const fmtTime = (s) => {
  if (!s || Number.isNaN(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};
