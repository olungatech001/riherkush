function CoreValues() { 
    return (
        <div className="d-flex flex-column justify-content-center container mt-5 pt-5">
            <h1 className="text-center display-6 mb-5 fw-bold">Our Core Values</h1>

            <div className="row justify-content-center">
                <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
                    <CoreValuesCard
                        number="01"
                        title="Integrity"
                        description="We uphold honesty and transparency in all our dealings, ensuring trust and reliability with our clients and partners."
                    />
                </div>
                <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
                    <CoreValuesCard
                        number="02"
                        title="Creativity"
                        description="Our innovative approach allows us to design unique and memorable events tailored to your vision and expectations."
                    />
                </div>
                <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
                    <CoreValuesCard
                        number="03"
                        title="Excellence"
                        description="We strive for the highest standards in event planning, artist management, and merchandise sales to ensure client satisfaction."
                    />
                </div>
            </div>
        </div>
    );
}

function CoreValuesCard({ number, title, description }) {
    return (
        <div>
            <div className="card-body text-center"> {/* Changed text-start to text-center */}
                <h5 className="card-title pb-2">{number}</h5>
                <h4 className="card-title pb-2">{title}</h4>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default CoreValues;
