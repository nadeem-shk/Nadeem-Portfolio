// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    icon: "🌐",
    color: "from-orange-500 to-orange-300",
  },
  {
    name: "CSS",
    icon: "🎨",
    color: "from-blue-500 to-cyan-300",
  },
  {
    name: "JavaScript",
    icon: "⚡",
    color: "from-yellow-400 to-yellow-200",
  },
  {
    name: "React",
    icon: "⚛️",
    color: "from-cyan-500 to-sky-300",
  },
  {
    name: "Tailwind",
    icon: "🌊",
    color: "from-sky-500 to-cyan-300",
  },
  {
    name: "Git",
    icon: "🔀",
    color: "from-red-500 to-orange-300",
  },
  {
    name: "Bootstrap",
    icon: "🧰",
    color: "from-purple-500 to-violet-300",
  },
  {
    name: "Angular",
    icon: "⬆️",
    color: "from-red-600 to-pink-400",
  },
  {
    name: "Python",
    icon: "🐍",
    color: "from-emerald-500 to-green-300",
  },
  {
    name: "WordPress",
    icon: "📝",
    color: "from-blue-600 to-sky-400",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 md:px-10 py-24"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      </div>

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Tools{" "}
            <span className="text-cyan-400">🛠️</span>
          </h2>

          {/* LINE */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6"></div>

          {/* DESCRIPTION */}
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Technologies and tools I use to create modern,
            responsive and high-performance web applications.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="
                group
                relative
                overflow-hidden
                bg-slate-900/60
                backdrop-blur-lg
                border
                border-slate-700/40
                rounded-3xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                text-center
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:shadow-2xl
                hover:shadow-cyan-500/10
              "
            >

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>

              {/* ICON */}
              <div
                className={`
                  relative z-10
                  w-16 h-16
                  rounded-2xl
                  bg-gradient-to-r
                  ${skill.color}
                  flex
                  items-center
                  justify-center
                  text-3xl
                  mb-5
                  shadow-lg
                  transition-all
                  duration-500
                  group-hover:scale-110
                `}
              >
                {skill.icon}
              </div>

              {/* NAME */}
              <h3 className="relative z-10 text-white font-semibold text-sm md:text-base">
                {skill.name}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;