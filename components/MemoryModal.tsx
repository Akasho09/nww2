"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

type MemoryModalProps = {
  title: string;
  message: string;
  onClose: () => void;
};

export default function MemoryModal({ title, message, onClose }: MemoryModalProps) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/50 p-6 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 max-w-md text-center border-2 border-pink-300"
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <Heart className="w-10 h-10 text-red-500 mx-auto animate-bounce" />
        <h2 className="text-2xl font-bold text-pink-600 mt-3">{title}</h2>
        <p className="text-gray-700 mt-2 whitespace-pre-line">{message}</p>

        <button
          onClick={onClose}
          className="mt-4 bg-pink-500 text-white px-5 py-2 rounded-xl shadow hover:bg-pink-600 cursor-pointer transition"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
