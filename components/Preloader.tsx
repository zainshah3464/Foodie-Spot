"use client";

import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-950"
    >
      {/* Spinning Pizza / Plate */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="relative w-24 h-24 md:w-32 md:h-32 mb-8"
      >
        <div className="absolute inset-0 rounded-full border-4 border-orange-500/30 border-t-orange-500 animate-spin" />
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
          <span className="text-4xl md:text-5xl">🍕</span>
        </div>
      </motion.div>

      {/* Logo Text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-5xl font-bold text-white mb-4"
      >
        Foodie<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Spot</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 text-sm md:text-base mb-8"
      >
        Loading deliciousness...
      </motion.p>

      {/* Progress Bar */}
      <div className="w-48 md:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;