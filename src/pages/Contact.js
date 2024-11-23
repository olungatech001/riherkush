import Navbar from "../components/Navbar";
import ContactHero from "../components/ContactHero";
import Footer from "../components/Footer";
import ContactPage from "../components/ContactPage";

export default function Contact() {
    return (
        <>
          <div className="contact-hero">
            <Navbar />
            <ContactHero />
          </div>
          <ContactPage />
          <Footer />
        </>
      );
}