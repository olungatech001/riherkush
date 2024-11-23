import { Link } from 'react-router-dom';

export default function FirstCallToAction() {
    return (
        <div>
            <div className="first-call-to-action d-flex align-items-center justify-content-center text-center py-3">
                <div className="container">
                    <p className="h4 text-white mb-3">Ready to Create Unforgettable Memories? <br /> <br />Don’t leave your event to chance. Partner with Riherkush Elegance Global Events to bring creativity, talent, and precision to every aspect of your special occasion.</p><br />
                    <Link to="/services">
                        <button className="btn btn-primary btn-lg">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
