import React, { useState } from "react";
import { navLinks } from "../../assets/data/navLinks";
import { Link } from "react-router-dom";
import { RiSearch2Line, RiShoppingCart2Line } from "react-icons/ri";

function Header() {
  const [searchVal, setSearchVal] = useState("");
  return (
    <header className="header" id="top">
      <div className="container">
        <nav className=" row align-items-center">
          <div className="col-lg-4">
            <h3>LOGO</h3>
          </div>
          <div className="col-lg-8">
            <ul className="nav__items d-flex justify-content-end">
              {navLinks.map((link, i) => (
                <li className="nav__link" key={i}>
                  <Link to={`products/all`} className="link">
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
                <RiSearch2Line className="icon" />
                  <div className="product__search">
                    <input
                      type={"text"}
                      placeholder={"Search products..."}
                      name={"search"}
                      required={true}
                      className="px-2"
                      onChange={(e) => setSearchVal(e.target.value)}
                    />
                    
                    <Link to={`/search/${searchVal}`} className="link">
                      <RiSearch2Line className="icon" />
                    </Link>
                  </div>
              </li>
              <li className="nav__link">
                <RiShoppingCart2Line className="icon" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;