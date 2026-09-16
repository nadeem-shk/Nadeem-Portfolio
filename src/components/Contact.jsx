// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
  const contactItems = [
    {
      icon: "📞",
      title: "Call Me",
      link: "tel:+919356380686",
      text: "+91 9356380686",
      border: "hover:border-blue-400",
      shadow: "hover:shadow-blue-500/20",
      color: "text-blue-400",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      link: "https://wa.me/919356380686",
      text: "Chat on WhatsApp",
      border: "hover:border-green-400",
      shadow: "hover:shadow-green-500/20",
      color: "text-green-400",
    },
    {
      icon: "📧",
      title: "Email",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=shaikhnadeem84300@gmail.com",
      text: "shaikhnadeem84300@gmail.com",
      border: "hover:border-cyan-400",
      shadow: "hover:shadow-cyan-500/20",
      color: "text-cyan-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative px-6 md:px-10 py-24 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch ✨
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Feel free to contact me for projects, collaborations,
            internships or MERN STACK PHP development opportunities.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className={`
                group
                relative
                overflow-hidden
                bg-slate-900/60
                backdrop-blur-lg
                border
                border-slate-700/40
                rounded-3xl
                p-10
                text-center
                transition-all
                duration-500
                shadow-xl
                ${item.border}
                ${item.shadow}
              `}
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>

              {/* ICON */}
              <div className="relative z-10 text-6xl mb-6">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="relative z-10 text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              {/* TEXT */}
              <p
                className={`
                  relative z-10
                  ${item.color}
                  text-base md:text-lg
                  font-medium
                  break-all
                  group-hover:underline
                  underline-offset-4
                `}
              >
                {item.text}
              </p>

            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Contact;