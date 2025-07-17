import { motion } from "framer-motion";

export default function BioSection() {
  return (
    <section className="w-full bg-[var(--color-bg)] py-12 sm:py-16 flex justify-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-8 sm:gap-10 sm:px-6">
        {/* Left: Bio Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-[var(--color-light)] text-base sm:text-lg md:text-xl leading-relaxed"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-white)] mb-3 sm:mb-4">
            About Me
          </h2>
          <p className="leading-relaxed">
            I&apos;m a frontend developer with over 3 years of experience
            building scalable, user-focused web applications. My passion lies in
            creating modern, responsive UIs that solve real-world problems. I
            specialize in React, TypeScript, and Tailwind CSS and have
            contributed to high-impact products in the government, charity, and
            e-commerce sectors. I enjoy collaborating with teams and constantly
            refining my skills through learning and experimentation.
          </p>
        </motion.div>
        {/* Right: Illustration/Headshot */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex justify-center"
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:h-64 rounded-full bg-[var(--color-accent)]/30 border-4 border-[var(--color-highlight)] flex items-center justify-center overflow-hidden">
            {/* Placeholder SVG illustration */}
            <svg
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="64"
                cy="64"
                r="64"
                fill="var(--color-accent)"
                fillOpacity="0.15"
              />
              <ellipse
                cx="64"
                cy="80"
                rx="32"
                ry="24"
                fill="var(--color-highlight)"
                fillOpacity="0.25"
              />
              <circle
                cx="64"
                cy="56"
                r="24"
                fill="var(--color-accent)"
                fillOpacity="0.4"
              />
              <ellipse
                cx="64"
                cy="56"
                rx="12"
                ry="16"
                fill="var(--color-highlight)"
                fillOpacity="0.7"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
