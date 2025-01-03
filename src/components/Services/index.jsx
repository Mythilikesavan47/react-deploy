import React from "react";
import "./Services.css"; // Ensure this path is correct for your project

const Services = () => {
  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Amazing Services</h2>
        <div className="row">
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="service-card shadow-lg">
              <div className="service-icon">
                <i className="fas fa-battery-full"></i>
              </div>
              <h5 className="service-title">Long Battery Life</h5>
              <p className="service-description">
                Enjoy all-day performance with a battery that lasts up to 12
                hours. Never worry about running out of power during your work or
                play!
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4">
            <div className="service-card shadow-lg">
              <div className="service-icon">
                <i className="fas fa-camera"></i>
              </div>
              <h5 className="service-title">High-Resolution Camera</h5>
              <p className="service-description">
                Capture stunning photos and videos with the advanced camera
                features, perfect for every scenario.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4">
            <div className="service-card shadow-lg">
              <div className="service-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h5 className="service-title">Fast Performance</h5>
              <p className="service-description">
                Powered by cutting-edge technology, the Lenovo Tab offers fast
                and seamless performance for all tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


