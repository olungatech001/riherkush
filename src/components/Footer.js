import { useState } from "react";
import { NavLink } from "react-router-dom";
import { db, collection, addDoc } from "../firebase";

export default function Footer() {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [alert, setAlert] = useState({ message: "", type: "" });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save booking data to Firestore
      await addDoc(collection(db, "bookings"), {
        ...booking,
        createdAt: new Date(),
      });

      setAlert({ message: "Booking submitted successfully!", type: "success" });
      setBooking({ name: "", email: "", service: "", message: "" });
    } catch (error) {
      console.error("Error submitting booking:", error);
      setAlert({
        message: "An error occurred while submitting the booking.",
        type: "danger",
      });
    }

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <footer className="py-5" style={{ backgroundColor: "#000b0d" }}>
      <div className="container">
        {showAlert && (
          <div
            className={`alert alert-${alert.type} alert-dismissible fade show`}
            role="alert"
          >
            {alert.message}
          </div>
        )}
        <div className="row">
          {/* First Column */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="text-white mb-4 fw-bold text-uppercase">About Us</h5>
            <p className="text-white">
              At Riherkush Elegance Global Events, we believe every event should
              be a celebration of life, creativity, and connection. With
              experience in event planning and management, our team is dedicated
              to transforming your vision into reality.
            </p>
          </div>

          {/* Second Column */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold mb-4 text-white">
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-white text-decoration-none">
                  <i className="fa-solid fa-angle-right me-2"></i>Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-white text-decoration-none"
                >
                  <i className="fa-solid fa-angle-right me-2"></i>About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-white text-decoration-none"
                >
                  <i className="fa-solid fa-angle-right me-2"></i>Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="text-white text-decoration-none"
                >
                  <i className="fa-solid fa-angle-right me-2"></i>Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-white text-decoration-none"
                >
                  <i className="fa-solid fa-angle-right me-2"></i>Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms-and-conditions"
                  className="text-white text-decoration-none"
                >
                  <i className="fa-solid fa-angle-right me-2"></i>Terms and
                  Conditions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/privacy-policy"
                  className="text-white text-decoration-none"
                >
                  <i className="fa-solid fa-angle-right me-2"></i>Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="text-white fw-bold mb-4 text-uppercase">
              Contact Us
            </h5>
            <ul className="list-unstyled text-white">
              <li>
                <i
                  className="fas fa-phone mb-3"
                  style={{ fontSize: "1.3rem" }}
                ></i>{" "}
                +254 112646934
              </li>
              <li>
                <i
                  className="fas fa-phone mb-3"
                  style={{ fontSize: "1.3rem" }}
                ></i>{" "}
                +254 726346929
              </li>
              <li>
                <i
                  className="fas fa-envelope"
                  style={{ fontSize: "1.3rem" }}
                ></i>{" "}
                info@riherkush.com
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <h5 className="text-white fw-bold mb-4 text-uppercase">
              Book a Service
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control"
                  value={booking.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="form-control"
                  value={booking.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <select
                  name="service"
                  className="form-control custom-select"
                  value={booking.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="Event Planning & Consultation">
                    Event Planning & Consultation
                  </option>
                  <option value="Artist Booking & Management">
                    Artist Booking & Management
                  </option>
                  <option value="Venue Scouting & Setup">
                    Venue Scouting & Setup
                  </option>
                  <option value="Performance and Event Venue">
                    Performance and Event Venue
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Additional Details"
                  className="form-control"
                  rows="3"
                  value={booking.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-light w-100">
                Submit Booking
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="m-0 text-white">
            &copy; 2024 Riherkush Elegance Global Events. Designed by
            <a
              href="https://www.linkedin.com/in/cedric-olunga"
              className="ms-1"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Olunga Tech Creations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
