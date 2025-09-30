"use client";

type QuizQuestionProps = {
  type: "mcq" | "input" | "who";
  question: string;
  options?: string[];
  userAnswer: string;
  setUserAnswer: (val: string) => void;
};

export default function QuizQuestion({
  type,
  question,
  options,
  userAnswer,
  setUserAnswer,
}: QuizQuestionProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-pink-600 mb-4">{question}</h2>

      {type === "mcq" &&
        options?.map((opt) => (
          <button
            key={opt}
            className={`block w-full my-2 px-4 py-2 rounded-xl ${
              userAnswer === opt
                ? "bg-pink-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setUserAnswer(opt)}
          >
            {opt}
          </button>
        ))}

      {type === "input" && (
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Type your guess..."
          className="w-full border border-gray-300 rounded-xl p-2 mt-2 text-center"
        />
      )}

      {type === "who" &&
        options?.map((opt) => (
          <button
            key={opt}
            className={`mx-2 px-6 py-2 rounded-xl ${
              userAnswer === opt
                ? "bg-pink-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setUserAnswer(opt)}
          >
            {opt}
          </button>
        ))}
    </div>
  );
}
