import { motion } from "framer-motion";

export default function AboutHeroSection() {
  return (
    <section className="relative w-full bg-primary py-12 sm:py-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Optional SVG background accent */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full object-cover opacity-20"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#1d665d"
            fillOpacity="0.18"
            d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center gap-3 sm:gap-4 px-4 sm:px-6"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-accent">
          About Me
        </h1>
        <h2 className="text-base sm:text-lg md:text-2xl text-highlight/90 font-medium max-w-2xl leading-relaxed">
          More about my journey as a frontend developer
        </h2>
      </motion.div>
    </section>
  );
}
