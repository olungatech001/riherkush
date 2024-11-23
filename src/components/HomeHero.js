import { Link } from "react-router-dom";

export default function HomeHero() {
    return (
        <div className="d-flex flex-column justify-content-center text-center">
            <div className="col-lg-9 mx-auto">
                <h1 className="display-5 fw-bold text-white my-4">
                    Elevate Your Events with Riherkush Elegance Global Events
                </h1>
            </div>

            <div className="col-lg-8 mx-auto">
                <p className="lead mb-4 text-white">
                    At Riherkush Elegance Global Events, we are your one-stop solution for unforgettable event experiences. From intimate gatherings to grand celebrations, we transform your vision into a breathtaking reality, ensuring that every detail is handled with precision and care.
                </p>
                <Link to="/services" className="text-white link">
                    <button
                        type="button"
                        className="btn btn-primary btn-lg px-4 gap-3 text-white"
                    >
                        Get started
                    </button>
                </Link>
            </div>
        </div>
    );
}
