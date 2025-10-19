import Header from '@/components/Header';

import Hero from '@/container/Home/Hero';
import About from '@/container/Home/About';
import Clients from '@/container/Home/Clients';
import Work from '@/container/Home/Work';
import Contact from '@/container/Home/Contact';
import Footer from '@/container/Home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen pt-[100px]">
      <Header />
      <main id="main-content">
        <Hero />

        <hr className="section-divider" />
        <About />

        <hr className="section-divider" />
        <Clients />

        <hr className="section-divider" />
        <Work />

        <hr className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
