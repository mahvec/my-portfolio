import { motion } from "framer-motion";

const softSkills = [
  { icon: "🔍", label: "Attention to detail" },
  { icon: "🧠", label: "Continuous learner" },
  { icon: "🤝", label: "Team collaboration" },
  { icon: "⚙️", label: "Process-oriented" },
];

export default function SoftSkillsSection() {
  return (
    <section className="w-full bg-primary py-12 flex flex-col items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="max-w-3xl w-full px-4 p-3"
      >
        <h2 className="text-2md:text-3xl md:text-4xl font-bold text-accent mb-6 sm:mb-8 text-center">
          Personal Strengths
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col items-center gap-2 bg-primary border border-accent/20 rounded-xl p-3 sm:p-3 shadow hover:shadow-lg transition"
            >
              <span className="text-2md:text-3xl md:text-4xl">
                {skill.icon}
              </span>
              <span className="text-highlight/90 text-sm sm:text-base text-center font-medium leading-tight">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
