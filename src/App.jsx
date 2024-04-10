import React, { useEffect, useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Contact, Home, ProductDetails, Products } from "./pages";
import { Cart, Footer, Header } from "./components";
import { useSelector } from "react-redux";

function App() {
  const [category, setCategory] = useState([]);
  const alcoholProducts = useSelector(
    (state) => state.products.alcoholProducts
  );

  const Layout = () => {
    return (
      <div className="app">
        <Header />
        <Outlet />
        <Footer category={category}/>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/products/:category", element: <Products /> },
        { path: "/search/:searchVal", element: <Products/> },
        { path: "/:id", element: <ProductDetails /> },
        // { path: "/products", element: <Products /> },
      ],
    },
  ]);
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
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
