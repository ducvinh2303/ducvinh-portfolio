import SectionTitle from './section-title';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s connect"
            description="I am open to internship, placement, graduate, and entry-level opportunities in software development, IT support, and related technology roles."
          />

          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
            <div className="space-y-4 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-white">Email:</span>{' '}
                your.email@example.com
              </p>

              <p>
                <span className="font-semibold text-white">GitHub:</span>{' '}
                <a
                  href="https://github.com/ducvinh2303"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-white/30 underline-offset-4"
                >
                  github.com/ducvinh2303
                </a>
              </p>

              <p>
                <span className="font-semibold text-white">LinkedIn:</span>{' '}
                <a
                  href="https://linkedin.com/in/ducvinhvu-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-white/30 underline-offset-4"
                >
                  linkedin.com/in/ducvinhvu-dev
                </a>
              </p>

              <p>
                <span className="font-semibold text-white">Location:</span>{' '}
                Hobart, Tasmania, Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}