import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoodreadsG, FaGooglePlusG, FaInstagram } from "react-icons/fa";

function Footer({ category }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer__about">
              {/* <img src="" alt="" /> */}
              <h2>LOGO</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad veniam.
              </p>
            </div>
          </div>
          <hr />
          <div className="col-md-3">
            <div className="footer__featured">
              <h5>Featured</h5>
              <ul>
                {category &&
                  category.map((category, i) => (
                    <li key={i} className="pb-1">
                      <Link to={""} className="link">
                        {category}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <hr />
          <div className="col-md-3">
            <div className="footer__contact">
              <h5>Contact Us</h5>
              <div className="footer__contact__item">
                <h6>ADDRESS</h6>
                <p>Budhanilkantha-13, KTM</p>
              </div>
              <div className="footer__contact__item">
                <h6>PHONE</h6>
                <p>+977 9832323234</p>
              </div>
              <div className="footer__contact__item">
                <h6>EMAIL</h6>
                <p>example@gmail.com</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="col-md-3">
            <div className="footer__gallery">
              <h5>Gallery</h5>
              <div className="footer__gallery__items">
                <img src="../../assets/images/tuborg.png" alt="img" />
                <img src="../../assets/images/tuborg.png" alt="img" />
                <img src="../../assets/images/tuborg.png" alt="img" />
                <img src="../../assets/images/tuborg.png" alt="img" />
                <img src="../../assets/images/tuborg.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-4 pb-3">
            <div className="footer__payements d-flex gap-2">
              <img src="../../assets/images/payement/esewa.jpg" alt="esewa" />
              <img src="../../assets/images/payement/khalti.jpg" alt="khalti" />
              <img src="../../assets/images/payement/fonepay.jpg" alt="phonepay" />
            
            </div>
          </div>
          <hr />
          <div className="col-md-4">
            <p className="footer__copyright">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
          </div>
          <hr />
          <div className="col-md-4">
            <div className="footer__social__media">
              <Link to={""} className="link">
                <FaFacebookF className="icon"/>
              </Link>
              <Link to={""} className="link">
                <FaInstagram className='icon' />
              </Link>
              <Link to={""} className="link">
                <FaGooglePlusG className='icon' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
