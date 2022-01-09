import React from 'react';
import { Link } from 'react-router-dom';

import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-titles">
      <Link to="/" className="title">KEVIN GIL</Link>
      <div id="sub-title">SOFTWARE ENGINEER</div>
      </div>
      <div className="header-links">
        <PageLinks />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Header;
