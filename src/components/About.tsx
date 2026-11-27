export default function About() {
  return (
    <section id="about" className="section-block">
      <div className="section-header">
        <div className="section-tag">
          <span className="tag-index">01</span>
          <span className="tag-rule"></span>
          <span className="tag-label">BACKGROUND</span>
        </div>
        <h2 className="section-title">
          Bridging Machine Learning &amp; High-Scale Systems
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-narrative">
          <p className="lead-paragraph">
            I am an Artificial Intelligence &amp; Machine Learning engineer with deep
            hands-on experience shipping live production backends, conversational
            voice infrastructure, and automated multi-agent pipelines.
          </p>
          <p>
            At <strong>Pragnakalp Techlabs</strong>, I engineered an
            enterprise-grade voice bot platform connecting Twilio telephony with
            real-time Speech-to-Text, Large Language Models, and low-latency
            Text-to-Speech synthesis over WebSockets. I don&apos;t just prompt
            models — I design the service-and-selector layers, PostgreSQL database
            schemas, rate-limiting safeguards, and security audit harnesses
            (CodeQL/Semgrep) that enable AI to operate safely in the real world.
          </p>
          <p>
            Whether architecting n8n workflow automations that parse scanned
            documents with multi-modal LLM vision, or orchestrating LangGraph
            multi-agent systems that autonomously research and assemble video
            content, my focus is always on{" "}
            <strong>resilience, speed, and real-world utility</strong>.
          </p>

          <div className="about-pillars">
            <div className="pillar-item">
              <div className="pillar-dot"></div>
              <div>
                <h4>Security-Hardened AI</h4>
                <p>
                  Audited with Semgrep &amp; CodeQL to ensure zero telemetry leakage
                  and robust API endpoint protection.
                </p>
              </div>
            </div>
            <div className="pillar-item">
              <div className="pillar-dot"></div>
              <div>
                <h4>Telemetry &amp; Telephony</h4>
                <p>
                  Bidirectional WebSocket stream handling with dynamic intent
                  parsing and low-latency audio delivery.
                </p>
              </div>
            </div>
            <div className="pillar-item">
              <div className="pillar-dot"></div>
              <div>
                <h4>Autonomous Agents</h4>
                <p>
                  Stateful multi-agent DAGs with self-correction, rate-limit-safe
                  batching, and audit logging.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-side-card">
          <div className="profile-card-inner">
            <div className="profile-avatar-box">
              <div className="avatar-gradient">
                <span className="avatar-letters">JM</span>
              </div>
              <div className="avatar-status-badge">AI/ML</div>
            </div>

            <h3 className="profile-name">Jiten Jayeshkumar Mistry</h3>
            <p className="profile-role">Jr. Software Engineer &amp; AI Researcher</p>

            <div className="info-list">
              <div className="info-row">
                <span className="info-lbl">Location</span>
                <span className="info-val">Navsari, Gujarat, India</span>
              </div>
              <div className="info-row">
                <span className="info-lbl">Education</span>
                <span className="info-val">B.Tech AI &amp; ML (CGPA: 8.67)</span>
              </div>
              <div className="info-row">
                <span className="info-lbl">Languages</span>
                <span className="info-val">English, Gujarati, Hindi, French</span>
              </div>
              <div className="info-row">
                <span className="info-lbl">Current Focus</span>
                <span className="info-val">Multi-Agent Systems &amp; Voice AI</span>
              </div>
            </div>

            <div className="quick-contact-actions">
              <a
                href="mailto:jiten.j.mistry@gmail.com"
                className="btn btn-outline btn-full"
              >
                <svg
                  className="icon-sm"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Send Email
              </a>
              <a
                href="tel:+918780693961"
                className="btn btn-secondary btn-full"
              >
                <svg
                  className="icon-sm"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 8780693961
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
