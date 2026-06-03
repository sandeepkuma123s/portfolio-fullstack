import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://portfolio-fullstack-1-ee7p.onrender.com/api/contact", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <div className="contact-box">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>Email: ssandeepkumar31491@gmail.com</p>
          <p>Phone: +91 9014481599</p>
          <p>Location: Andhra Pradesh, India</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;