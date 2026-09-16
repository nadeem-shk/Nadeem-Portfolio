// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: "📧",
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=shaikhnadeem84300@gmail.com",
      color: "hover:border-cyan-400 hover:bg-cyan-500/10",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      href: "https://wa.me/919356380686",
      color: "hover:border-green-400 hover:bg-green-500/10",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shaikh-nadeem-0357b1391/",
      color: "hover:border-blue-400 hover:bg-blue-500/10",
    },
    {
      icon: "🔗",
      label: "GitHub",
      href: "https://github.com/nadeem-shk",
      color: "hover:border-purple-400 hover:bg-purple-500/10",
    },
  ];

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-slate-800/50 bg-slate-950"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* ABOUT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-5 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Nadeem
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              MERN STACK PHP Developer passionate about building
              responsive, modern and user-friendly web experiences
              using React & Tailwind CSS.
            </p>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-4">

              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white text-xl font-semibold mb-5">
              Connect With Me
            </h4>

            <div className="flex gap-4 flex-wrap">

              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className={`
                    w-14 h-14
                    flex items-center justify-center
                    rounded-2xl
                    bg-slate-900/70
                    border border-slate-700/40
                    text-2xl
                    transition-all
                    duration-300
                    shadow-lg
                    ${link.color}
                  `}
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}

            </div>
          </motion.div>

        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-800/50 pt-8 text-center"
        >
          <p className="text-gray-500 text-sm md:text-base">
            © 2026 Nadeem. Built with ❤️ using React & Tailwind CSS.
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;