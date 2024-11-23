import { Link } from "react-router-dom";
import about from "../images/about.jpeg";
import "./SmallAbout.css";
import CoreValues from "./CoreValues";

function SmallAbout() {
    return (
        <div className="small-about-container py-5">
            <div className="container">
                <div className="row align-items-center text-center text-lg-start">
                    <div className="col-lg-6">
                        <h1 className="display-5 mb-3 fw-bold">Discover Our Passion for Events</h1>
                        <p className="lead mb-4">
                            Riherkush Elegance Global Events was founded by Richard Nasong'o and Khalid Abdullahi (Herkush) in 2024. With a passion for event planning, we aim to deliver unforgettable experiences through meticulous planning and expert consultation.
                        </p>
                        <Link to="/about" className="link">
                            <button type="button" className="btn btn-primary btn-lg">
                                Read More
                            </button>
                        </Link>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block">
                        <img src={about} alt="About us" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
            <CoreValues />
        </div>
    );
}

export default SmallAbout;
