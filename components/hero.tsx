export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.22),transparent_30%),radial-gradient(circle_at_left,rgba(16,185,129,0.14),transparent_25%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur">
              Open to Internship, Placement, and Entry-Level Opportunities
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
              Duc Vinh Vu
            </h1>

            <p className="mt-5 text-lg font-medium text-indigo-300 md:text-xl">
              ICT Graduate · Aspiring Software Developer · Web, Mobile, and
              Practical Problem Solving
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              I build practical applications using Next.js, React Native,
              PostgreSQL, and modern development tools. My focus is on creating
              clean, useful, and reliable solutions while continuing to grow
              through real-world projects and team collaboration.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5"
              >
                View Projects
              </a>

              <a
                href="https://github.com/ducvinh2303"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/ducvinhvu-dev"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm font-medium text-slate-400">
                Quick Snapshot
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Education
                  </p>
                  <p className="mt-1 text-sm text-white">
                    ICT Graduate, University of Tasmania
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Main Stack
                  </p>
                  <p className="mt-1 text-sm text-white">
                    Java, Python, Next.js, React Native, TypeScript, PostgreSQL, e.g.
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Based In
                  </p>
                  <p className="mt-1 text-sm text-white">
                    Hobart, Tasmania, Australia
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Looking For
                  </p>
                  <p className="mt-1 text-sm text-white">
                    Internship, placement, graduate, and entry-level IT roles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}