import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="social-links" >
      <a href="https://github.com/kebinghill" target="_blank">
        <FaGithubSquare className="social-link header-link"/>
      </a>
      <a href="https://linkedin.com/in/kebinghill/" target="_blank">
        <FaLinkedin className="social-link header-link"/>
      </a>
    </div>
  );
};

export default SocialLinks;
