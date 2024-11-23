export default function WhyChooseUs() {
    return (
        <div className="container my-5">
            <div className="row align-items-center text-center text-lg-start" style={{ minHeight: '60vh' }}>
                <div className="col-lg-6 mb-4">
                    <h2 className="display-6 fw-bold">
                        Why Choose Riherkush Elegance Global Events?
                    </h2>
                    <p className="lead">
                        We offer unparalleled services that set us apart in the industry. 
                        Below are some unique features that define our agency.
                    </p>
                </div>
                
                <div className="col-lg-6 d-flex flex-column align-items-center align-items-lg-start">
                    <div className="mb-4 text-center text-lg-start">
                        <h4 className="fw-bold">Tailored Event Solutions</h4>
                        <p>
                            We provide customized event planning and consultation services designed to 
                            meet the unique needs of each client, no matter the occasion.
                        </p>
                    </div>
                    <hr className="d-lg-none" /> {/* Hide the hr on larger screens */}
                    <div className="mb-4 text-center text-lg-start">
                        <h4 className="fw-bold">Comprehensive Artist Management</h4>
                        <p>
                            Our agency specializes in artist booking and management, ensuring quality entertainment while handling all logistical details to make every event memorable.
                        </p>
                    </div>
                    <hr className="d-lg-none" />
                    <div className="mb-4 text-center text-lg-start">
                        <h4 className="fw-bold">Diverse Merchandise Offerings</h4>
                        <p>
                            From branded apparel to exclusive memorabilia, we offer a wide range of artist merchandise that adds value and excitement to your event experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
