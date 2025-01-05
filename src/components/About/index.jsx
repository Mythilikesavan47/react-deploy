import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="text-center">About Lenovo Tab</h1>
      <p className="text-center">
        The Lenovo Tab is a cutting-edge device designed for both work and play. It combines power, portability, and versatility, making it the perfect choice for those on the go.
      </p>
      <section id="features" className="container my-5">
        <h2 className="text-center mb-5">Amazing Features</h2>
        <div className="row">
          {/* Feature 1 */}
          <div className="col-md-4">
            <div className="feature-card text-center">
              <div className="feature-icon mb-4">
                <i className="fas fa-battery-full"></i>
              </div>
              <h5 className="card-title">Long Battery Life</h5>
              <p className="card-text">Enjoy all-day performance with a battery that lasts up to 12 hours. Never worry about running out of power!</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4">
            <div className="feature-card text-center">
              <div className="feature-icon mb-4">
                <i className="fas fa-camera"></i>
              </div>
              <h5 className="card-title">High-Resolution Camera</h5>
              <p className="card-text">Capture stunning photos and videos with the advanced camera, designed for quality snapshots in any environment.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4">
            <div className="feature-card text-center">
              <div className="feature-icon mb-4">
                <i className="fas fa-cogs"></i>
              </div>
              <h5 className="card-title">Fast Performance</h5>
              <p className="card-text">Powered by the latest processor, enjoy a smooth and fast experience whether for gaming, browsing, or multitasking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section id="testimonials" className="container my-5">
        <h2 className="text-center mb-5">What Customers Say</h2>
        <div className="row">
          {/* Testimonial 1 */}
          <div className="col-md-4">
            <div className="testimonial-card text-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="John Doe"
                className="testimonial-img mb-3"
              />
              <p>"I love my Lenovo Tab! It's perfect for both work and play, and the battery lasts for hours. Highly recommended!"</p>
              <h5>- Sarah J., Graphic Designer</h5>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-4">
            <div className="testimonial-card text-center">
              <img
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt="Jane Smith"
                className="testimonial-img mb-3"
              />
              <p>"The camera quality is amazing! I can take stunning photos on the go, and it's incredibly fast."</p>
              <h5>- John D., Photographer</h5>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-md-4">
            <div className="testimonial-card text-center">
              <img
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="Mark Wilson"
                className="testimonial-img mb-3"
              />
              <p>"I was looking for a reliable tablet for my daily tasks. The Lenovo Tab has exceeded my expectations!"</p>
              <h5>- Emily R., Student</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


