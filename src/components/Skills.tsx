"use client";

import { useState } from "react";

interface SkillItem {
  id: string;
  name: string;
  desc: string;
  badge: string;
  category: "ai" | "backend" | "voice" | "automation";
  accent: string;
  icon: React.ReactNode;
}

const SKILLS_DATA: SkillItem[] = [
  {
    id: "langchain",
    name: "LangChain & LangGraph",
    desc: "Multi-agent orchestration, cyclical DAGs, tool routing",
    badge: "Core AI",
    category: "ai",
    accent: "#a855f7",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="5" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
      </svg>
    ),
  },
  {
    id: "llm-vision",
    name: "LLM Integration & Vision",
    desc: "OpenAI, Groq, Structured Parsing, Prompt Engineering",
    badge: "Inference",
    category: "ai",
    accent: "#06b6d4",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    id: "twilio",
    name: "Twilio Telephony & Voice",
    desc: "Inbound/outbound call orchestration & TwiML state machines",
    badge: "Telephony",
    category: "voice",
    accent: "#ef4444",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    id: "websockets",
    name: "WebSockets & Audio STT/TTS",
    desc: "Bidirectional audio streaming, Deepgram, ElevenLabs",
    badge: "Real-Time",
    category: "voice",
    accent: "#3b82f6",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: "django",
    name: "Python & Django REST",
    desc: "Service & selector layer architecture, Flask, FastAPI",
    badge: "Backend",
    category: "backend",
    accent: "#10b981",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16.5 9.4 7.55 4.24a1.8 1.8 0 0 0-1.8 0L2.5 6.1a1.8 1.8 0 0 0-.9 1.56v8.68a1.8 1.8 0 0 0 .9 1.56l3.25 1.86a1.8 1.8 0 0 0 1.8 0l8.95-5.16a1.8 1.8 0 0 0 .9-1.56V11a1.8 1.8 0 0 0-.9-1.6z" />
      </svg>
    ),
  },
  {
    id: "postgres",
    name: "PostgreSQL & DB Design",
    desc: "Schema modeling, session logs, query optimization, indexing",
    badge: "Database",
    category: "backend",
    accent: "#38bdf8",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    id: "n8n",
    name: "n8n Automation",
    desc: "Multi-stage document pipelines, rate-limit safety, error branching",
    badge: "Workflows",
    category: "automation",
    accent: "#f97316",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: "playwright",
    name: "Playwright & Selenium",
    desc: "Page Object Model (POM), autonomous scraping, bot testing",
    badge: "Scraping",
    category: "automation",
    accent: "#22c55e",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "codeql",
    name: "CodeQL & Semgrep",
    desc: "Static application security testing (SAST) & vulnerability hardening",
    badge: "Security",
    category: "backend",
    accent: "#eab308",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "cloud",
    name: "Oracle Cloud (OCI) & Linux",
    desc: "Cloud instance provisioning, cron automation, daemon processes",
    badge: "Cloud",
    category: "automation",
    accent: "#f43f5e",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    id: "moviepy",
    name: "MoviePy & Media Pipelines",
    desc: "Programmatic video assembly, subtitle overlays, audio mixing",
    badge: "Media",
    category: "ai",
    accent: "#ec4899",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    id: "languages",
    name: "Core Languages",
    desc: "Python, Java, C, C++, JavaScript, SQL",
    badge: "Languages",
    category: "backend",
    accent: "#64748b",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const FILTERS = [
  { key: "all", label: "All Stack" },
  { key: "ai", label: "AI / ML & Agents" },
  { key: "backend", label: "Backend & Databases" },
  { key: "voice", label: "Voice & Real-Time" },
  { key: "automation", label: "Automation & Cloud" },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills =
    activeFilter === "all"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeFilter);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="skills" className="section-block">
      <div className="section-header">
        <div className="section-tag">
          <span className="tag-index">04</span>
          <span className="tag-rule"></span>
          <span className="tag-label">TECHNICAL CAPABILITIES</span>
        </div>
        <h2 className="section-title">Tools &amp; Architecture Stack</h2>
        <p className="section-subtitle">
          A curated view of technologies I use to build real-world, high-performance systems.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="skills-filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-pill ${activeFilter === f.key ? "active" : ""}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="skills-spotlight-grid">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="skill-card"
            data-category={skill.category}
            onMouseMove={handleMouseMove}
            style={{ display: "flex", opacity: 1 }}
          >
            <div className="skill-spotlight-glow"></div>
            <div
              className="skill-icon-badge"
              style={{ ["--accent" as string]: skill.accent }}
            >
              {skill.icon}
            </div>
            <div className="skill-info">
              <h4 className="skill-name">{skill.name}</h4>
              <span className="skill-desc">{skill.desc}</span>
            </div>
            <span className="skill-badge">{skill.badge}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
