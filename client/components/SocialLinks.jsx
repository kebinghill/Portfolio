import React from 'react';

const SocialLinks = () => {
  return (
    <div className="social-links">
      {/* GITHUB LINK */}
      <a href="https://github.com/kebinghill" className="social-link" target="_blank">
        <img
          src="/images/whitegithub.png"
          alt="Github"
          height="28"
          width="28"
        />
      </a>
      {/* LINKIN LINK */}
      <a
        href="https://linkedin.com/in/kebinghill/"
        className="social-link"
        target="_blank"
      >
        <img
          src="/images/whitelinkedin.png"
          alt="LinkedIn"
          height="28"
          width="28"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
