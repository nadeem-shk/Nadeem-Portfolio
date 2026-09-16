// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-10 pt-28 pb-20"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto text-center">

        {/* AVAILABLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <span className="bg-slate-800/70 border border-slate-700 text-cyan-400 px-4 py-2 rounded-full text-sm">
            👋 Available For Work
          </span>
        </motion.div>

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Nadeem 👋
        </motion.h1>

        {/* TYPEWRITER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <span className="text-2xl md:text-4xl font-semibold text-white">
            <Typewriter
              words={[
                "MERN STACK PHP Developer",
                "React Developer",
                "Tailwind CSS Expert",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </span>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-300 text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-10"
        >
          I build modern, fast and responsive websites using
          React & Tailwind CSS. Passionate about creating
          beautiful user experiences and clean UI designs.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >

          {/* OPEN CV */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
          >
            📄 Open CV
          </a>

          {/* CONTACT */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-cyan-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-slate-800/60 hover:scale-105"
          >
            ✉️ Contact Me
          </a>
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-5 mt-12"
        >

          {/* GITHUB */}
          <a
            href="https://github.com/nadeem-shk"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-110"
          >
            🔗
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/shaikh-nadeem-0357b1391/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-110"
          >
            💼
          </a>

          {/* EMAIL */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shaikhnadeem84300@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xl hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-110"
          >
            📧
          </a>
        </motion.div>

        {/* SCROLL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center text-gray-500"
        >
          <span className="text-xs tracking-widest mb-2">
            SCROLL
          </span>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="w-[2px] h-10 bg-gradient-to-b from-cyan-400 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;