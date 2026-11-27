"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ROLES = [
  "Multi-Agent AI Systems.",
  "Real-Time Voice Bots.",
  "Automation Pipelines.",
  "Backend APIs & Services.",
  "LangGraph Workflows.",
];

interface HeroProps {
  onCopyEmail: () => void;
}

export default function Hero({ onCopyEmail }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let delay = isDeleting ? 45 : 90;

    if (!isDeleting && charIdx === current.length) {
      delay = 1800;
    } else if (isDeleting && charIdx === 0) {
      delay = 400;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIdx < current.length) {
          setTypedText(current.substring(0, charIdx + 1));
          setCharIdx((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIdx > 0) {
          setTypedText(current.substring(0, charIdx - 1));
          setCharIdx((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setRoleIdx((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, roleIdx]);

  const handleEmailClick = () => {
    onCopyEmail();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        {/* Left Column: Bio & CTAs */}
        <div className="hero-left">
          <div className="status-badge-wrapper">
            <span className="status-dot"></span>
            <span className="status-text">
              Available for High-Impact Roles · Full-Time &amp; Freelance
            </span>
          </div>

          <p className="hero-eyebrow">
            Artificial Intelligence &amp; Machine Learning Engineer
          </p>

          <h1 className="hero-name">
            Hi, I&apos;m <br />
            <span className="gradient-text hero-name-highlight">
              Jiten Mistry
            </span>
          </h1>

          <div
            className="hero-typed-wrapper"
            aria-label="I build multi-agent AI systems"
          >
            <span className="typed-prefix">I build </span>
            <span className="typed-text">{typedText}</span>
            <span className="typed-cursor" aria-hidden="true">
              |
            </span>
          </div>

          <p className="hero-bio">
            Undergraduate in AI &amp; ML with production experience shipping
            real-time conversational voice bots (Twilio &amp; WebSockets),
            autonomous multi-agent systems (LangGraph), and fault-tolerant
            automation pipelines at <strong>Pragnakalp Techlabs</strong>.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary" id="heroCtaProjects">
              <span>View My Projects</span>
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline" id="heroCtaContact">
              <span>Get In Touch</span>
            </a>
          </div>

          <div className="hero-chips-row">
            <div
              className={`copy-email-box ${copied ? "copied" : ""}`}
              onClick={handleEmailClick}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleEmailClick();
                }
              }}
              role="button"
              tabIndex={0}
              title="Click to copy email address"
            >
              <svg
                className="icon-sm copy-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span className="email-address">jiten.j.mistry@gmail.com</span>
              <span className="copy-feedback">Copied!</span>
            </div>

            <a
              href="https://linkedin.com/in/jiten-mistry"
              target="_blank"
              rel="noopener noreferrer"
              className="social-chip"
            >
              <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a href="tel:+918780693961" className="social-chip">
              <svg
                className="icon-sm"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 8780693961</span>
            </a>
          </div>
        </div>

        {/* Right Column: Avatar + Floating Tech Badges */}
        <div className="hero-right">
          <div className="hero-avatar-scene">
            <div className="avatar-glow-ring ring-outer"></div>
            <div className="avatar-glow-ring ring-inner"></div>
            <div className="hero-avatar-frame">
              <Image
                src="/avatar.jpg"
                alt="Jiten Mistry"
                width={360}
                height={360}
                className="hero-avatar-img"
                preload
              />
              <span className="avatar-live-badge">
                <span className="status-dot"></span>
                Open to Work
              </span>
            </div>

            <div className="float-badge badge-top-left">
              <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.099 5.88H17.9C21.264 5.88 24 8.625 24 12s-2.736 6.12-6.099 6.12H6.1C2.736 18.12 0 15.375 0 12s2.736-6.12 6.099-6.12Zm5.419 9.487c.148.156.367.148.561.108h.002c.09-.073-.038-.166-.16-.254-.074-.054-.145-.105-.166-.15.068-.083-.132-.27-.289-.417a1.539 1.539 0 0 1-.15-.151c-.11-.12-.155-.273-.2-.427a1.575 1.575 0 0 0-.11-.297c-.304-.708-.653-1.41-1.143-2.01-.315-.398-.674-.755-1.033-1.112-.232-.23-.463-.46-.683-.701-.226-.234-.362-.521-.499-.81-.114-.24-.228-.482-.396-.693-.507-.75-2.107-.955-2.342.105 0 .033-.01.054-.039.075-.13.095-.245.203-.342.334-.238.332-.274.895.022 1.193l.001-.020c.01-.15.02-.29.139-.399.228.198.576.268.841.12.32.46.422 1.015.525 1.572.085.464.17.93.382 1.341l.014.022c.124.208.25.419.41.6.059.09.178.187.297.284.157.128.314.256.329.366v.146c-.001.29-.002.59.184.83.103.208-.15.418-.352.392a.989.989 0 0 1-.354-.043c-.165-.04-.329-.08-.462-.003-.038.04-.091.042-.145.043-.064.002-.129.004-.167.07a.29.29 0 0 1-.045.066c-.042.051-.087.107-.033.149l.015-.011c.082-.063.16-.123.27-.085-.014.082.039.103.092.125l.027.012a.357.357 0 0 1-.008.057c-.009.046-.017.09.018.13a.605.605 0 0 0 .046-.056c.037-.046.073-.094.139-.11.144.192.289.112.471.012.206-.114.459-.253.81-.056-.135-.007-.255.01-.345.121-.023.025-.042.054-.002.087.207-.135.294-.086.375-.04.06.032.115.063.212.024l.07-.037c.155-.084.314-.17.499-.14-.139.04-.188.127-.242.223-.026.047-.054.097-.094.143-.021.021-.03.046-.007.082.29-.024.4-.098.548-.197.07-.047.15-.1.261-.157.124-.076.248-.028.368.02.13.05.255.1.371-.013.037-.035.083-.035.129-.036.016 0 .033 0 .05-.002-.037-.194-.24-.191-.448-.189-.24.003-.483.005-.475-.295.222-.152.224-.415.226-.665z" />
              </svg>
              <span>LangGraph</span>
            </div>

            <div className="float-badge badge-top-right">
              <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-3.5 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-7 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
              </svg>
              <span>Twilio</span>
            </div>

            <div className="float-badge badge-mid-left">
              <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.81v.825H3.924C1.84 6.231 0 7.42 0 11.83c0 4.412 1.84 5.398 3.924 5.398H5.6v-2.582c0-2.39 2.028-4.394 4.48-4.394h5.808c2.002 0 3.633-1.63 3.633-3.633V3.633C19.521 1.63 17.89 0 15.887 0h-3.973zm-2.09 1.81a1.01 1.01 0 1 1 0 2.02 1.01 1.01 0 0 1 0-2.02zM18.076 6.772v2.583c0 2.39-2.028 4.394-4.48 4.394H7.788c-2.002 0-3.633 1.63-3.633 3.633v3.589c0 2.003 1.631 3.634 3.633 3.634h3.973c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75h-5.81v-.825h8.092c2.084 0 3.924-1.189 3.924-5.599 0-4.412-1.84-5.398-3.924-5.398H18.076zm-3.99 13.608a1.01 1.01 0 1 1 0 2.02 1.01 1.01 0 0 1 0-2.02z" />
              </svg>
              <span>Python</span>
            </div>

            <div className="float-badge badge-mid-right">
              <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-3.5 19.5v-7.5H5.25L13.75 3v7.5h3.25L8.5 19.5z" />
              </svg>
              <span>FastAPI</span>
            </div>

            <div className="float-badge badge-bottom-left">
              <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.146 0h3.924v18.165c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.001 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204V0zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.143zM24 6.783v2.841h-2.917V24h-3.925V9.624H21.24V6.783H24z" />
              </svg>
              <span>Django REST</span>
            </div>

            <div className="float-badge badge-bottom-right">
              <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698z" />
              </svg>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="hero-impact-strip">
        <div className="impact-metric-box">
          <span className="impact-num">1+</span>
          <span className="impact-label">Years Production AI Engineering</span>
        </div>
        <div className="impact-metric-box">
          <span className="impact-num">8.67</span>
          <span className="impact-label">CHARUSAT B.Tech CGPA</span>
        </div>
        <div className="impact-metric-box">
          <span className="impact-num">&lt;400ms</span>
          <span className="impact-label">Voice Bot Latency</span>
        </div>
        <div className="impact-metric-box">
          <span className="impact-num">SAST</span>
          <span className="impact-label">Semgrep &amp; CodeQL Hardened</span>
        </div>
      </div>
    </section>
  );
}
