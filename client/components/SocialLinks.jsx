import React from 'react';

const SocialLinks = () => {
  return (
    <div className="social-links">
      {/* GITHUB LINK */}
      <a href="https://github.com/kebinghill" className="link" target="_blank">
        <img
          src="/images/githubwhite.png"
          alt="Github"
          height="25"
          width="25"
          border="2px red solid"
        />
      </a>
      {/* LINKIN LINK */}
      <a
        href="https://linkedin.com/in/kebinghill/"
        className="link"
        target="_blank"
      >
        <img
          src="/images/linkedinwhite.png"
          alt="LinkedIn"
          height="26"
          width="26"
          border="2px red solid"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
