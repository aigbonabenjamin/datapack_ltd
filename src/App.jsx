import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">Datapack LTD</div>
        <nav className="nav">
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="hero" className="hero">
        <h1>Empowering Startups with Data-Driven Tech Consulting</h1>
        <p>At Datapack LTD, we specialize in providing innovative tech consulting solutions to startups, leveraging data analytics to build websites and applications that solve real-world problems and drive business growth.</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Data-Driven Tech Consulting</h3>
            <p>Leverage advanced data analytics and strategic insights to guide your startup through technology challenges. From ideation to scaling, we provide tailored consulting to optimize operations and drive informed decision-making.</p>
          </div>
          <div className="service-item">
            <h3>Custom Data Solutions & Web Development</h3>
            <p>Build sophisticated websites and applications integrated with data analytics, including e-commerce platforms, productivity dashboards, and data visualization tools that empower users with actionable insights.</p>
          </div>
          <div className="service-item">
            <h3>Innovative Problem-Solving with Data</h3>
            <p>Develop cutting-edge web applications that harness data to solve complex real-world problems, enhancing efficiency, user experience, and business outcomes across diverse industries.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>At Datapack LTD, we are dedicated to empowering startups through data-driven tech consulting. Our expert team combines cutting-edge technology with deep data insights to deliver tailored solutions that address your unique challenges. From strategic guidance to custom web development, we help transform your vision into scalable, efficient digital products that enhance user experiences and drive measurable results.</p>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Ready to harness the power of data for your startup's success? Contact us for expert tech consulting and innovative solutions.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
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
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        <div className="contact-info">
          <p>Email: info@datapackltd.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Your data is secure with us. We adhere to strict privacy standards.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Datapack LTD. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
