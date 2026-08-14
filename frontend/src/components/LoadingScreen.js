import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headphones } from "lucide-react";

export default function LoadingScreen({ onBegin }) {
  const [phase, setPhase] = useState(0); // 0 loading, 1 headphones prompt

  useEffect(() => {
    const t = setTimeout(() => setPhase(1), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: "radial-gradient(120% 120% at 50% 30%, #1b1710 0%, #0b0906 70%)" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      data-testid="loading-screen"
    >
      {/* faint travelling line */}
      <div className="absolute left-0 right-0 top-1/2 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(230,182,76,0.35),transparent)" }} />

      <AnimatePresence mode="wait">
        {phase === 0 ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7 }}
            className="text-center px-6"
          >
            <p className="font-tech text-xs tracking-[0.5em] text-[#8a7a55]">HRTC • ROUTE 07</p>
            <h1 className="font-display text-3xl sm:text-4xl mt-4 tracking-wide text-[#efe6d0]">
              LOADING JOURNEY
              <span className="inline-block animate-pulse">…</span>
            </h1>
            <div className="mt-8 mx-auto h-1 w-56 rounded-full bg-black/50 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg,#e6b64c,#d47a3f)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.1, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="prompt"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-6 max-w-md"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#e6b64c]/40 text-[#e6b64c]">
              <Headphones size={30} strokeWidth={1.6} />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-[#efe6d0] leading-snug">
              Put your headphones on.
              <br />
              The journey begins.
            </h2>
            <p className="font-body text-sm text-[#a99b78] mt-4">
              Sit by the window and watch the mountains pass by.
            </p>
            <button
              data-testid="begin-journey-btn"
              onClick={onBegin}
              className="tbtn play mt-8 px-8 py-3 rounded-xl font-tech tracking-widest text-sm"
            >
              BEGIN JOURNEY
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
