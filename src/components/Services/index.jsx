import React from 'react';
import './Service.css';  // Ensure the file is in the same folder

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="services-heading">Our Amazing Services</h2>
        <div className="services-cards">
          {/* Service 1 */}
          <div className="service-card">
            <i className="fas fa-laptop-code service-icon"></i>
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">
              We create responsive and beautiful websites that cater to your business needs.
            </p>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <i className="fas fa-mobile-alt service-icon"></i>
            <h3 className="service-title">Mobile App Development</h3>
            <p className="service-description">
              Our team specializes in developing mobile applications with exceptional user experience.
            </p>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <i className="fas fa-cloud service-icon"></i>
            <h3 className="service-title">Cloud Services</h3>
            <p className="service-description">
              We offer cloud solutions that improve scalability and performance for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


