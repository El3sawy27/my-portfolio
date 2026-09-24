import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-label">03 / SELECTED WORK</p>
            <h2>Things I've built.</h2>
          </div>
          <a
            className="text-link"
            href="https://github.com/El3sawy27"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub <ExternalLink size={16} />
          </a>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article
              className={`project-card ${project.accent}`}
              key={project.title}
            >
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub`}
                >
                  <Github size={19} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live demo`}
                >
                  <ExternalLink size={19} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
