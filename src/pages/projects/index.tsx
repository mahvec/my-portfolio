import { motion } from "framer-motion";

const projects = [
  {
    name: "National Vehicle Registry (VREG)",
    desc: "Central vehicle tracking UI with 5B+ NGN in revenue improvement. Form-based data capture, secure dashboards, role-based components.",
    tech: ["React", "Redux Toolkit", "Tailwind"],
    impact: "₦5B+ revenue from compliance enforcement",
    link: "#",
    github: "#",
    img: "https://images.unsplash.com/photo-156744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "CBTAS",
    desc: "A React-powered frontend for government tax automation. Significantly increased revenue collection by streamlining billing.",
    tech: ["React", "Redux Toolkit", "Tailwind", "Context API"],
    impact: "Streamlined billing, increased revenue",
    link: "#",
    github: "#",
    img: "https://images.unsplash.com/photo-146174928684-dccba630f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "AFRO AI Website",
    desc: "Responsive brand-forward landing page for AI solutions. Increased engagement and credibility.",
    tech: ["React", "Tailwind", "Vite"],
    impact: "Mobile-first, increased engagement",
    link: "#",
    github: "#",
    img: "https://images.unsplash.com/photo-1519125323398-675db638?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dame Bernice Foundation",
    desc: "Charity website with dynamic content managed via Redux CMS. Responsive UI, accessibility focus.",
    tech: ["React", "Redux Toolkit", "Tailwind"],
    impact: "Accessible, dynamic content",
    link: "#",
    github: "#",
    img: "https://images.unsplash.com/photo-1465101046530-733987f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Fairrtradee E-Commerce",
    desc: "Product management dashboard + real-time analytics. Admin portal, live sales insights, user cart flow.",
    tech: ["React", "Redux", "Tailwind"],
    impact: "Live analytics, admin portal",
    link: "#",
    github: "#",
    img: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Projects() {
  return (
    <section className="w-full min-h-screen bg-[var(--color-bg)] py-16 sm:py-20 md:py-24 flex flex-col items-center">
      <div className="container w-full px-3 sm:px-4 md:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-white)] mb-2">
          Projects
        </h1>
        <div className="h-1 w-12 sm:w-16 bg-[var(--color-highlight)] rounded mb-8 sm:mb-12"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col bg-[var(--color-accent)] border-2 border-transparent hover:border-[var(--color-highlight)] rounded-2xl shadow-lg overflow-hidden hover:scale-[1.01] hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="w-full h-48 sm:h-56 lg:h-48">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col gap-3 p-3 sm:p-4 md:p-6 lg:p-8 justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-white)] mb-2">
                    {project.name}
                  </h2>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[var(--color-highlight)] text-[var(--color-bg)] text-xs font-semibold uppercase tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-[var(--color-light)] mb-2 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="text-xs sm:text-sm text-[var(--color-highlight)] font-semibold mb-3">
                    {project.impact}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 rounded bg-[var(--color-highlight)] text-[var(--color-bg)] font-bold shadow hover:bg-[var(--color-white)] hover:text-[var(--color-bg)] transition text-sm sm:text-base text-center"
                  >
                    View Github
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 border-2 border-[var(--color-highlight)] text-[var(--color-highlight)] font-bold hover:bg-[var(--color-highlight)] hover:text-[var(--color-bg)] transition text-sm sm:text-base text-center"
                  >
                    View project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
