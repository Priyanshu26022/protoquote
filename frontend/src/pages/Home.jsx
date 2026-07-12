import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Features from "../components/Features/Features";
import QuoteCalculator from "../components/QuoteCalculator/QuoteCalculator";
import Uploads from "../components/Uploads/Uploads";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <Features />

      
      <section id="upload">
        <Uploads />
      </section>

      <section id="quote">
        <QuoteCalculator />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default Home;