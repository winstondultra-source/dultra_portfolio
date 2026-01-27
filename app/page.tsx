import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Learning from '@/components/Learning';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      <Gallery />
      <Projects />
      <div id="learning">
        <Learning />
      </div>
      <ContactForm />
    </div>
  );
}
