"use client";

interface ContactProps {
  onCopyAllContact: () => void;
}

export default function Contact({ onCopyAllContact }: ContactProps) {
  return (
    <section id="contact" className="section-block contact-section">
      <div className="section-header">
        <div className="section-tag">
          <span className="tag-index">06</span>
          <span className="tag-rule"></span>
          <span className="tag-label">CONNECT &amp; COLLABORATE</span>
        </div>
      </div>
      <div className="contact-card">
        <div className="contact-content">
          <span className="contact-pill">INITIATE COLLABORATION</span>
          <h2 className="contact-headline">
            Let&apos;s build something exceptional together.
          </h2>
          <p className="contact-sub">
            Whether you have an upcoming AI project requiring multi-agent
            orchestration, need low-latency telephony voice bot engineering, or
            want to discuss full-time engineering roles, I&apos;d love to connect.
          </p>

          <div className="contact-channels">
            <a href="mailto:jiten.j.mistry@gmail.com" className="channel-chip">
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
              <span>jiten.j.mistry@gmail.com</span>
            </a>
            <a href="tel:+918780693961" className="channel-chip">
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
            <a
              href="https://linkedin.com/in/jiten-mistry"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-chip"
            >
              <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
              <span>linkedin.com/in/jiten-mistry</span>
            </a>
          </div>

          <div className="contact-cta-row">
            <button
              className="btn btn-outline btn-lg"
              id="copyContactBtn"
              onClick={onCopyAllContact}
            >
              <span>Copy Contact Info</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
