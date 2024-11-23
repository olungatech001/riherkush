import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import OurApproach from "../components/OurApproach";
import FirstCallToAction from "../components/FirstCallToAction";

export default function About() {
    return (
      <>
        <div className="about-hero">
          <Navbar />
          <AboutHero />
        </div>
        <AboutUs />
        <OurServices />
        <OurApproach />
        <FirstCallToAction />
        <Footer />
      </>
    );
  }