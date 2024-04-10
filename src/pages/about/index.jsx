import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pb-3">
            <div className="top__section">
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                ipsa.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__content">
                <h5>We are the best services provider</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, nulla soluta recusandae veniam hic nostrum. Minus quod modi, beatae non necessitatibus maxime quam quis est! <br /><br /> Minima minus veniam eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non soluta similique. Sapiente odio non aspernatur enim accusantium laudantium vel perferendis quas doloremque illum aliquid, ab repellendus, omnis nobis qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, iste. Suscipit quae commodi dolore, nemo et hic iure, optio culpa amet unde, asperiores quasi dolorum sed blanditiis. Quae, placeat fugiat?</p>
                <Link to={'/'} className="link cyan__button">Explore</Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__image">
                <img src="./assets/images/about/about.jpg" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
