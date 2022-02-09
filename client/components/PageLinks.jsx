import React from "react";
import { Link } from "react-router-dom";

function Bio() {
  return <h2>Home</h2>;
}

const PageLinks = () => {
  return (
    <div className="page-links">
      <Link to="/bio" className="page-link header-link">
        Bio
      </Link>
      <Link to="/code" className="page-link header-link">
        Code
      </Link>
      <Link to="/music" className="page-link header-link">
        Music
      </Link>
    </div>
  );
};

export default PageLinks;
