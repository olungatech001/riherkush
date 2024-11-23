import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PrivacyPolicyHero from "../components/PrivacyPolicyHero";
import PrivacyPolicyContent from "../components/PrivacyPolicy";

export default function PrivacyPolicy() {
    return (
        <>
          <div className="services-hero">
            <Navbar />
            <PrivacyPolicyHero />
          </div>
          <PrivacyPolicyContent />
          <Footer />
        </>
      );
}