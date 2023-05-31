import "./App.css";
import Header from "./Components/Header.js";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import YoungStarsMission from "./Components/YoungStarsMission";
import TechnicalDevelopment from "./Components/TechnicalDevelopment";
import MentalDevelopment from "./Components/MentalDevelopment";
import Testimonials from "./Components/Testimonials";
import Teachers from "./Components/Teachers";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <YoungStarsMission />
      <TechnicalDevelopment />
      <MentalDevelopment />
      <Testimonials />
      <Teachers />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
