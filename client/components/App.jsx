import React from 'react';

const App = () => {
  return (
    <div className="main">
      <div className="image-container">
        <img
          src="/images/screenshot.png"
          alt="Main Page Image Here"
          className="header-image"
        />
        <div className="page-links">
          <a className="link">Code</a>
          <a className="link">Music</a>
          <a className="link">Bio</a>
        </div>
      </div>
      <div className="project-list"></div>
    </div>
  );
};

export default App;
