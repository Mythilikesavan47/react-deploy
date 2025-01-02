import React from 'react';
import './home.css';  // Ensure your CSS file is in the correct path
import Footer from '../Footer';  // Assuming Footer is a sibling component in the correct path

const Home = () => {
  return (
    <div className="home-container">
      <section id="features" className="py-5" style={{ backgroundColor: 'black', overflow: 'hidden' }}>
        <div className="container text-center">
          <h1 className="mb-4" style={{ color: 'white' }}>NETFLIX</h1>
          
          {/* Scrolling Image Section */}
          <div className="image-scroll-container">
            <div className="image-scroll">
              <img
                src="https://estaticos-cdn.prensaiberica.es/clip/a77fa3b2-c422-43ad-9fcb-b4c32f1ef20f_16-9-discover-aspect-ratio_default_0.jpg"
                className="d-block w-100 img-fluid"
                alt="Feature 1"
              />
              <img
                src="https://static.zoomnews.com/thumb/msid-94847568,width-1280,height-720,resizemode-75/94847568.jpg"
                className="d-block w-100 img-fluid"
                alt="Feature 2"
              />
              <img
                src="https://th.bing.com/th/id/OIP.jIACs80gesmpgnYyH4Na5wAAAA?rs=1&pid=ImgDetMain"
                className="d-block w-100 img-fluid"
                alt="Feature 3"
              />
              <img
                src="https://estaticos-cdn.prensaiberica.es/clip/a77fa3b2-c422-43ad-9fcb-b4c32f1ef20f_16-9-discover-aspect-ratio_default_0.jpg"
                className="d-block w-100 img-fluid"
                alt="Feature 1"
              />
              <img
                src="https://static.zoomnews.com/thumb/msid-94847568,width-1280,height-720,resizemode-75/94847568.jpg"
                className="d-block w-100 img-fluid"
                alt="Feature 2"
              />
              <img
                src="https://th.bing.com/th/id/OIP.jIACs80gesmpgnYyH4Na5wAAAA?rs=1&pid=ImgDetMain"
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

export default Home;

