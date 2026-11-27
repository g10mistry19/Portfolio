export default function Experience() {
  return (
    <section id="experience" className="section-block">
      <div className="section-header">
        <div className="section-tag">
          <span className="tag-index">02</span>
          <span className="tag-rule"></span>
          <span className="tag-label">PRODUCTION TRACK RECORD</span>
        </div>
        <h2 className="section-title">Professional Experience</h2>
      </div>

      <div className="experience-timeline">
        {/* Experience 1: Pragnakalp Techlabs */}
        <article className="exp-card">
          <div className="exp-meta-header">
            <div className="exp-company-block">
              <h3 className="exp-role">Jr. Software Engineer</h3>
              <span className="exp-company">Pragnakalp Techlabs</span>
            </div>
            <div className="exp-period-badge">Dec 2025 – Oct 2026</div>
          </div>
          <p className="exp-premise">
            Converted to full-time role following a 6-month technical training
            program, recognized for high production performance and clean code
            craftsmanship.
          </p>

          <div className="exp-subprojects">
            {/* Subproject A: AI Voice Call Platform */}
            <div className="subproject-box">
              <div className="subproject-title-row">
                <div className="subproject-indicator"></div>
                <h4>AI-Powered Automated Voice Call Management Platform</h4>
              </div>
              <p className="subproject-desc">
                Engineered and maintained a full-lifecycle production voice bot,
                orchestrating telephony, bidirectional audio streams, and LLM
                inference.
              </p>
              <ul className="bullet-list">
                <li>
                  Integrated <strong>Twilio telephony APIs</strong> for real-time
                  inbound/outbound voice communication, coordinating the
                  end-to-end call handling state machine.
                </li>
                <li>
                  Architected backend services in{" "}
                  <strong>Django REST Framework</strong> utilizing clean{" "}
                  <em>service-and-selector layer</em> principles to cleanly
                  isolate data, telephony, and inference modules.
                </li>
                <li>
                  Engineered context-aware dynamic conversational flows with intent
                  recognition and state preservation for natural verbal dialogue.
                </li>
                <li>
                  Implemented sub-second{" "}
                  <strong>Speech-to-Text (STT)</strong> and{" "}
                  <strong>Text-to-Speech (TTS)</strong> streaming over
                  bidirectional <strong>WebSockets</strong>.
                </li>
                <li>
                  Optimized relational database queries in{" "}
                  <strong>PostgreSQL</strong> to support concurrent voice
                  sessions and detailed call-log telemetries at scale.
                </li>
                <li>
                  Conducted automated static analysis and security hardening using{" "}
                  <strong>CodeQL</strong> and <strong>Semgrep</strong> ahead of
                  production deployment.
                </li>
              </ul>
              <div className="tech-pill-row">
                <span className="tech-pill">Twilio</span>
                <span className="tech-pill">WebSockets</span>
                <span className="tech-pill">Django REST</span>
                <span className="tech-pill">PostgreSQL</span>
                <span className="tech-pill">STT / TTS</span>
                <span className="tech-pill">CodeQL &amp; Semgrep</span>
              </div>
            </div>

            {/* Subproject B: AI Resume Matching & Interview Generator */}
            <div className="subproject-box">
              <div className="subproject-title-row">
                <div className="subproject-indicator"></div>
                <h4>AI Resume Matching &amp; Automated Interview Generator</h4>
              </div>
              <p className="subproject-desc">
                Architected an end-to-end recruitment workflow in n8n featuring
                multi-modal document parsing, rate-limit resilience, and automated
                screening.
              </p>
              <ul className="bullet-list">
                <li>
                  Constructed multi-stage ingestion filters (MIME type, file
                  extension, size, permissions) with automated error logging for
                  rejected files.
                </li>
                <li>
                  Engineered dual-path PDF parsing: direct extraction for standard
                  text PDFs, plus PDF.co rasterization combined with{" "}
                  <strong>LLM Vision chat-completion APIs</strong> for
                  scanned/image resumes.
                </li>
                <li>
                  Embedded AI Agents with structured JSON schema enforcement,
                  complete with failure branches for robust edge-case triage.
                </li>
                <li>
                  Devised rate-limit-safe execution via{" "}
                  <em>Loop-Over-Items</em> batching with adaptive wait delays
                  across OCR and LLM endpoints to eliminate HTTP 429 throttling.
                </li>
                <li>
                  Implemented automated candidate interview question generation
                  (via Groq/OpenAI chains) and complete audit trail sync to
                  Google Sheets.
                </li>
              </ul>
              <div className="tech-pill-row">
                <span className="tech-pill">n8n</span>
                <span className="tech-pill">OpenAI / Groq LLMs</span>
                <span className="tech-pill">Vision OCR</span>
                <span className="tech-pill">Google Sheets API</span>
                <span className="tech-pill">Fault-Tolerant Loops</span>
              </div>
            </div>
          </div>
        </article>

        {/* Experience 2: Ranniti Business Consultants */}
        <article className="exp-card">
          <div className="exp-meta-header">
            <div className="exp-company-block">
              <h3 className="exp-role">Business Analyst Intern</h3>
              <span className="exp-company">Ranniti Business Consultants</span>
            </div>
            <div className="exp-period-badge">May 2024 – Jun 2024</div>
          </div>
          <div className="subproject-box">
            <div className="subproject-title-row">
              <div className="subproject-indicator"></div>
              <h4>Automated Sales Analysis &amp; Recruitment Workflow System</h4>
            </div>
            <p className="subproject-desc">
              Developed Python-based automated analytical pipelines to ingest raw
              sales datasets and produce actionable business intelligence
              dashboards.
            </p>
            <ul className="bullet-list">
              <li>
                Created automated data transformation scripts calculating revenue
                trajectories, year-on-year growth, and market tier breakdowns.
              </li>
              <li>
                Engineered interactive visual reporting dashboards with{" "}
                <strong>Matplotlib</strong> and <strong>Seaborn</strong>,
                automating formatted Excel distribution via{" "}
                <strong>OpenPyXL</strong>.
              </li>
              <li>
                Analyzed Recruitment Management System workflows, formulating
                candidate progress metrics and tracking pipeline velocity.
              </li>
            </ul>
            <div className="tech-pill-row">
              <span className="tech-pill">Python</span>
              <span className="tech-pill">Pandas</span>
              <span className="tech-pill">Matplotlib &amp; Seaborn</span>
              <span className="tech-pill">OpenPyXL</span>
              <span className="tech-pill">Analytics</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
