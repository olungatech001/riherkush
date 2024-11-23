import "./SmallAbout.css";
import CoreValues from "./CoreValues";

function AboutUs() {
    return (
        <div className="small-about-container py-5">
            <div className="container">
                <div className="row text-center text-lg-start">
                    <div className="col-lg-6 mb-4">
                        <h2 className="fw-bold">Discover Our Passion for Events</h2>
                        <p className="lead">
                            Founded in 2024 by visionaries Richard Nasong'o and Khalid Abdullahi (Herkush), Riherkush Elegance Global Events emerged from a shared passion for crafting extraordinary moments. 
                            What started as a small local event planning service has swiftly evolved into a global platform dedicated to transforming dreams into reality.
                        </p>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <h2 className="fw-bold">Our Purpose and Goals</h2>
                        <p className="lead">
                            At Riherkush Elegance, our purpose is to deliver unforgettable event experiences that resonate with our clients and their guests. 
                            We aim to be the leading choice for event planning, management, and execution, ensuring each celebration reflects the unique personality and desires of our clients. 
                            Our goals are rooted in a commitment to innovation, exceptional service, and community engagement, allowing us to create moments that transcend ordinary gatherings.
                        </p>
                    </div>
                </div>
            </div>
            <CoreValues />
        </div>
    );
}

export default AboutUs;
