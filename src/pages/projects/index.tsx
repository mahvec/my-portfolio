
import ProjectCard from "../../components/general/ProjectCard";

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
        {/* Responsive grid + carousel */}
        <div className="relative">
          {/* Carousel buttons for small screens */}
          <button
            type="button"
            className="absolute text-white left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-bg)]/80 rounded-full p-2 shadow hidden xs:flex md:hidden"
            aria-label="Scroll left"
            onClick={() => {
              document
                .getElementById("projects-carousel")
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
                .getElementById("projects-carousel")
                ?.scrollBy({ left: 320, behavior: "smooth" });
            }}
          >
            <span className="material-icons">chevron_right</span>
          </button>
          <div
            id="projects-carousel"
            className="flex md:grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 scrollbar-thin scrollbar-thumb-[var(--color-highlight)]"
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
