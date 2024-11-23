import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import ProductPage from "../components/ProductPage";
import ProductsHero from "../components/ProductsHero";

export default function About() {
    return (
      <>
        <div className="products-hero">
          <Navbar />
          <ProductsHero />
        </div>
        <ProductPage />
        <Footer />
      </>
    );
  }