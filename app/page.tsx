import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Learning from '@/components/Learning';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Projects />
      <div id="learning">
        <Learning />
      </div>
      <ContactForm />
    </div>
  );
}
