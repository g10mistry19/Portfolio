export default function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="section-header">
        <div className="section-tag">
          <span className="tag-index">03</span>
          <span className="tag-rule"></span>
          <span className="tag-label">KEY PROJECTS</span>
        </div>
        <h2 className="section-title">Engineered for Scale &amp; Autonomy</h2>
      </div>

      <div className="projects-deck">
        {/* Project Card 1: Faceless Content Creation Multi-Agent */}
        <div className="project-featured-card card-gradient-agents">
          <div className="project-card-header">
            <div className="project-header-left">
              <span className="badge-featured">MULTI-AGENT AI SYSTEM</span>
              <h3 className="project-title">
                Automated Faceless Content Creation System
              </h3>
            </div>
            <div className="project-year">LangGraph · LangChain</div>
          </div>

          <p className="project-summary">
            A zero-human-intervention autonomous pipeline that transforms a single
            high-level conceptual prompt into fully realized, published social
            media video content.
          </p>

          <div className="project-architecture-flow">
            <div className="arch-step">
              <span className="step-num">01</span>
              <span className="step-label">Prompt Input</span>
            </div>
            <span className="arch-arrow">→</span>
            <div className="arch-step">
              <span className="step-num">02</span>
              <span className="step-label">Research Agent</span>
            </div>
            <span className="arch-arrow">→</span>
            <div className="arch-step">
              <span className="step-num">03</span>
              <span className="step-label">Scriptwriter</span>
            </div>
            <span className="arch-arrow">→</span>
            <div className="arch-step">
              <span className="step-num">04</span>
              <span className="step-label">TTS Voiceover</span>
            </div>
            <span className="arch-arrow">→</span>
            <div className="arch-step">
              <span className="step-num">05</span>
              <span className="step-label">MoviePy Assembler</span>
            </div>
          </div>

          <div className="project-details-grid">
            <div className="detail-col">
              <h4>System Highlights</h4>
              <ul className="bullet-list-sm">
                <li>
                  Orchestrates specialized agent teams with distinct personas and
                  evaluation criteria.
                </li>
                <li>
                  LangGraph cyclical DAG ensures fact-checking and automated script
                  revisions before rendering.
                </li>
                <li>
                  Automated video compilation, subtitles alignment, and background
                  track blending via Python.
                </li>
              </ul>
            </div>
            <div className="detail-col">
              <h4>Core Technologies</h4>
              <div className="tech-pill-row">
                <span className="tech-pill">LangGraph</span>
                <span className="tech-pill">LangChain</span>
                <span className="tech-pill">Python</span>
                <span className="tech-pill">MoviePy</span>
                <span className="tech-pill">OpenAI GPT-4</span>
                <span className="tech-pill">Text-to-Speech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Card 2: IPO GMP Screener & Telegram Bot */}
        <div className="project-featured-card card-gradient-bot">
          <div className="project-card-header">
            <div className="project-header-left">
              <span className="badge-featured">CLOUD AUTOMATION &amp; BOT</span>
              <h3 className="project-title">
                Automated IPO GMP Screener &amp; Telegram Alert Bot
              </h3>
            </div>
            <div className="project-year">Oracle Cloud · Playwright</div>
          </div>

          <p className="project-summary">
            A resilient cloud browser automation bot deployed on Oracle Cloud
            Infrastructure (OCI) that autonomously scrapes live financial grey
            market premiums and broadcasts curated signals to Telegram daily at
            9:00 AM.
          </p>

          <div className="project-details-grid">
            <div className="detail-col">
              <h4>System Highlights</h4>
              <ul className="bullet-list-sm">
                <li>
                  Built using the <strong>Page Object Model (POM)</strong> design
                  pattern, decoupling locator changes from business scrapers.
                </li>
                <li>
                  Filters real-time data from financial portals, isolating
                  active/upcoming bidding windows and discarding closed
                  offerings.
                </li>
                <li>
                  Autonomous cron scheduling on an OCI compute instance with
                  Telegram API notifications and health checks.
                </li>
              </ul>
            </div>
            <div className="detail-col">
              <h4>Core Technologies</h4>
              <div className="tech-pill-row">
                <span className="tech-pill">Playwright</span>
                <span className="tech-pill">Python</span>
                <span className="tech-pill">Oracle Cloud (OCI)</span>
                <span className="tech-pill">Telegram Bot API</span>
                <span className="tech-pill">POM Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
