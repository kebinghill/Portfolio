import React from 'react';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <div>
      <img
        src="/images/screenshot.png"
        alt="Art Image"
        className="header-image"
      />
      <div className="title header-overlay">KEVIN GIL</div>
      <div className="sub-title header-overlay">SOFTWARE ENGINEER</div>
      <img
        src="./images/headshot1.png"
        alt="Headshot Photo"
        id="headshot"
        className="header-overlay"
      />
      <PageLinks />
      <SocialLinks />
    </div>
  );
};

export default Header;
