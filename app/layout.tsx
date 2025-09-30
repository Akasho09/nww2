import "./globals.css";
import { Poppins, Dancing_Script } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Happy Birthday Sukhman❤️",
  description: "A special wish just for you",
  openGraph: {
    title: "Happy Birthday Sukhman❤️",
    description: "A special wish just for you",
    url: "https://birthdaygirlie.vercel.app", // replace with your deployed URL
    siteName: "Birthday Wishes",
    images: [
      {
        url: "https://birthdaygirlie.vercel.app/image.png", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Happy Birthday Sukhman❤️",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Optional: If you want to manually add OG tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />
      </head>
      <body className={`${poppins.className} bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-50`}>
        {children}
      </body>
    </html>
  );
}
