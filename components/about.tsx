import SectionTitle from './section-title';

const aboutItems = [
  {
    title: 'Web Development',
    text: 'Building responsive and modern web apps using Next.js, React, Tailwind CSS, and database-backed workflows.',
  },
  {
    title: 'Mobile Development',
    text: 'Working with React Native to create secure, practical mobile app experiences connected to APIs and real workflows.',
  },
  {
    title: 'Continuous Learning',
    text: 'Applying academic learning through hands-on projects, troubleshooting, deployment, and team-based software delivery.',
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="About Me"
        title="A developer focused on practical, job-ready projects"
        description="I recently completed my ICT studies at the University of Tasmania, majoring in Software Development. My experience includes full-stack web development, mobile application development, and machine learning projects. I enjoy building useful solutions, improving user experience, and learning by doing."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {aboutItems.map((item) => (
          <div
            key={item.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}