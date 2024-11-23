import Navbar from "../components/Navbar";
import ServicesHero from "../components/ServicesHero";
import Footer from "../components/Footer";
import ServicesPage from "../components/Services";
import FirstCallToAction from "../components/FirstCallToAction";

export default function Services() {
    return (
        <>
          <div className="services-hero">
            <Navbar />
            <ServicesHero />
          </div>
          <ServicesPage />
          <FirstCallToAction />
          <Footer />
        </>
      );
}