import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../product__card/ProductCard";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination} from "swiper/modules";

function Featured() {
  const alcoholProducts = useSelector(
    (state) => state.products.alcoholProducts
  );
  return (
    <div className="featured">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="top__section">
              <h4>Featured Products</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                ipsa.
              </p>
            </div>
          </div>
          <Swiper
            slidesPerView={5}
            slidesPerGroup={5}
            modules={[Navigation, Pagination]}
            navigation={true}
            breakpoints={{
              240:{
                slidesPerView:1,
                slidesPerGroup:1,
              },
              320: {
                slidesPerView: 2,
                slidesPerGroup:2,
              },
              480: {
                slidesPerView: 2,
                slidesPerGroup:2,
              },
              780: {
                slidesPerView: 4,
                slidesPerGroup:4,
              },
              1000: {
                slidesPerView: 5,
                slidesPerGroup:5,
              }
            }}
            className="mySwiper "
          >
            {alcoholProducts.map((product, i) => (
              <SwiperSlide className=" py-3" key={i}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="view__more">
            <Link to={""} className="link red__button">
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
