import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section ruled">
      <div className="container two-col">
        <div>
          <p className="section-label">01 / ABOUT</p>
          <h2>
            Curious by nature.
            <br />
            <span>Practical by design.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p className="lead">
            I'm Mohamed, a Computer Science graduate focused on software
            engineering and full-stack JavaScript development.
          </p>
          <p>
            I enjoy designing APIs, working with databases, turning requirements
            into clean interfaces, and understanding how the pieces of a web
            application fit together.
          </p>
          <p>
            My strongest current direction is Node.js backend development, while
            keeping my frontend skills strong enough to build complete products.
          </p>
          <a className="text-link" href="#projects">
            See what I've built <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
