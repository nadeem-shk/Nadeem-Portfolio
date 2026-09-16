// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const WhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/919356380686"
      target="_blank"
      rel="noopener noreferrer"

      initial={{
        opacity: 0,
        scale: 0.8,
        y: 30,
      }}

      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}

      transition={{
        duration: 0.6,
        delay: 1,
      }}

      whileHover={{
        scale: 1.08,
        y: -5,
      }}

      whileTap={{
        scale: 0.95,
      }}

      className="
        group
        fixed
        bottom-5
        right-5
        md:bottom-8
        md:right-8
        z-50

        flex
        items-center
        gap-3

        bg-green-500/90
        backdrop-blur-lg

        hover:bg-green-600

        text-white

        px-5
        md:px-6

        py-3
        md:py-4

        rounded-full

        shadow-2xl
        shadow-green-500/30

        hover:shadow-green-500/50

        transition-all
        duration-300
      "

      title="Chat on WhatsApp"
    >

      {/* PULSE EFFECT */}
      <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></span>

      {/* ICON */}
      <span className="relative z-10 text-2xl">
        💬
      </span>

      {/* TEXT */}
      <span className="relative z-10 font-semibold text-sm md:text-base whitespace-nowrap">
        Chat on WhatsApp
      </span>

    </motion.a>
  );
};

export default WhatsApp;