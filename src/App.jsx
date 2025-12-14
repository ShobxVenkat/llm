import Navbar from "./components/Navbar";
import Hero from "./components/Hero ";
import Stats from "./components/Stats";
import Services from "./components/Services ";
import About from "./components/About ";
import Careers from "./components/Careers";
import CTA from "./components/CTA";
import Footer from "./components/Footer ";

export default function App() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Careers />
      <CTA />
      <Footer />
    </div>
  );
}
