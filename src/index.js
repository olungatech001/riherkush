import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/bootstrap.css";
import "./js/bootstrap.bundle.min.js";
import "./js/script.js";
import "./css/styles.css";
import "./css/font-awesome.css";
import DynamicTitle from "./components/DynamicTitle.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Services from "./pages/Services.js";
import Products from "./pages/Products.js";
import Contact from "./pages/Contact.js";
import TermsAndConditions from "./pages/TermsAndConditions.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import CookieConsent from "./components/CookieConsent.js";
import ScrollToTop from "./components/ScrollToTop.js";

const App = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.userway.org/widget.js';
        script.setAttribute('data-account', 'MvZkYuHdWy');
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <Router>
            <DynamicTitle />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            <CookieConsent />
        </Router>
    );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
