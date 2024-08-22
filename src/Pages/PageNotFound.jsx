import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <Link to="/">
        <img
          className="PageNotFound-logo"
          src="./imgs/oops.png"
          alt="Page Not Found"
        />
      </Link>
      <span className="ms-oops">¡¡Oops!!... Page Not Found</span>
    </div>
  );
};

export default PageNotFound;
