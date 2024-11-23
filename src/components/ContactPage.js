import { useState } from "react";
import { db, collection, addDoc } from "../firebase";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contacts"), formData);

      setAlertMessage("Message sent successfully!");
      setAlertType("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setAlertMessage("An error occurred while sending the message.");
      setAlertType("danger");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="specificService">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center text-md-start mb-4">
            <h2 className="mb-3">We'd Love to Hear from You</h2>
            <p>
              Whether you have questions or need assistance, we're here to help.
              Reach out to us anytime!
            </p>
            <p>
              <i className="fas fa-phone"></i> +254 112646934
            </p>
            <p>
              <i className="fas fa-phone"></i> +254 726346929
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@riherkush.com
            </p>
          </div>

          <div className="col-md-6 text-center text-md-start">
            <h3 className="mb-4">Connect with Us Through This Form</h3>

            {alertMessage && (
              <div
                className={`alert alert-${alertType} alert-dismissible fade show`}
                role="alert"
              >
                {alertMessage}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending message..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
