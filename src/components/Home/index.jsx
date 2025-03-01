import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
     <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
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
      </div>
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

    </div> 
  );
};

export default Home;



