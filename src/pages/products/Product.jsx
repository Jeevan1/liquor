import React, { useEffect, useState } from "react";
import { GiRoundStar } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductCard, SimilarProducts } from "../../components";

function Products({ categories }) {
  const [products, setProducts] = useState([]);
  const alcoholProducts = useSelector(
    (state) => state.products.alcoholProducts
  );
  const { category, searchVal } = useParams();

  useEffect(() => {
    if ((category && category !== "all") || "") {
      const filteredProducts = alcoholProducts.filter(
        (product) =>
          product.type ===
          category.charAt(0).toLocaleUpperCase() + category.slice(1)
      );
      setProducts(filteredProducts);
    } else if (searchVal && searchVal) {
      const filterProduct = alcoholProducts.filter((item) =>
        item.name.toLowerCase().includes(searchVal.toLowerCase())
      );
      setProducts(filterProduct);
    } else {
      setProducts(alcoholProducts);
    }
  }, [category, alcoholProducts, searchVal]);

  return (
    <>
      <div className="products">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div className="heading">
                <span>Products</span>/
                <span>
                  {category &&
                    category.charAt(0).toLocaleUpperCase() + category.slice(1)}
                </span>
              </div>
            </div>
            {products.length > 0 ? (
              products.map((product, i) => (
                <div className="col-md-3" key={i}>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="col-12">
                <p>
                  No products found for {" "}
                  <span className=" border-bottom border-2">
                    {category &&
                      category.charAt(0).toLocaleUpperCase() +
                        category.slice(1)}
                    {searchVal && searchVal}
                  </span>
                  .
                </p>
              </div>
            )}
            {products.length > 0 ? <div className="view__more">
              <Link to={""} className="link red__button">
                View More
              </Link>
            </div>: ''}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
