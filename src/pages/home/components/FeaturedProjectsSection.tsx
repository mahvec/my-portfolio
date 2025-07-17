import { motion } from "framer-motion";

const projects = [
  {
    name: "National Vehicle Registry (VREG)",
    desc: "Central vehicle tracking UI with 5B+ NGN in revenue improvement.",
    tech: ["React", "Redux Toolkit", "Tailwind"],
    link: "#",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    github: "#",
  },
  {
    name: "CBTAS",
    desc: "Government billing automation interface.",
    tech: ["React", "Redux", "Tailwind"],
    link: "#",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    github: "#",
  },
  {
    name: "AFRO AI Website",
    desc: "Mobile-first React site for AI services.",
    tech: ["React", "Vite", "Tailwind"],
    link: "#",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    github: "#",
  },
  {
    name: "Dame Bernice Foundation",
    desc: "Charity site with CMS using Redux Toolkit.",
    tech: ["React", "Redux Toolkit", "Tailwind"],
    link: "#",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    github: "#",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full bg-[var(--color-bg)] py-24 flex flex-col items-center"
    >
      <div className="container w-full px-6">
        <h2 className="text-4xl font-extrabold text-[var(--color-white)] mb-2">
          Projects
        </h2>
        <div className="h-1 w-12 bg-[var(--color-highlight)] rounded mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col md:flex-row bg-[var(--color-accent)] border-2 border-transparent hover:border-[var(--color-highlight)] rounded-2xl shadow-lg overflow-hidden hover:scale-[1.025] hover:shadow-2xl transition"
            >
              {/* Left: Info */}
              <div className="flex-1 flex flex-col gap-3 p-6 justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--color-white)] mb-2">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[var(--color-highlight)] text-[var(--color-bg)] text-xs font-semibold uppercase tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-[var(--color-light)] text-sm mb-4">
                    {project.desc}
                  </p>
                </div>
                <div className="flex gap-3 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded bg-[var(--color-highlight)] text-[var(--color-bg)] font-bold shadow hover:bg-[var(--color-white)] hover:text-[var(--color-bg)] transition"
                  >
                    View Github
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded border-2 border-[var(--color-highlight)] text-[var(--color-highlight)] font-bold hover:bg-[var(--color-highlight)] hover:text-[var(--color-bg)] transition"
                  >
                    View project
                  </a>
                </div>
              </div>
              {/* Right: Image */}
              <div className="md:w-56 w-full h-40 md:h-auto flex-shrink-0">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
