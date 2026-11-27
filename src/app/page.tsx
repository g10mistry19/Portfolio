"use client";

import { useState } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";

export default function Home() {
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("jiten.j.mistry@gmail.com")
      .then(() => triggerToast("Copied jiten.j.mistry@gmail.com to clipboard!"))
      .catch((err) => console.error("Clipboard copy failed:", err));
  };

  const handleCopyAllContact = () => {
    const fullContact = `Jiten Jayeshkumar Mistry\nEmail: jiten.j.mistry@gmail.com\nPhone: +91 8780693961\nLinkedIn: https://linkedin.com/in/jiten-mistry\nLocation: Navsari, Gujarat, India`;
    navigator.clipboard
      .writeText(fullContact)
      .then(() => triggerToast("All contact information copied to clipboard!"))
      .catch((err) => console.error("Clipboard copy failed:", err));
  };

  return (
    <>
      {/* Ambient background glow elements */}
      <div className="ambient-glow glow-1" aria-hidden="true" />
      <div className="ambient-glow glow-2" aria-hidden="true" />
      <div className="ambient-glow glow-3" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      {/* Reactive scroll indicator */}
      <ScrollProgress />

      {/* Glass navigation header */}
      <Navbar />

      <main className="page-wrapper">
        <Hero onCopyEmail={handleCopyEmail} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact onCopyAllContact={handleCopyAllContact} />
      </main>

      <Footer />
      <Toast message={toastMessage} visible={toastVisible} />
    </>
  );
}
