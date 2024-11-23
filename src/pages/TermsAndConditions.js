import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TermsAndConditionsHero from "../components/TermsAndConditionsHero";
import TermsAndConditionsContent from "../components/TermsAndConditions";

export default function TermsAndConditions() {
    return (
        <>
          <div className="services-hero">
            <Navbar />
            <TermsAndConditionsHero />
          </div>
          <TermsAndConditionsContent />
          <Footer />
        </>
      );
}