import About from '@/components/about';
import Contact from '@/components/contact';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <About />
      <Skills />
      {<Projects />}
      <Contact />
    </main>
  );
}