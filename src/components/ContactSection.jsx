import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../data/portfolioData";

export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-box">
        <p className="section-label">05 / CONTACT</p>
        <h2>
          Have a problem worth
          <br />
          <em>building a solution for?</em>
        </h2>
        <p>
          I'm open to junior software engineering, backend and full-stack
          JavaScript opportunities.
        </p>
        <a
          className="primary-btn big"
          href="mailto:mohamed29.elesawy@gmail.com"
        >
          Get in touch <Mail size={18} />
        </a>
        <div className="social-row">
          {socialLinks.map(({ label, href }) => {
            const Icon = label === "GitHub" ? Github : Linkedin;
            return (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                <Icon size={17} /> {label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
