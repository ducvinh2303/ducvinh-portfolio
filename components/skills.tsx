import { skillGroups } from '@/lib/data';
import SectionTitle from './section-title';

export default function Skills() {
  return (
    <section id="skills" className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow="Skills"
          title="Technologies and tools I use"
          description="A concise overview of the tools and technologies I have used across projects, coursework, and practical development work."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}