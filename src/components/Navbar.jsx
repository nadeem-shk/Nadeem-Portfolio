import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "projects", "contact"];

      for (const section of sections) {
        const el = document.getElementById(section);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu after clicking
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="text-3xl font-bold text-blue-400"
        >
          Nadeem
        </a>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className={`relative text-sm font-semibold transition duration-300 hover:text-cyan-400 ${
                activeSection === link.href.replace("#", "")
                  ? "text-cyan-400"
                  : "text-gray-300"
              }`}
            >
              {link.name}

              {activeSection === link.href.replace("#", "") && (
                <motion.div
                  layoutId="navbar"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-cyan-400 rounded-full"
                />
              )}
            </a>
          ))}

          {/* Theme Button */}
          <button
            onClick={() => {
              document.documentElement.classList.toggle("dark");
            }}
            className="p-3 rounded-full border border-slate-700 bg-slate-800/50 hover:bg-slate-700 transition"
          >
            🌞
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-t border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-6 text-center">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`text-lg py-3 rounded-xl transition duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-slate-800 text-cyan-400"
                      : "text-white hover:bg-slate-800"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Theme Button */}
              <button
                onClick={() => {
                  document.documentElement.classList.toggle("dark");
                  setOpen(false);
                }}
                className="bg-slate-800 py-3 rounded-xl text-yellow-400"
              >
                🌞 Toggle Theme
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;