import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Banner, Brands, Featured, Footer, Offer, UniqueProducts } from "../../components";

function Home() {
  const [category, setCategory] = useState([]);
  const alcoholProducts = useSelector(
    (state) => state.products.alcoholProducts
  );

  useEffect(() => {
    // Filter unique categories from alcohol products
    const uniqueCategories = Array.from(
      new Set(
        alcoholProducts
          .map((product) => product.type)
          .sort((a, b) => a.localeCompare(b))
      )
    );

    setCategory(uniqueCategories);
    
  }, []);
  return (
    <div className="home">
      <Banner />
      <Brands />
      <Featured />
      <Offer />
      {
        category.map((category,i) => <UniqueProducts category={category} key={i}/>)
      }

    </div>
  );
}

export default Home;
