import React from "react";
import { GiRoundStar } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addCart } from "../../store/slice/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (id, pname, type, quantity, price, image) => {
    dispatch(
      addCart({
        id: id,
        name: pname,
        type: type,
        quantity: 1,
        price: price,
        image: image,
      })
    );
  };

  return (
    <div className="product__card">
      <div className="product__card__image">
        <img
          className="border"
          src={`${product && product.images[0]}`} // Ensure product and images exist
          alt={product && product.name} // Use product name as alt text
        />
      </div>
      <div className="px-3">
        <div className="product__card__rating d-flex gap-1 justify-content-center pt-2">
          <GiRoundStar className="icon" />
          <GiRoundStar className="icon" />
          <GiRoundStar className="icon" />
          <GiRoundStar className="icon" />
          <GiRoundStar className="icon" />
        </div>
        <h6 className="product__card__name my-2">{product && product.name}</h6>
        <div className="product__card__price">
          <h6 className="before">
            <del>Rs.{product && product.previousPrice}</del>
          </h6>
          <h6 className="after">Rs.{product && product.discountedPrice}</h6>
        </div>
      </div>
      <div className="add__to d-flex justify-content-center gap-2 pb-4">
        <p
          className="link cyan__button"
          onClick={() =>
            handleAddToCart(product.id, product.name, product.type, product.quantity, product.discountedPrice, product.images[0])
          }
        >
          <MdAddShoppingCart className="icon" />
        </p>
        <Link to={`/${product && product.id}`} className="link red__button">
          <MdOutlineRemoveRedEye className="icon" />
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
