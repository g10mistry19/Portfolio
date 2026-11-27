const CERTS = [
  {
    name: "Data Structures and Algorithms Using Java",
    meta: "NPTEL (2023)",
  },
  {
    name: "Python Basics (Certified)",
    meta: "HackerRank (2023)",
  },
  {
    name: "Java Basics (Certified)",
    meta: "HackerRank (2023)",
  },
  {
    name: "Database Management Systems",
    meta: "Certified (2024)",
  },
  {
    name: "Introduction to Machine Learning",
    meta: "Certified (2024)",
  },
  {
    name: "Blockchain and Its Applications",
    meta: "Certified (2025)",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-block">
      <div className="section-header">
        <div className="section-tag">
          <span className="tag-index">05</span>
          <span className="tag-rule"></span>
          <span className="tag-label">ACADEMIC &amp; CREDENTIALS</span>
        </div>
        <h2 className="section-title">Education &amp; Milestones</h2>
      </div>

      <div className="edu-grid">
        {/* Education Card */}
        <div className="edu-card">
          <div className="edu-header">
            <div className="edu-icon-badge">
              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <div>
              <span className="edu-period">2022 — 2026</span>
              <h3 className="edu-degree">
                Bachelor of Technology in Artificial Intelligence &amp; Machine
                Learning
              </h3>
              <p className="edu-school">
                Charotar University of Science and Technology (CHARUSAT)
              </p>
            </div>
          </div>
          <div className="edu-stats-row">
            <div className="edu-stat">
              <span className="stat-number">8.67 / 10.0</span>
              <span className="stat-sub">Cumulative CGPA</span>
            </div>
            <div className="edu-stat">
              <span className="stat-number">Specialization</span>
              <span className="stat-sub">
                Multi-Agent Systems &amp; Deep Learning
              </span>
            </div>
          </div>
          <p className="edu-desc">
            Rigorous curriculum emphasizing data structures, algorithms,
            distributed systems, machine learning theory, natural language
            processing, and software engineering principles.
          </p>
        </div>

        {/* Certifications List */}
        <div className="certs-card">
          <h3 className="certs-title">Certifications &amp; Honors</h3>
          <div className="cert-list">
            {CERTS.map((cert) => (
              <div key={cert.name} className="cert-item">
                <div className="cert-bullet"></div>
                <div className="cert-details">
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-meta">{cert.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
