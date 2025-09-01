import { motion } from "framer-motion";

const skills = [
  "ReactJS",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "Context API",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Vite",
  "Git",
  "Figma",
  "Agile / Scrum",
];

export default function SkillsGridSection() {
  return (
    <section className="w-full bg-primary py-12 sm:py-16 flex flex-col items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.07 } },
        }}
        className="max-w-4xl w-full px-4 sm:px-6 p-3"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-6 sm:mb-8 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className=""
            >
              <span className="block px-3 sm:px-4 py-2 rounded-full bg-accent/20 text-accent font-semibold text-center text-xs sm:text-sm md:text-base transition-colors duration-200 hover:bg-accent hover:text-highlight cursor-pointer shadow">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
