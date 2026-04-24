import { projects } from '@/lib/data';
import SectionTitle from './section-title';

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Featured Projects"
        title="Projects that strengthen my CV"
        description="These projects reflect the kind of practical work I want employers to quickly understand: building, integrating, solving, and delivering useful outcomes."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/10"
          >
            <div className="mb-5 inline-flex w-fit rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
              {project.category}
            </div>

            <h3 className="text-2xl font-bold text-white">{project.title}</h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-white">Highlights</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                {project.highlights.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 pt-2 text-sm font-semibold">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white px-4 py-2 text-slate-950 transition hover:-translate-y-0.5"
              >
                GitHub
              </a>

              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white transition hover:bg-white/10"
                >
                  Live Demo
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}