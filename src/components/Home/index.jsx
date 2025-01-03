import React from 'react';
import './home.css';  // Ensure the path to your CSS file is correct
import Footer from '../Footer';  // Assuming Footer is a sibling component in the correct path

const Home = () => {
  return (
    <div className="home-container">
      {/* Slideshow Section */}
      <section id="carouselSection" className="py-5" style={{ backgroundColor: 'black', overflow: 'hidden' }}>
        <div className="container text-center">
          <h1 className="mb-4" style={{ color: 'white' }}>NETFLIX</h1>
          
          {/* Bootstrap Carousel */}
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              {/* First Slide */}
              <div className="carousel-item active">
                <img
                  src="https://motorolain.vtexassets.com/arquivos/moto-tab-g62-pdp-icon-catchall-for-your-best-look-qh283qqv.jpg"
                  alt="Lenovo Tab Image 1"
                  className="d-block mx-auto img-fluid"
                />
              </div>
              {/* Second Slide */}
              <div className="carousel-item">
                <img
                  src="https://img.us.news.samsung.com/us/wp-content/uploads/2019/07/30155346/Product-Image-Galaxy-Tab-S6-2.jpg"
                  alt="Lenovo Tab Image 2"
                  className="d-block mx-auto img-fluid"
                />
              </div>
              {/* Third Slide */}
              <div className="carousel-item">
                <img
                  src="https://images.gizbot.com/600x400/ph-big/img_og/redmi-pad-se-to-go-for-first-sale-today-in-india1713933896.jpg"
                  alt="Lenovo Tab Image 3"
                  className="d-block mx-auto img-fluid"
                />
              </div>
            </div>
            {/* Carousel Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />  {/* Footer component correctly placed */}
    </div>
  );
};

export default Home;
