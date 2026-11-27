export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-brand">Jiten Jayeshkumar Mistry</span>
          <span className="footer-role">
            AI &amp; Machine Learning Engineer • Backend Developer
          </span>
        </div>
        <div className="footer-right">
          <span className="footer-copy">
            © 2026 Jiten Jayeshkumar Mistry. All rights reserved.
          </span>
          <a href="#hero" className="back-to-top" aria-label="Back to top">
            <svg
              className="icon-sm"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
