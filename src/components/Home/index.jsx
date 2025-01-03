import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Lenovo Tab</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
              <li className="nav-item"><a className="nav-link" href="#cta">Buy Now</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Slideshow Section */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://motorolain.vtexassets.com/arquivos/moto-tab-g62-pdp-icon-catchall-for-your-best-look-qh283qqv.jpg" alt="Lenovo Tab Image 1" className="d-block mx-auto" />
          </div>
          <div className="carousel-item">
            <img src="https://img.us.news.samsung.com/us/wp-content/uploads/2019/07/30155346/Product-Image-Galaxy-Tab-S6-2.jpg" alt="Lenovo Tab Image 2" className="d-block mx-auto" />
          </div>
          <div className="carousel-item">
            <img src="https://images.gizbot.com/600x400/ph-big/img_og/redmi-pad-se-to-go-for-first-sale-today-in-india1713933896.jpg" alt="Lenovo Tab Image 3" className="d-block mx-auto" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Video Section */}
      <section id="video" className="container my-5">
        <h2 className="text-center mb-5">Discover the Lenovo Tab</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/OpbfqsEpH7o?si=Ig2h0RhFyBYrrS8W" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
    </div>
  );
};

export default Home;

