import React from 'react';

const SocialLinks = () => {
  return (
    <div className="social-links">
      {/* GITHUB LINK */}
      <a href="https://github.com/kebinghill" className="link">
        <img
          src="/images/whitegithub.png"
          alt="Github"
          height="30"
          width="30"
        />
      </a>
      {/* LINKIN LINK */}
      <a href="https://linkedin.com/in/kebinghill/" className="link">
        <img
          src="/images/whitelinkedin.png"
          alt="LinkedIn"
          height="30"
          width="30"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
