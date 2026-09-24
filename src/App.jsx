import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
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
      <NavBar
        menu={menu}
        setMenu={setMenu}
        dark={dark}
        setDark={setDark}
        closeMenu={closeMenu}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
