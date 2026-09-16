import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="px-6 md:px-10 py-24">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          About Me <span className="text-blue-400">✨</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-20 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-12 rounded-full"
        />

        <div className="grid md:grid-cols-3 gap-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500"
          >
            <div className="text-4xl mb-4">💻</div>

            <h3 className="font-bold text-lg mb-2">
             MERN STACK PHP DEVELOPER
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              I build modern and responsive user interfaces with a focus on performance, accessibility, and pixel-perfect design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500"
          >
            <div className="text-4xl mb-4">⚛️</div>

            <h3 className="font-bold text-lg mb-2">
              React Developer
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Component-based architecture, hooks, state management, and scalable React applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500"
          >
            <div className="text-4xl mb-4">🎨</div>

            <h3 className="font-bold text-lg mb-2">
              UI Focused
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Clean, minimal, and user-friendly design that creates delightful digital experiences.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;