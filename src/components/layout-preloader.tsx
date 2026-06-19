"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LayoutPreloader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setLoading(false), 600);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Hero background with zoom effect */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/hero/hero-bg.png')",
              }}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1.05 }}
              transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Dark overlay */}
            <motion.div
              className="absolute inset-0 bg-black/70"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* Noise texture overlay */}
            <div
              className="absolute inset-[-50%] w-[200%] h-[200%] animate-noise opacity-[0.04] pointer-events-none z-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Center content */}
            <div className="relative z-20 flex flex-col items-center gap-8">
              {/* Logo / Brand text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <h1 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-[0.2em] text-white">
                  MonKey
                </h1>
                <p className="font-display text-lg md:text-xl uppercase tracking-[0.5em] text-white/60 mt-2">
                  Tattoo
                </p>
              </motion.div>

              {/* Progress bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="w-48 md:w-64"
              >
                <div className="h-[1px] bg-white/20 w-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
                <p className="text-white/40 text-xs tracking-widest uppercase mt-3 text-center font-mono">
                  {Math.round(progress)}%
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
