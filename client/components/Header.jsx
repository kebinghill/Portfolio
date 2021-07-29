import React from 'react';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <div className="image-container">
      <img
        src="/images/screenshot.png"
        alt="Art Image"
        className="header-image"
      />
      <div className="title">KEVIN GIL</div>
      <div className="sub-title">SOFTWARE ENGINEER</div>
      <PageLinks />
      <SocialLinks />
    </div>
  );
};

export default Header;
