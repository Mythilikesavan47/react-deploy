import React from 'react';
import './home.css';
import Footer from '../Footer';
import Slider from 'react-slick';

const Home = () => {
  // Slick settings for the slideshow
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Slideshow speed
  };

  return (
    <div className="home-container">
      <div className="welcome-text">
        <h1>Welcome to Our Website!</h1>

        {/* Slideshow Section */}
        <div className="slideshow">
          <Slider {...settings}>
            <div>
              <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" />
            </div>
            <div>
              <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
            </div>
            <div>
              <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
            </div>
          </Slider>
        </div>

        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Lenovo Tab</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#features">Features</a></li>
                <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
                <li className="nav-item"><a className="nav-link" href="#cta">Buy Now</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
