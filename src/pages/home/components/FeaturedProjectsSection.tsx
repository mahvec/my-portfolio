
import ProjectCard from "../../../components/general/ProjectCard";

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
        {/* Responsive grid + carousel */}
        <div className="relative">
          {/* Carousel buttons for small screens */}
          <button
            type="button"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-bg)]/80 rounded-full p-2 shadow hidden xs:flex md:hidden"
            aria-label="Scroll left"
            onClick={() => {
              document
                .getElementById("featured-projects-carousel")
                ?.scrollBy({ left: -320, behavior: "smooth" });
            }}
          >
            <span className="material-icons">chevron_left</span>
          </button>
          <button
            type="button"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-bg)]/80 rounded-full p-2 shadow hidden xs:flex md:hidden"
            aria-label="Scroll right"
            onClick={() => {
              document
                .getElementById("featured-projects-carousel")
                ?.scrollBy({ left: 320, behavior: "smooth" });
            }}
          >
            <span className="material-icons">chevron_right</span>
          </button>
          <div
            id="featured-projects-carousel"
            className="flex gap-6 md:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 scrollbar-thin scrollbar-thumb-[var(--color-highlight)]"
            style={{ scrollBehavior: "smooth" }}
          >
            {projects.map((project) => (
              <div
                key={project.name}
                className="snap-start md:snap-none flex-shrink-0 w-[90vw] xs:w-80 sm:w-96 md:w-auto"
                style={{ maxWidth: 400 }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
