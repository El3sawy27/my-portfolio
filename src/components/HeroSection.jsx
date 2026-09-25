import React from "react";
import { ArrowUpRight, ChevronDown, Github, MapPin } from "lucide-react";
import { profileStats } from "../data/portfolioData";

export default function HeroSection() {
  const profileImage = `${import.meta.env.BASE_URL}assets/Me.jpeg`;

  return (
    <section id="home" className="hero section">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> Available for junior opportunities
          </div>
          <p className="kicker">FULL-STACK JAVASCRIPT DEVELOPER</p>
          <h1>
            Building useful software,
            <br />
            <em>one system at a time.</em>
          </h1>
          <p className="hero-text">
            I design and build modern web applications and reliable REST APIs
            with React, Node.js, Express and MongoDB, with a strong focus on
            clean architecture and user-focused product thinking.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#projects">
              View projects <ArrowUpRight size={18} />
            </a>
            <a
              className="secondary-btn"
              href="https://github.com/El3sawy27"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
          <div className="hero-stats">
            {profileStats.map(({ value, label }) => (
              <div className="stat-box" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="hero-meta">
            <span>
              <MapPin size={15} /> Cairo, Egypt
            </span>
            <span>CS Graduate · 2025</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="profile-photo-shell">
            <img
              src={profileImage}
              alt="Mohamed Elesawy portrait"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.nextSibling.style.display = "grid";
              }}
            />
            <div
              className="profile-fallback"
              aria-label="Mohamed Elesawy initials"
            >
              ME
            </div>
          </div>

          <div className="orb orb-a" />
          <div className="orb orb-b" />
          <div className="code-card">
            <div className="code-top">
              <span />
              <span />
              <span />
              <b>server.js</b>
            </div>
            <pre>{`const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(
    "API is running"
  );
});`}</pre>
            <div className="code-status">
              <span className="status-dot" /> backend / node.js
            </div>
          </div>
          <div className="floating-chip chip-one">Node.js</div>
          <div className="floating-chip chip-two">React</div>
          <div className="floating-chip chip-three">MongoDB</div>
        </div>
      </div>
      <a className="scroll-cue" href="#about">
        <ChevronDown size={17} /> Scroll to explore
      </a>
    </section>
  );
}
