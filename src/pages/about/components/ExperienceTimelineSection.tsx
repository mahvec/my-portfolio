import { motion } from "framer-motion";

const experiences = [
  {
    company: "National Vehicle Registry (VREG)",
    role: "Frontend Developer",
    dates: "2021 – Present",
    desc: "Built and maintained the central vehicle tracking UI, contributing to ₦5B+ in revenue improvement. Developed secure dashboards and role-based components.",
  },
  {
    company: "CBTAS",
    role: "Frontend Engineer",
    dates: "2020 – 2021",
    desc: "Developed the government billing automation interface, streamlining billing and increasing revenue collection.",
  },
  {
    company: "AFRO AI",
    role: "Frontend Developer",
    dates: "2020",
    desc: "Created a mobile-first React site for AI services, increasing engagement and credibility.",
  },
  {
    company: "Dame Bernice Foundation",
    role: "Frontend Developer",
    dates: "2019 – 2020",
    desc: "Built a charity site with CMS using Redux Toolkit, focusing on accessibility and responsive UI.",
  },
  {
    company: "Fairrtradee",
    role: "Frontend Developer",
    dates: "2019",
    desc: "Developed an e-commerce UI with product dashboard and analytics, including admin portal and live sales insights.",
  },
];

export default function ExperienceTimelineSection() {
  return (
    <section className="w-full bg-primary py-12 sm:py-16 flex flex-col items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="max-w-3xl w-full px-4 sm:px-6 p-3"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-6 sm:mb-8 text-center">
          Experience
        </h2>
        <div className="relative border-l-2 border-accent/40 sm:ml-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mb-8 sm:mb-10 ml-6"
            >
              <div className="absolute -left-3 sm:-left-4 top-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-accent border-2 border-primary"></div>
              <div className="bg-primary border border-accent/20 rounded-xl p-3 sm:p-4 sm:p-5 shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold text-accent">
                  {exp.company}
                </h3>
                <div className="text-highlight/80 text-xs sm:text-sm mb-1">
                  {exp.role} &bull; {exp.dates}
                </div>
                <p className="text-highlight/90 text-sm sm:text-base leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
