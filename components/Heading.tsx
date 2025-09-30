"use client";

import { motion } from "framer-motion";

export default function Heading() {
  return (
    <motion.h1
      className="text-5xl md:text-7xl font-[Dancing Script] font-bold text-pink-600 drop-shadow-lg text-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 1.5 }}
    >
      🎉 Happy Birthday, My Love 🎂
    </motion.h1>
  );
}

