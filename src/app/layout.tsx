import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jiten Jayeshkumar Mistry — AI & Machine Learning Engineer | Backend & Automation Specialist",
  description:
    "Portfolio of Jiten Jayeshkumar Mistry, an AI & ML Engineer and Backend Developer specializing in multi-agent architectures (LangGraph/LangChain), real-time telephony voice bots (Twilio, WebSockets), and workflow automation.",
  keywords: [
    "Jiten Mistry",
    "AI Engineer",
    "Machine Learning Engineer",
    "Backend Developer",
    "LangGraph",
    "LangChain",
    "Twilio Voice Bot",
    "Django REST",
    "n8n Automation",
    "Python",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Jiten Jayeshkumar Mistry" }],
  openGraph: {
    type: "website",
    title: "Jiten Jayeshkumar Mistry — AI & ML Engineer | Backend Specialist",
    description:
      "AI & Machine Learning Engineer with production experience across backend development, LLM conversational voice systems, and multi-agent architectures.",
    siteName: "Jiten Jayeshkumar Mistry Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jiten Jayeshkumar Mistry",
              jobTitle: "AI & Machine Learning Engineer",
              email: "jiten.j.mistry@gmail.com",
              telephone: "+918780693961",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Navsari",
                addressRegion: "Gujarat",
                addressCountry: "India",
              },
              sameAs: [
                "https://linkedin.com/in/jiten-mistry",
                "https://github.com",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
