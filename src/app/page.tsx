import Header from '@/components/Header';

import Hero from '@/container/Home/Hero';
import About from '@/container/Home/About';
import Clients from '@/container/Home/Clients';
import Work from '@/container/Home/Work';
import Contact from '@/container/Home/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen pt-[100px]">
      <Header />
      <main id="main-content">
        <Hero />

        <hr className="h-px bg-[#eaeaea] border-0 max-w-[1280px] mx-auto" />
        <About />

        <hr className="h-px bg-[#eaeaea] border-0 max-w-[1280px] mx-auto" />
        <Clients />

        <hr className="h-px bg-[#eaeaea] border-0 max-w-[1280px] mx-auto" />
        <Work />

        <hr className="h-px bg-[#eaeaea] border-0 max-w-[1280px] mx-auto" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
