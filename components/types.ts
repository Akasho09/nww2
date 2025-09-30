export type Question =
  | { type: "mcq"; question: string; options: string[]; answer: string }
  | { type: "input"; question: string; answer: string }
  | { type: "who"; question: string; options: string[]; answer: string };
