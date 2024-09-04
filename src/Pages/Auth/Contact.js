import Header from 'Components/Header';
import React, { useState, useEffect } from 'react';
export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
      <Header heading="Contact Us" />
      <section>
        <div className="contact-container">
          <h1 className="text-center">Get in Touch</h1>
          <p className='text-center mt-3'>-----•☕︎•------</p>
          <form className="contact-form mt-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
          <div className="contact-info mt-5">
            <h3 className="text-center">Contact Information</h3>
            <ul className="list-unstyled text-center">
              <li>
                <a href="tel:+1234567890" className="contact-link">Phone: 03026600078</a>
              </li>
              <li>
                <a href="mailto:info@cafecrave.com" className="contact-link">Email: write2wahab786@gmail.com</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/abdul-wahab-366a57278/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  LinkedIn: Abdul Wahab
                </a>
              </li>
            </ul>
          </div>
          <div className="schedule mt-5">
            <h1 className="text-center">Business Hours</h1>
            <p className='text-center mt-3'>-----•☕︎•------</p>
            <p className="text-center">Mon - Fri: 8:00 AM - 9:00 PM</p>
            <p className="text-center">Sat - Sun: 8:00 AM - 10:00 PM</p>
          </div>
        </div>
      </section>
    </>
  );
}