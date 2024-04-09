import React from "react";
import { GiRoundStar } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from "react-icons/md";

function ProductCard({ product }) {
  return (
    product && (
      <div className="product__card ">
        <div className="product__card__image ">
          <img className="border" src={product&& product.images[0]} alt={`${product.images[0]}`} />
        </div>
        <div className="px-3">
          <div className="product__card__rating d-flex gap-1 justify-content-center pt-2">
            <GiRoundStar className="icon" />
            <GiRoundStar className="icon" />
            <GiRoundStar className="icon" />
            <GiRoundStar className="icon" />
            <GiRoundStar className="icon" />
          </div>
          <h6 className="product__card__name my-2">{product.name}</h6>
          <div className="product__card__price">
            <h6 className="before">
              <del>Rs.{product.previousPrice}</del>
            </h6>
            <h6 className="after">Rs.{product.discountedPrice}</h6>
          </div>
        </div>
        <div className="add__to d-flex justify-content-center gap-2 pb-4">
          <Link to={`/product/${product.id}`} className="link cyan__button">
            <MdAddShoppingCart className="icon" />
          </Link>
          <Link to={`/${product.id}`} className="link red__button">
            <MdOutlineRemoveRedEye className="icon"/>
          </Link>
        </div>
      </div>
    )
  );
}

export default ProductCard;
