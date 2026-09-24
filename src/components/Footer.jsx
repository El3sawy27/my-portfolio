import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Mohamed Elesawy</span>
        <span>Built with React · JavaScript · Vite</span>
      </div>
    </footer>
  );
}
