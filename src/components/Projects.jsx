// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { portfolioData } from "../Data/portfolioData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 md:px-10 py-24 bg-slate-950"
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
            My Projects <span className="text-cyan-400">🚀</span>
          </h2>

          {/* LINE */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6"></div>

          {/* DESCRIPTION */}
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Here are some of my frontend development projects
            built using React, Tailwind CSS and modern web technologies.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;