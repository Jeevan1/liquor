import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay, EffectFlip } from "swiper/modules";

function Banner() {
  SwiperCore.use([Autoplay, EffectFlip]);
  return (
    <div className="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="top__content">
              <SectionHeading
                h6={"New Products"}
                h2={() => (
                  <h2>
                    Best<span> Price</span> This <span>Festival</span>
                  </h2>
                )}
                p={`Lorem, ipsum dolor sit amet consectetur jjkdhfkj hkk hdhh h
        uhuhadipisicing elit. Neque, perspiciatis!`}
                btn={"shop now"}
                link={""}
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="bottom__content">
              <Swiper
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                effect={"creative"}
              >
                <SwiperSlide>
                  <img
                    src="./assets/images/banner/banner1.jpg"
                    alt="banner__img"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./assets/images/banner/banner2.jpg"
                    alt="banner__img"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="./assets/images/banner/banner3.jpg"
                    alt="banner__img"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
