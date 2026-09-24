import React from "react";
import SectionHeader from "./SectionHeader";
import { skillGroups } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <section id="skills" className="section ruled">
      <div className="container">
        <SectionHeader
          label="02 / TOOLKIT"
          title="Technologies I work with."
          note="A practical stack centered around JavaScript and the web."
        />
        <div className="skills-grid">
          {skillGroups.map(({ title, icon: Icon, items }) => (
            <article className="skill-card" key={title}>
              <div className="skill-icon">
                <Icon size={21} />
              </div>
              <h3>{title}</h3>
              <div className="tags">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
