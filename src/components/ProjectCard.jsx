const ProjectCard = ({
  title,
  description,
  liveLink,
}) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        bg-slate-900/60
        backdrop-blur-lg
        border
        border-slate-700/40
        rounded-3xl
        p-7
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-cyan-400/40
        hover:shadow-2xl
        hover:shadow-cyan-500/10
        flex
        flex-col
        h-full
      "
    >

      {/* GLOW EFFECT */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>

      {/* PROJECT ICON */}
      <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-2xl mb-6 shadow-lg shadow-cyan-500/20">
        🚀
      </div>

      {/* TITLE */}
      <h3
        className="
          relative z-10
          text-2xl
          font-bold
          text-white
          mb-4
          transition-all
          duration-300
          group-hover:text-cyan-400
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          relative z-10
          text-gray-400
          leading-relaxed
          text-sm
          md:text-base
          flex-1
          mb-8
        "
      >
        {description}
      </p>

      {/* BUTTON */}
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative z-10
          inline-flex
          items-center
          justify-center
          gap-2
          w-full
          sm:w-auto
          bg-gradient-to-r
          from-blue-500
          to-cyan-500
          hover:from-blue-600
          hover:to-cyan-600
          text-white
          px-6
          py-3
          rounded-xl
          font-semibold
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-lg
          hover:shadow-cyan-500/20
        "
      >
        View Project
        <span className="text-lg group-hover:translate-x-1 transition duration-300">
          →
        </span>
      </a>

    </div>
  );
};

export default ProjectCard;