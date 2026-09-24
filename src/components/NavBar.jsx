import React from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "../data/portfolioData";

export default function NavBar({ menu, setMenu, dark, setDark, closeMenu }) {
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">ME</span>
          <span>Mohamed Elesawy</span>
        </a>

        <div className={`nav-links ${menu ? "open" : ""}`}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
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
  );
}
