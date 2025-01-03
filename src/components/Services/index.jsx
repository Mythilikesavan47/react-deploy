import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="text-center">Our Services</h1>
      <div className="service-card">
        <h3>Repair and Support</h3>
        <p>We offer reliable and quick repair and support for all Lenovo Tab products.</p>
      </div>
      <div className="service-card">
        <h3>Software Assistance</h3>
        <p>Our team provides top-notch software support and troubleshooting services.</p>
      </div>
    </div>
  );
};

export default Services;

