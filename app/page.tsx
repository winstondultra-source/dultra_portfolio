import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Gallery from '@/components/Gallery';
import Learning from '@/components/Learning';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Gallery />
      <Projects />
      <div id="learning">
        <Learning />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
