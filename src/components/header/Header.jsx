import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { navLinks } from "../../assets/data/navLinks";
import { Link } from "react-router-dom";
import { RiSearch2Line, RiShoppingCart2Line } from "react-icons/ri";
import Cart from "../cart/Cart";

function Header() {
  const [searchVal, setSearchVal] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const cartRef = useRef(null);

  const cartItem = useSelector((state) => state.cart);

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      // Clicked outside of the popup, so close it
      showHide(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showCart]);

  return (
    <header className="header" id="top">
      <div className="container">
        <nav className=" row align-items-center">
          <div className="col-lg-4">
            <h3>LOGO</h3>
          </div>
          <div className="col-lg-8">
            <ul className="nav__items d-flex justify-content-end flex-wrap">
              {navLinks.map((link, i) => (
                <li className="nav__link" key={i}>
                  <Link to={link.link} className="link">
                    {link.name}
                  </Link>
                  {link.subItems && (
                    <ul className="sub__link border">
                      {link.subItems.map((subLink, j) => (
                        <li className="sub__nav__link" key={j}>
                          <Link
                            to={`products/${subLink.name}`}
                            className="link"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="nav__link">
                <RiSearch2Line
                  className="icon"
                  onClick={() => setShowSearch(!showSearch)}
                />
                {showSearch && (
                  <div className="product__search">
                    <form action="">
                      <input
                        type={"text"}
                        placeholder={"Search products..."}
                        name={"search"}
                        required={'true'}
                        className="px-2"
                        onChange={(e) => setSearchVal(e.target.value)}
                      />

                      <Link
                        to={`/search/${searchVal}`}
                        className="link"
                        onClick={() => setShowSearch(false)}
                      >
                        <button type="submit">
                          <RiSearch2Line className="icon" />
                        </button>
                      </Link>
                    </form>
                  </div>
                )}
              </li>
              <li className="nav__link" ref={cartRef}>
                <RiShoppingCart2Line
                  className="icon"
                  onClick={() => setShowCart(!showCart)}
                />
                <span className="cart__items__length border border-danger">
                  {cartItem.length}
                </span>
                {showCart && <Cart showHide={setShowCart} status={showCart} />}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
