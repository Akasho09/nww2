"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

import Heading from "@/components/Heading";
import MemoryCard from "@/components/MemoryCard";
import MemoryModal from "@/components/MemoryModal";
import QuizModal from "@/components/QuizModal";
import { Question } from "./types";
import ReasonsList from "@/components/ReasonsList";

const memories = [
  { title: "Our First Text 💬", message: "az:\nCan predict a lot by that addition\nJul 18, 2025 10:30 am" },
  { title: "When We Said I Love You ❤️", message: "ਸੁਖ.\nAll I need is you.\n❤️ az\nJul 23, 2025 8:35 am" },
  { title: "Today 🎂", message: "Your special day — and I just want to remind you: you are my happiness, my love, my everything." },
];

const quizQuestions: Question[] = [
  { type: "mcq", question: "What’s my favorite color? 🎨", options: ["Red", "Blue", "Grey", "Black"], answer: "Grey" },
  { type: "input", question: "Guess my favorite song 🎶", answer: "The Last Leaf" },
  { type: "who", question: "Who said the word 'love' first? 💕", options: ["A", "S"], answer: "A" },
  { type: "who", question: "Who said the word 'love' second? 💕", options: ["A", "S"], answer: "A" },
  { type: "who", question: "Who said the word 'love' third? 💕", options: ["A", "S"], answer: "A" },
  { type: "who", question: "Who said the word 'love' first 9 times? 😍", options: ["A", "S"], answer: "A" },
];

export default function Home() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [openMemory, setOpenMemory] = useState<number | null>(null);

  const [quizOpen, setQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<null | "correct" | "wrong">(null);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

const checkAnswer = (answer?: string) => {
  const currentQ = quizQuestions[quizStep];
  const ans = answer ?? userAnswer; // use passed answer, or fallback to input
  if (currentQ.type === "input") {
    setFeedback(ans.toLowerCase().includes(currentQ.answer.toLowerCase()) ? "correct" : "wrong");
  } else {
    setFeedback(ans === currentQ.answer ? "correct" : "wrong");
  }
};


  const nextQuestion = () => {
    setFeedback(null);
    setUserAnswer("");
    setQuizStep((prev) => prev + 1);
  };

  const closeQuiz = () => {
    setQuizOpen(false);
    setQuizStep(0);
    setFeedback(null);
    setUserAnswer("");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10 overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200 text-3xl"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, -40, -80] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Confetti */}
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={true}
        numberOfPieces={200}
        colors={["#ff6bcb", "#ffb6c1", "#d8b4fe", "#f9a8d4"]}
      />

      <Heading />

      {/* Memory Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        {memories.map((m, i) => (
          <MemoryCard key={i} title={m.title} onClick={() => setOpenMemory(i)} />
        ))}

        <button
          onClick={() => setQuizOpen(true)}
          className="bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg rounded-2xl p-4 text-center font-semibold text-lg cursor-pointer hover:scale-105 transition"
        >
          💘 Memory Quiz
        </button>
      </div>

      {/* Memory Modal */}
      {openMemory !== null && (
        <MemoryModal
          title={memories[openMemory].title}
          message={memories[openMemory].message}
          onClose={() => setOpenMemory(null)}
        />
      )}

      {/* Quiz Modal */}
      {quizOpen && (
        <QuizModal
          questions={quizQuestions}
          step={quizStep}
          userAnswer={userAnswer}
          feedback={feedback}
          onSubmit={checkAnswer}
          onNext={nextQuestion}
          onClose={closeQuiz}
          setUserAnswer={setUserAnswer}
        />
      )}

      <ReasonsList/>

      {/* Footer */}
      <p className="absolute bottom-6 text-sm text-purple-600"> Akash Loves 💖 You .</p>
    </div>
  );
}
