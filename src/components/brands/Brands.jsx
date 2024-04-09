import React from "react";
import { brands } from "../../assets/data/brands";

function Brands() {
  return (
    <div className="brands">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="brands__container">
              {brands.map((brands, index) => (
                <div className="brand__item" key={index}>
                  <img src={brands.image}  alt={brands.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
