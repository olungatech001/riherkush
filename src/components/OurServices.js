function OurServices() {
    return (
        <div className="container my-5">
            <h2 className="text-center display-6 fw-bold mb-4">What We Offer</h2>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h4 className="card-title">Event Planning & Consultation</h4>
                            <p className="card-text">
                                Turn your vision into reality with our seamless event planning services. 
                                From ideation to flawless execution, we’ll guide you every step of the way.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h4 className="card-title">Artist Booking & Management</h4>
                            <p className="card-text">
                                Elevate your event with live performances from a curated selection of 
                                top-tier talent. We handle everything from booking to promotional strategies, 
                                ensuring a perfect match for your occasion.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h4 className="card-title">Venue Scouting & Setup</h4>
                            <p className="card-text">
                                Find the perfect venue with our expert scouting services. Whether it’s a 
                                lush garden or a sleek urban loft, we’ll help you select and set up 
                                the ideal location.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h4 className="card-title">Performance and Event Venue</h4>
                            <p className="card-text">
                                Our in-house performance and event venue provides the ultimate setting for 
                                your celebrations. Equipped with state-of-the-art sound, lighting, and staging, 
                                our venue is ideal for concerts, corporate events, private parties, and more. 
                                Host your next event in style with Riherkush Elegance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Learn More Button */}
            <div className="text-center mt-4">
                <a href="/services" className="btn btn-primary">
                    Learn More
                </a>
            </div>
        </div>
    );
}

export default OurServices;
