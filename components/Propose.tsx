// components/Propose.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Propose() {
  const [answer, setAnswer] = useState<null | "yes" | "no">(null);

  const whatsappLink = `https://wa.me/919103597816?text=Forever%20💖`; 
  // replace 91XXXXXXXXXX with your number in international format

  return (
    <section className="w-full flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-br from-pink-50 via-white to-purple-50 ">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-pink-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        A Question From My Heart ❤️
      </motion.h2>

      <motion.p
        className="max-w-xl text-gray-700 mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        If you’re here, it means you’re also interested in me.  
        So this is how it goes:  
        I want to ask you if we can promise our lives to each other for the rest of our lives.  
        Be sincere, be honest, be one, be everything for each other . 💍
      </motion.p>

      {!answer && (
        <div className="flex gap-4">
          <button
            onClick={() => setAnswer("yes")}
            className="px-6 py-2 rounded-full bg-pink-500 text-white font-semibold shadow hover:bg-pink-600 transition"
          >
            Yes 💖
          </button>
          <button
            onClick={() => setAnswer("no")}
            className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-medium shadow hover:bg-gray-200 transition"
          >
            Maybe Later
          </button>
        </div>
      )}

      {answer === "yes" && (
        <motion.div
          className="mt-6 text-lg text-pink-600 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          You said YES! 
          <span>🎉 Please send me a{" "}</span>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-pink-700"
          >
            WhatsApp message saying "Forever 💖"
          </a>
        </motion.div>
      )}

      {answer === "no" && (
        <motion.div
          className="mt-6 text-gray-500 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          That’s okay… I’ll keep loving you anyway 💔
        </motion.div>
      )}
    </section>
  );
}
