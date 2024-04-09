import React, { useEffect, useState } from "react";
import { GiRoundStar } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { SimilarProducts } from "../../components";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");
  const alcoholProducts = useSelector(
    (state) => state.products.alcoholProducts
  );
  const { id } = useParams();
  const productId = parseInt(id);

  const changeSrc = (src) => {
    setImage(src);
  };

  useEffect(() => {
    const filteredProducts = alcoholProducts.filter(
      (product) => product.id === productId
    );
    setProduct(filteredProducts[0]);
    setImage(filteredProducts[0].images[0]);
  }, [image, productId]);

  return (
    <>
      <div className="product__details">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  {product.images && product.images.length > 0 && (
                    <img src={image} alt={product.name} />
                  )}
                  <div className="row images">
                    {product.images &&
                      product.images.map((image, i) => (
                        <div className="col-4" key={i}>
                          <img
                            src={image}
                            alt={product.name}
                            onClick={() => changeSrc(image)}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="product__details__content">
                <div className="pos">
                  <p>
                    <span>Home</span>/<span>Tuborg</span>
                  </p>
                </div>
                <div className="heading">
                  <h4>{product.name}</h4>
                  <div className="rating">
                    <GiRoundStar className="icon" />
                    <GiRoundStar className="icon" />
                    <GiRoundStar className="icon" />
                    <GiRoundStar className="icon" />
                    <GiRoundStar className="icon" />
                  </div>
                </div>
                <h4 className="price">
                  <span className="old__price">
                    <del>Rs.{product.previousPrice}</del>
                  </span>
                  <span className="new__price"> {product.discountedPrice}</span>
                </h4>
                <form action="" className="form">
                  <select name="Select Size" id="qty">
                    <option value="0">Select Size</option>
                    <option value="1">1</option>
                    <option value="1">1/2</option>
                    <option value="1">1/4</option>
                  </select>
                  <div className="rows">
                    <input type="number" placeholder="1" name="qty" />
                    <button type="submit" className="red__button">
                      Add to cart
                    </button>
                  </div>
                </form>
                <div className="description">
                  <h6>Product Details</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, temporibus amet. Eius in, quas quis quod doloribus
                    recusandae laboriosam optio asperiores, sequi, explicabo
                    iure. Eaque aperiam nam ullam laudantium consequatur?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* similar products */}
      <SimilarProducts productId={productId}/>
    </>
  );
}

export default ProductDetails;
