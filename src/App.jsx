import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

function App() {
  const [dark, setDark] = useState(true);

  // LOAD THEME
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      setDark(false);
    } else {
      setDark(true);
    }
  }, []);

  // APPLY THEME
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // SCROLL TO TOP ON REFRESH
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="
        relative
        overflow-hidden
        min-h-screen
        bg-white
        dark:bg-slate-950
        text-gray-900
        dark:text-white
        transition-colors
        duration-300
      "
    >

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      </div>

      {/* NAVBAR */}
      <Navbar dark={dark} setDark={setDark} />

      {/* MAIN CONTENT */}
      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />

      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP */}
      <WhatsApp />

    </div>
  );
}

export default App;