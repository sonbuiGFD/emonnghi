import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

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
