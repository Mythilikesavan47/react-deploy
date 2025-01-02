import React from 'react';
import './home.css';  // Make sure your CSS file is in the correct path
import Footer from '../Footer';  // Assuming Footer is a sibling component in the correct path

const Home = () => {
  return (
    <div className="home-container">
      <section id="features" className="py-5" style={{ backgroundColor: 'black', overflow: 'hidden' }}>
        <div className="container text-center">
          <h1 className="mb-4" style={{ color: 'white' }}>NETFLIX</h1>
          <div className="image-scroll-container">
            <div className="image-scroll">
              <img
                src="https://motorolain.vtexassets.com/arquivos/moto-tab-g62-pdp-icon-catchall-for-your-best-look-qh283qqv.jpg"
                className="d-block w-100 img-fluid"
                alt="Feature 1"
              />
              <img
                src="https://img.us.news.samsung.com/us/wp-content/uploads/2019/07/30155346/Product-Image-Galaxy-Tab-S6-2.jpg"
                className="d-block w-100 img-fluid"
                alt="Feature 2"
              />
              <img
                src="https://images.gizbot.com/600x400/ph-big/img_og/redmi-pad-se-to-go-for-first-sale-today-in-india1713933896.jpg"
                className="d-block w-100 img-fluid"
                alt="Feature 3"
              />
           </div>
          </div>
        </div>
     </section>

    <Footer />  {/* Footer component correctly placed */}
 </div>
 );
};

export default Home;

