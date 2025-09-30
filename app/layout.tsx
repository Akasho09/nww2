import "./globals.css";
import { Poppins, Dancing_Script } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Happy Birthday ❤️",
  description: "A special wish just for you",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-50`}>
        {children}
      </body>
    </html>
  );
}
