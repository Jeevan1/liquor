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
