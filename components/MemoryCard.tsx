"use client";

import { motion } from "framer-motion";

type MemoryCardProps = {
  title: string;
  onClick: () => void;
};

export default function MemoryCard({ title, onClick }: MemoryCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-4 text-center 
                 text-pink-600 font-semibold text-lg border border-pink-200 cursor-pointer 
                 hover:shadow-pink-400/50 transition"
    >
      {title}
    </motion.button>
  );
}
