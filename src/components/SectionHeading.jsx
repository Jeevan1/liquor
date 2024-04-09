import React from "react";
import { Link } from "react-router-dom";

function SectionHeading({h6, h2, btn, link, p}) {
  return (
    <div className="section__heading">
      <h6>{h6}</h6>
      {typeof h2 === "function" ? h2() : h2}
      <p>
        {p}
      </p>
      <Link to={link} className="link red__button">
        {btn}
      </Link>
    </div>
  );
}

export default SectionHeading;
