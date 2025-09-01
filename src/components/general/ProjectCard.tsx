interface ProjectCardProps {
  name: string;
  desc: string;
  tech: string[];
  impact?: string;
  link: string;
  github: string;
  img: string;
}

export default function ProjectCard({
  name,
  desc,
  tech,
  impact,
  link,
  img,
}: ProjectCardProps) {
  return (
    <div
      className="group min-w-[280px] max-w-[400px] mx-auto bg-white/[0.03] rounded-xl backdrop-blur-lg border border-white/[0.05] shadow-lg shadow-black/20 overflow-hidden transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
      tabIndex={0}
      aria-label={`Project: ${name}`}
    >
      <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-xl">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 text-xs font-medium tracking-wider rounded-full transition-all duration-200 ease-in-out hover:bg-white/15 hover:border-white/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 bg-gradient-to-b from-white/[0.05] to-white/[0.02]">
        <div>
          <h3 className="text-xl font-medium text-white/90 mb-2">{name}</h3>
          <p className="text-sm text-white/70 leading-relaxed mb-4">{desc}</p>
          {impact && (
            <div className="text-xs text-[var(--color-highlight)]/90 font-medium mb-4">
              {impact}
            </div>
          )}
        </div>
        <div className="flex gap-3">
          {/* <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 text-sm font-medium text-center text-white/90 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-200 ease-in-out hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5"
          >
            View Github
          </a> */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 text-sm font-medium text-center text-white/80 border border-white/20 rounded-lg transition-all duration-200 ease-in-out hover:bg-white/5 hover:border-white/30 hover:-translate-y-0.5"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
