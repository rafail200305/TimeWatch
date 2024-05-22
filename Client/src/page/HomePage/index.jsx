import React from "react";
import "./index.scss"

const HomePage = () => {
  return (
    <div>
      <div id="home-page">
      {/* <div className="contanier"> */}
        <div className="home-page">
          <section id="banner">
          <div className="content">
          <h1>Wood & Cloth Sofa</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              laudantium ab maxime ut quia vel nostrum iure atque.
            </p>

          <button className="buy">BUY NOW</button>
          </div>
          </section>
        {/* </div> */}
      </div>
      </div>

        <section id="category">
        <h1>Featured Category</h1>
        <div className="container">
          <div style={{ display: "inline-block" }} className="image-text1">
            <div className="text">
              <p>Premium Quality</p>
              <h5>Latest foam Sofa</h5>
            </div>
            <img
              src="https://themewagon.github.io/aranoz/img/feature/feature_1.png"
              alt=""
            />
          </div>
          <div className="image-text2">
            <div style={{ display: "inline-block" }} className="image-text2">
              <div className="text">
                <p>Premium Quality</p>
                <h5>Latest foam Sofa</h5>
              </div>
              <img
                src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="image-text3">
            <div className="text">
              <p>Premium Quality</p>
              <h5>Latest foam Sofa</h5>
              <img
                src="https://themewagon.github.io/aranoz/img/feature/feature_3.png"
                alt=""
              />
            </div>
          </div>
          <div className="image-text4">
            <p>Premium Quality</p>
            <h5>Latest foam Sofa</h5>
            <img
              style={{ width: "460px" }}
              src="https://themewagon.github.io/aranoz/img/feature/feature_4.png"
              alt=""
            />
          </div>
        </div>
        </section>
  

    </div>

    
    
  );
};

<div className="carousel-image">


</div>
export default HomePage;
