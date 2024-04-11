import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../product__card/ProductCard";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination} from "swiper/modules";

function UniqueProducts({ category, key }) {
  const [uniqueProducts, setUniqueProducts] = useState([]);
  const alcoholProducts = useSelector(
    (state) => state.products.alcoholProducts
  );

  useEffect(() => {
    const filteredProducts = alcoholProducts.filter(
      (product) => product.type === category
    );
    setUniqueProducts(filteredProducts);
  }, [category]);
  return (
    <div className="featured" key={key}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="top__section">
              <h4>{category}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, hic?
              </p>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerGroup={5}
            navigation={true}
            slidesPerView={5}
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
            {uniqueProducts.map((product, i) => (
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

export default UniqueProducts;
