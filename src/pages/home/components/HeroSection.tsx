import { motion } from "framer-motion";

const techStack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Git",
  "Vite",
  "Figma",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[url('/background.svg')] overflow-hidden pb-0">
      <div className="absolute left-0 top-0 h-full w-16 sm:w-24 bg-[var(--color-accent)] hidden md:block z-0" />
      <div className="container mx-auto w-full flex flex-col md:flex-row items-center justify-between p-3 sm:px-4 md:px-6 pt-16 sm:pt-20 md:pt-20 gap-8 sm:gap-10 md:gap-0 relative z-10">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-start gap-4 sm:gap-6"
        >
          <span className="text-sm sm:text-base md:text-lg font-semibold text-[var(--color-highlight)] bg-[var(--color-bg)] px-3 sm:px-4 py-1 rounded mb-2 shadow-lg">
            Hello, I am
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--color-white)] leading-tight mb-2">
            Opone Victor
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-light)] mb-3 sm:mb-4">
            Frontend Developer & UI/UX Enthusiast
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--color-light)] max-w-lg mb-4 sm:mb-6 leading-relaxed">
            Building modern, responsive, and intuitive web applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-6 sm:px-7 py-2 sm:py-3 rounded bg-[var(--color-highlight)] text-[var(--color-bg)] font-bold shadow hover:bg-[var(--color-white)] hover:text-[var(--color-bg)] transition text-base sm:text-lg text-center"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="px-6 sm:px-7 py-2 sm:py-3 rounded border-2 border-[var(--color-white)] text-[var(--color-white)] font-bold hover:bg-[var(--color-white)] hover:text-[var(--color-bg)] transition text-base sm:text-lg text-center"
            >
              My Work
            </a>
          </div>
        </motion.div>
        {/* Right: Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center items-center relative min-h-[280px] sm:min-h-[320px]"
        >
          {/* <div className="relative w-64 sm:w-72 sm:h-72 md:w-96 md:h-96 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-6 sm:border-8 border-[var(--color-highlight)] opacity-80 animate-pulse"></div>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Opone Victor"
              className="w-full h-full object-cover rounded-full border-4 border-[var(--color-white)] shadow-2xl"
            />
           
            <svg
              className="absolute -z-10 left-0 top-0 w-full h-full"
              viewBox="0 0 320 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="160"
                cy="160"
                r="150"
                stroke="var(--color-accent)"
                strokeWidth="8"
                opacity="0.15"
              />
              <circle
                cx="160"
                cy="160"
                r="120"
                stroke="var(--color-highlight)"
                strokeWidth="4"
                opacity="0.12"
              />
              <line
                x1="40"
                y1="40"
                x2="280"
                y2="280"
                stroke="var(--color-highlight)"
                strokeWidth="2"
                opacity="0.2"
              />
              <line
                x1="280"
                y1="40"
                x2="40"
                y2="280"
                stroke="var(--color-highlight)"
                strokeWidth="2"
                opacity="0.2"
              />
            </svg>
          </div> */}
        </motion.div>
      </div>
      {/* Tech stack bar */}
      <div className="w-full bg-[var(--color-accent)] py-2 sm:py-3 sm:mt-10">
        <div className="container mx-auto flex flex-wrap justify-center gap-3 sm:gap-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs sm:text-sm md:text-base text-[var(--color-white)] font-semibold tracking-wide uppercase opacity-80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
