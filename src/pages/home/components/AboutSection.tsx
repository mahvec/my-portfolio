import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-highlight)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 21V7m8 14V7" />
      </svg>
    ),
    title: "Website Development",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-highlight)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3v4M8 3v4" />
      </svg>
    ),
    title: "App Development",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-highlight)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16v16H4z" />
        <path d="M8 4v16" />
      </svg>
    ),
    title: "Website Hosting",
  },
];

const stats = [
  { value: "20", label: "Completed Projects" },
  { value: "95%", label: "Client satisfaction" },
  { value: "3+", label: "Years of experience" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-[var(--color-bg)] py-16 sm:py-20 md:py-24 flex flex-col items-center"
    >
      <div className="container p-3 lg:p-0 w-full flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 sm:px-6">
        {/* Left: Features */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col gap-6 sm:gap-8 w-full md:w-auto"
        >
          <div className="flex flex-col gap-4 sm:gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 sm:gap-4 bg-[color-mix(in srgb,var(--color-accent) 8%,var(--color-bg))] rounded-xl p-3 w-fit sm:p-4 "
              >
                <div>{f.icon}</div>
                <span className="text-base sm:text-lg text-[var(--color-white)] font-semibold">
                  {f.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Right: About Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-[var(--color-light)] text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-white)] mb-3 sm:mb-4">
            About Me
          </h2>
          <p className="mb-6 sm:mb-8 leading-relaxed">
            I am a frontend developer with over 3 years of experience building
            responsive, scalable, and visually engaging web applications. I
            specialize in React, TypeScript, Tailwind CSS, and Redux Toolkit. I
            am passionate about UI/UX, performance, and clean code.
          </p>
          <div className="flex gap-6 sm:gap-10 mt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-highlight)]">
                  {stat.value}{" "}
                  <span className="text-[var(--color-accent)] font-bold">
                    +
                  </span>
                </span>
                <span className="text-xs sm:text-sm text-[var(--color-light)] mt-1 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
