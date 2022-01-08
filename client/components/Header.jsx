import React from 'react';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-titles">
      <div id="title">KEVIN GIL</div>
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
