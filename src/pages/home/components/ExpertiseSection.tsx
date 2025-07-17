import { motion } from "framer-motion";

const expertise = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-[var(--color-highlight)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    title: "Responsive Web UI Development",
    desc: "Modern, mobile-first interfaces with pixel-perfect design.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[var(--color-highlight)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "State Management (Redux/Context)",
    desc: "Robust app state with Redux Toolkit and Context API.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[var(--color-highlight)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M8 17l4 4 4-4m-4-5v9" />
      </svg>
    ),
    title: "Agile Collaboration",
    desc: "Teamwork, code reviews, and iterative delivery.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[var(--color-highlight)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
      </svg>
    ),
    title: "Frontend Architecture",
    desc: "DDD, scalable codebases, and maintainable structure.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="w-full bg-[var(--color-bg)] py-24 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="container w-full px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-white)] mb-10 text-center">
          Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-[var(--color-accent)] border-2 border-transparent hover:border-[var(--color-highlight)] rounded-xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-white)] mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-[var(--color-light)] text-center text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
