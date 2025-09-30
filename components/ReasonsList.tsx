// components/ReasonsList.tsx
"use client";

import { useMemo, useState } from "react";
import { Copy } from "lucide-react";

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
  "You are my best friend.",
  "You forgive me .",
  "You remember the little things.",
  "You have a better SOH than me.",
  "You make me feel good idk how.",
  "You are kind to me and im not .",
  "You support me always .",
  "You are sexyyy and hot . ",
  "You have thick thighs .",
  "You have bigger ass .",
  
  "You cheer me up with one message.",
  "You keep our memories safe.",
  "You are patient with me.",
  "You love my family like your own.",
  "You make tough times easier.",
  "You bring out my silly side.",
  "You cook/smell/bring my favorite things.",
  "You notice when I'm tired.",
  "You hold me accountable lovingly.",
  "You forgive me easily.",
  "You are proud of my wins.",
  "You make me feel important.",
  "You let me be vulnerable.",
  "You make me believe in us.",
  "You share your dreams with me.",
  "You are thoughtful with surprises.",
  "You remind me to rest.",
  "You warm my coldest days.",
  "You make our plans feel exciting.",
  "You make me feel safe.",
  "You text me random sweet notes.",
  "You are honest with me.",
  "You give the best advice.",
  "You listen without judgment.",
  "You celebrate my small wins.",
  "You challenge my opinions gently.",
  "You make art of our life together.",
  "You hold me when I cry.",
  "You send me photos of your day.",
  "You make coffee just my way.",
  "You laugh with me, not at me.",
  "You value my time and yours.",
  "You make every meal better.",
  "You make silence comfortable.",
  "You are adventurous with food.",
  "You remember anniversaries.",
  "You are my calm and my chaos.",
  "You encourage my hobbies.",
  "You read with me.",
  "You find joy in small things.",
  "You are generous with compliments.",
  "You are fiercely loyal.",
  "You make me love myself more.",
  "You have beautiful taste.",
  "You keep learning and growing.",
  "You look at me like home.",
  "You make rainy days cozy.",
  "You love with all your heart.",
  "You make sacrifices for us.",
  "You stay even when it’s hard.",
  "You are brave and gentle.",
  "You own your mistakes.",
  "You respect my boundaries.",
  "You build traditions with me.",
  "You hold my hand in public.",
  "You are my favorite hello and hardest goodbye.",
  "You make my playlists better.",
  "You make the future feel bright.",
  "You always find a reason to smile.",
  "You make me feel proud to be yours.",
  "You are built of good things.",
  "You believe in our love story.",
  "You make me wish for forever.",
  "You are my daily miracle.",
  "You give the kindest hugs.",
  "You are everything I prayed for.",
  "You make me laugh until I cry.",
  "You are the best part of me.",
];

export default function ReasonsList({
  reasons = defaultReasons,
  chunkSize = 20,
}: ReasonsListProps) {
  // Memoize the reasons array to avoid re-creations on re-render
  const items = useMemo(() => reasons.slice(0, 100), [reasons]);

  // Visible count for chunked loading
  const [visible, setVisible] = useState<number>(Math.min(chunkSize, items.length));

  // Copy single reason to clipboard (minimal feedback)
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // tiny visual feedback could be added (toast) — keep minimal as requested
    } catch {
      // ignore errors for minimal version
    }
  };

  const loadMore = () => {
    setVisible((v) => Math.min(items.length, v + chunkSize));
  };

  return (
    <section aria-labelledby="reasons-heading" className="w-full max-w-2xl mx-auto my-8">
      <h3 id="reasons-heading" className="text-xl md:text-2xl font-semibold text-pink-600 mb-4">
        100 Reasons Why You Should Marry Me ❤️
      </h3>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.slice(0, visible).map((r, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 p-3 rounded-lg bg-white/80 backdrop-blur-sm border border-pink-100 shadow-sm"
          >
            <div className="flex-none text-sm text-pink-600 font-semibold w-6">{idx + 1}.</div>
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

      <div className="mt-4 flex items-center gap-3">
        {visible < items.length ? (
          <button
            onClick={loadMore}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow hover:scale-105 transition cursor-pointer"
          >
            Load more
          </button>
        ) : (
          <span className="text-sm text-gray-500">All reasons loaded ✨</span>
        )}

        <button
          onClick={() => {
            // download as text file (minimal)
            const blob = new Blob([items.join("\n")], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "100-reasons.txt";
            a.click();
            URL.revokeObjectURL(url);
          }}
          className="px-3 py-2 rounded-full bg-white border border-pink-100 text-pink-600 shadow hover:bg-pink-50 transition cursor-pointer text-sm"
        >
          Download
        </button>
      </div>
    </section>
  );
}
