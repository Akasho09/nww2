// components/ReasonsList.tsx
"use client";

import { useMemo, useState } from "react";
import { Copy } from "lucide-react";
import Propose from "./Propose";

type ReasonsListProps = {
  reasons?: string[];       // optional custom reasons
  chunkSize?: number;       // how many to show per "Load more"
};

const defaultReasons = [
  // 100 short romantic reasons. Edit any to personalize.
  "I Love You.",
  "I will Love u always.",
  "You will be earning more than me Eventually.",
  "You care for me so so much.",
  "You understand me better.",
  "You approached me first.",
  "You accept me for who i'm.",
  "You forgive me .",
  "You remember the little things.",
  "You have a better SOH than me.",
  "You make me feel good idk how.",
  "You are kind to me and im not .",
  "You support me always .",
  "You are sexyyy and hot . ",
  "You have thick thighs .",
  "You have bigger ass .",
  "You are underage and im pedo .",
  "You dont get mad even if i roast u.",
  "You are nipplelessss.",
  "You are boobless.",
  "You are jo b bur u r mine and my bitchhhhhhhhh.",
  "You have the best smell i can guarantee even if i we havent met yet.",
  "You are nari with aari.",
  "You will be doctor and im bimar as u know.",
  "You dont get mad at me ever.",
  "You forgive me easily.",
  "You are proud of my wins.",
  "You make me feel important.",
  "You are my kuchupuchu.",
  "You are my 'Chand bhi udaas hai, sitare bhi tanha, Zindagi ka har rang feeka hai tumhare bina.'",
  "You have better sticker collection than me .",
  "You are dealing with more than me in life and still giving me time .",
  "You literally inspire me alot of times .",
  "You are hotty .",
  "You will let me have 11 kids with u 💀.",
  "You have good taste in food also. hehe that soup u suggested yumm yummm .",
  "You make best tea fs .",
  "You give the best advice.",
  "You listen without judgment.",
  "You have pink lips hehhehe 💀.",
  "You are my best friend.",
  "You are Biwi material hehehhe.",
  "You call me pagal mard.",
  "You send me photos of your day.",
  "You call me mistri akashh.",
  "You will give me cutu kids .",
  "You are mature than me .",
  "You are shorter than me and i like short girls basically u.",
  "You always use the word 'basically'.",
  "You have big Eyes.",


 
];



export default function ReasonsList({
  reasons = defaultReasons,
  chunkSize = 20,
}: ReasonsListProps) {
  const items = useMemo(() => reasons.slice(0, 100), [reasons]);
  const [visible, setVisible] = useState<number>(Math.min(chunkSize, items.length));

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ignore errors for minimal version
    }
  };

  const loadMore = () => {
    setVisible((v) => Math.min(items.length, v + chunkSize));
  };

  return (
    <section
      aria-labelledby="reasons-heading"
      className="w-full max-w-2xl mx-auto my-8 px-4 text-center"
    >
      <h3
        id="reasons-heading"
        className="text-2xl md:text-3xl font-semibold text-pink-600 mb-4"
      >
        100 Reasons Why I Should Marry You ❤️
      </h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
        {items.slice(0, visible).map((r, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 p-3 rounded-lg bg-white/80 backdrop-blur-sm border border-pink-100 shadow-sm"
          >
            <div className="flex-none text-sm text-pink-600 font-semibold w-6">
              {idx + 1}.
            </div>
            <div className="flex-1 text-sm text-gray-700 leading-snug">{r}</div>
            <button
              aria-label={`Copy reason ${idx + 1}`}
              onClick={() => copyToClipboard(r)}
              className="flex-none ml-2 p-1 rounded-md hover:bg-pink-50 transition cursor-pointer"
              title="Copy"
            >
              <Copy className="w-4 h-4 text-pink-500" />
            </button>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      {visible < items.length && (
        <div className="mt-4">
          <button
            onClick={loadMore}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow hover:scale-105 transition cursor-pointer"
          >
            Load more
          </button>
        </div>
      )}

      {/* Download button always visible */}
      <div className="mt-4">
        <button
          onClick={() => {
            const blob = new Blob([items.join("\n")], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "100-reasons.txt";
            a.click();
            URL.revokeObjectURL(url);
          }}
          className="px-4 py-2 rounded-full bg-white border border-pink-100 text-pink-600 shadow hover:bg-pink-50 transition cursor-pointer text-sm"
        >
          Download
        </button>
      </div>

      {/* Proposal message after all reasons loaded */}
      <div className="pt-4">
        {visible >= items.length && (
        <Propose></Propose>
      )}
      </div>
    </section>
  );
}
