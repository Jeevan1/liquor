import React from "react";
import { IoCall } from "react-icons/io5";

const Map = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          width="100%"
          height="400"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Santosh+Raj+Construction&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
        <a href="https://www.analarmclock.com/">online alarm clock</a>
        <br />
        <a href="https://online.stopwatch-timer.net/"></a>
        <br />
        <style>{`
            .mapouter {
              position: relative;
              text-align: right;
              height: 400px;
              width: 100%;
            }
            .gmap_canvas {
              overflow: hidden;
              background: none !important;
              height: 400px;
              width: 100%;
            }
          `}</style>
        <a href="https://www.mapembed.net">google satellite maps zoom</a>
      </div>
    </div>
  );
};
function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="top__section">
              <h4>Contact Us</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                ipsa.
              </p>
            </div>
          </div>
          <div className="col-12">
            <Map />
          </div>
          <div className="col-lg-6">
            <div className="contact__content">
              <h4>Fell free to send us a message about your needs</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
                nobis repellat architecto consequatur, accusamus ut enim
                aliquam? Labore, esse culpa?
              </p>
              <h5>
                For any enquiry, Call Us:{" "}
                <span>
                  <IoCall className="icon" />
                </span>
                <small> +977 9834346345</small>
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact__form">
              <form action="">
                <input name="name" type="text" placeholder="Enter your name" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <textarea name="message" placeholder="Message" id="" cols="" rows="5"></textarea>
                <button className="red__button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
