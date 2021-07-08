import React from 'react';
import ProjectList from './ProjectList';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const App = () => {
  return (
    <div>
      {/* HEADER IMAGE AND LINKS */}
      <div className="image-container">
        <img
          src="/images/screenshot.png"
          alt="Art Image"
          className="header-image"
        />
        <div className="title">KEVIN GIL</div>
        <PageLinks />
        <SocialLinks />
      </div>
      <ProjectList />
    </div>
  );
};

export default App;
