import Navbar from "../components/Navbar"
import HomeHero from "../components/HomeHero"
import SmallAbout from "../components/SmallAbout";
import FirstCallToAction from "../components/FirstCallToAction";
import WhyChooseUs from "../components/WhyChooseUs"
import Footer from "../components/Footer";
import OurServices from "../components/OurServices";

export default function Home() {
    return (
        <>
            <div className="header">
                <Navbar />
                <HomeHero />
            </div>
            <OurServices />
            <SmallAbout />
            <WhyChooseUs />
            <FirstCallToAction />
            <Footer />
        </>
    );
}