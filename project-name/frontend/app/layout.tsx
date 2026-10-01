import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vigneshwar T | AI & Machine Learning Portfolio",
  description: "Portfolio of Vigneshwar T, an AI & Machine Learning undergraduate building projects across NLP, machine learning, graph algorithms and web development.",
  authors: [{ name: "Vigneshwar T" }],
  openGraph: { title: "Vigneshwar T | AI & ML Portfolio", description: "AI, machine learning and web development portfolio.", type: "website" },
  other: { "theme-color": "#080b0f", "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="icon" href="/favicon.svg" type="image/svg+xml" /></head><body>{children}</body></html>;
}
