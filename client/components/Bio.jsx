import React from "react";
import { isMobile } from "react-device-detect";
// import classNames from "classnames";

const Bio = () => {
  return (
    <div>
      <div className="section-container">
        {/* TODO: need to configure css for bio and add resume image/doc below in separate container*/}
        <div
          className={isMobile ? "bio-section-mobile" : "bio-section-desktop"}
        >
          <p className="bio-text">
            Hi, my name is Kevin and I am a software engineer. I graduated from
            Fullstack Academy's Flex Web Development program in July of 2021. A
            year later I worked as a Fullstack developer with a telehealth
            platform called Monument.
          </p>
          <p className="bio-text">
            Check out my resume below for my work history and/or navigate to the
            code tab above to check out some projects I've worked on.
          </p>
        </div>
        <div className="section-container">
          <a
            href="https://drive.google.com/file/d/1tP6SPC1wXcTKCJnJD3TM-Bk6LPRhTP89/view?usp=sharing"
            target="_blank"
          >
            <div className="bio-section-mobile resume"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bio;
