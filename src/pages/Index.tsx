import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ValueSection from "@/components/landing/ValueSection";
import Services from "@/components/landing/Services";
import Portfolio from "@/components/landing/Portfolio";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <ValueSection />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
