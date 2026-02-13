function Contact() {
  return (
    <div className="contact-page">

      {/* Top Banner */}
      <section className="contact-hero">
        <h1>Contact Us 📞</h1>
        <p>We are here to help you</p>
      </section>

      {/* Main Section */}
      <section className="contact-content">

        {/* Left Info */}
        <div className="contact-info">

          <h2>Get in Touch</h2>
           
           <p>👤 Book Seller: Shivam Pandey</p>
          <p>📍 Location: New Delhi, India</p>
          <p>📞 Phone: +91 7011689104</p>
          <p>📧 Email: knowledgewala001@gmail.com</p>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917011689104"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            💬 Chat on WhatsApp
          </a>

        </div>

        {/* Right Form */}
        <form className="contact-form">

          <h2>Send Message</h2>

          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <input type="text" placeholder="Book Name / Query" />

          <textarea
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>

        </form>

      </section>

    </div>
  );
}

export default Contact;