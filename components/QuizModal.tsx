"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Dispatch, SetStateAction, KeyboardEvent } from "react";
import { Question } from "./types";

type QuizModalProps = {
  questions: Question[];
  step: number;
  userAnswer: string;
  feedback: null | "correct" | "wrong";
  setUserAnswer: Dispatch<SetStateAction<string>>;
  onSubmit: (answer?: string) => void;
  onNext: () => void;
  onClose: () => void;
};

export default function QuizModal({
  questions,
  step,
  userAnswer,
  feedback,
  setUserAnswer,
  onSubmit,
  onNext,
  onClose,
}: QuizModalProps) {
  const currentQ = questions[step];

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit(userAnswer);
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-gradient-to-br from-pink-100/80 via-purple-100/80 to-white/80 
                   backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-md text-center border-2 border-pink-300"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <h2 className="text-2xl md:text-3xl font-[Dancing Script] text-pink-600">
          {currentQ.question}
        </h2>

        {/* Correct Feedback Heart */}
        {feedback === "correct" && (
          <motion.div
            className="mt-4 text-red-500 text-4xl cursor-pointer"
            animate={{ scale: [1, 1.5, 1], rotate: [0, 20, -20, 0] }}
            transition={{ duration: 0.8 }}
          >
            <Heart />
          </motion.div>
        )}

        {/* MCQ / Who */}
        {"options" in currentQ && feedback === null && (
          <div className="flex flex-col gap-4 mt-6">
            {currentQ.options.map((opt) => (
              <motion.button
                key={opt}
                onClick={() => onSubmit(opt)} // pass the clicked option directly
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-400 to-purple-400 text-white 
                           px-6 py-2 rounded-xl shadow-lg hover:shadow-pink-500/50 
                           transition cursor-pointer"
              >
                {opt}
              </motion.button>
            ))}
          </div>
        )}

        {/* Input type */}
        {currentQ.type === "input" && feedback === null && (
          <div className="mt-6 flex flex-col gap-4">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSubmit()}
              placeholder="Type your answer..."
              className="px-4 py-2 rounded-xl border border-pink-300 
                         focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-text"
            />
          </div>
        )}

        {/* Feedback */}
        {feedback === "wrong" && (
          <div className="mt-6 text-red-500 font-semibold cursor-default">
            ❌ Oops! That’s not it. Try again.
          </div>
        )}

        {feedback === "correct" && (
          <div className="mt-6 text-green-600 font-semibold cursor-default">
            ✅ Correct!
          </div>
        )}

        {/* Next / Close */}
        <div className="mt-6 flex justify-center gap-4">
          {feedback === "correct" && step < questions.length - 1 && (
            <button
              onClick={onNext}
              className="bg-pink-500 text-white px-5 py-2 rounded-xl shadow 
                         hover:bg-pink-600 cursor-pointer transition"
            >
              Next
            </button>
          )}
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-5 py-2 rounded-xl shadow 
                       hover:bg-gray-300 cursor-pointer transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
