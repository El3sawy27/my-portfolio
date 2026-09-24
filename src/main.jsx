import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Menu,
  X,
  Server,
  Database,
  Code2,
  Layers3,
  ExternalLink,
  Download,
  MapPin,
  ChevronDown,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "Task Manager API",
    category: "BACKEND / API",
    description:
      "A production-style REST API for task management with authentication, authorization, validation, pagination, RBAC and centralized error handling.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "Joi", "Swagger"],
    github: "https://github.com/El3sawy27/task-manager-api",
    live: "https://task-manager-api-production-5c2a.up.railway.app",
    accent: "burgundy",
  },
  {
    number: "02",
    title: "Nody's Gallery",
    category: "FULL-STACK / REAL-WORLD",
    description:
      "A full-stack gallery platform for a handmade wedding and event business, including product management, favorites, image handling and WhatsApp contact.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/El3sawy27/nodys-gallery",
    live: "https://nodys-gallery.mohamed29-elesawy.workers.dev/",
    accent: "rose",
  },
  {
    number: "03",
    title: "E-Commerce React App",
    category: "FRONTEND / REACT",
    description:
      "A responsive e-commerce interface built around reusable React components and predictable client-side state management.",
    stack: ["React", "Redux Toolkit", "Tailwind CSS", "Vite", "Framer Motion"],
    github: "https://github.com/El3sawy27/E-commerce-Website-Using-React",
    live: "https://el3sawy27.github.io/E-commerce-Website-Using-React/",
    accent: "neutral",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "React",
      "Angular",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "MVC",
      "Validation",
      "Error Handling",
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MongoDB", "Mongoose", "MySQL · Basic"],
  },
  {
    title: "Tools",
    icon: Layers3,
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "Docker · Basic",
      "Vercel",
      "Railway",
    ],
  },
];

function App() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") !== "light",
  );
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const closeMenu = () => setMenu(false);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">ME</span>
            <span>Mohamed Elesawy</span>
          </a>

          <div className={`nav-links ${menu ? "open" : ""}`}>
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <div className="nav-actions">
            <button
              className="icon-btn"
              aria-label="Toggle theme"
              onClick={() => setDark((v) => !v)}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a className="nav-cta" href="#contact">
              Let's talk <ArrowUpRight size={16} />
            </a>
            <button
              className="menu-btn"
              aria-label="Toggle menu"
              onClick={() => setMenu((v) => !v)}
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" /> Available for junior
                opportunities
              </div>
              <p className="kicker">FULL-STACK JAVASCRIPT DEVELOPER</p>
              <h1>
                Building useful software,
                <br />
                <em>one system at a time.</em>
              </h1>
              <p className="hero-text">
                I build modern web applications and REST APIs with React,
                Node.js, Express and MongoDB, with a strong focus on backend
                development.
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
              <div className="hero-meta">
                <span>
                  <MapPin size={15} /> Cairo, Egypt
                </span>
                <span>CS Graduate · 2025</span>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
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
                I enjoy designing APIs, working with databases, turning
                requirements into clean interfaces, and understanding how the
                pieces of a web application fit together.
              </p>
              <p>
                My strongest current direction is Node.js backend development,
                while keeping my frontend skills strong enough to build complete
                products.
              </p>
              <a className="text-link" href="#projects">
                See what I've built <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="section ruled">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-label">02 / TOOLKIT</p>
                <h2>Technologies I work with.</h2>
              </div>
              <p className="section-note">
                A practical stack centered around JavaScript and the web.
              </p>
            </div>
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
                View GitHub <ArrowUpRight size={16} />
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

        <section id="experience" className="section ruled">
          <div className="container two-col">
            <div>
              <p className="section-label">04 / EXPERIENCE</p>
              <h2>
                Learning by
                <br />
                <span>building & teaching.</span>
              </h2>
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-date">2026 — PRESENT</div>
                <div>
                  <h3>Programming Instructor · iSchool</h3>
                  <p>
                    Teaching programming concepts, breaking down technical
                    problems, and helping learners build practical projects.
                  </p>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">2025</div>
                <div>
                  <h3>MEAN Stack Web Development · NTI</h3>
                  <p>
                    210-hour training covering JavaScript, Angular, Node.js,
                    Express.js and MongoDB through practical exercises and
                    projects.
                  </p>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-date">2025</div>
                <div>
                  <h3>B.Sc. Computer Science · Menoufia University</h3>
                  <p>
                    Faculty of Computers & Information · Graduated June 2025.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

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
              <a
                href="https://github.com/El3sawy27"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/el3sawii/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Mohamed Elesawy</span>
          <span>Built with React · JavaScript · Vite</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
