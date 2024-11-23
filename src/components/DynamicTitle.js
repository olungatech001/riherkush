import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function DynamicTitle() {
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                document.title = "Home | Riherkush Elegance Global Events";
                break;
            case "/about":
                document.title = "About | Riherkush Elegance Global Events";
                break;
            case "/services":
                document.title = "Services | Riherkush Elegance Global Events";
                break;
            case "/products":
                document.title = "Products | Riherkush Elegance Global Events";
                break;
            case "/contact":
                document.title = "Contact | Riherkush Elegance Global Events";
                break;
            case "/terms-and-conditions":
                document.title = "Terms and Conditions | Riherkush Elegance Global Events";
                break;
            case "/privacy-policy":
                document.title = "Privacy Policy | Riherkush Elegance Global Events";
                break;
            default:
                document.title = "Riherkush Elegance Global Events";
        }
    }, [location]);

    return null;
}
