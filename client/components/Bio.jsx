import React from "react";

const Bio = () => {
  return (
    <div>
      <div className="section-container">
        {/* TODO: need to configure css for bio and add resume image/doc below in separate container*/}
        <div className="bio-section">
          <p className="bio-text">
            Hi, my name is Kevin and I am a software engineer. I graduated from
            Fullstack Academy's Flex Web Development program in July of 2021.
            Before Fullstack Academy, I took various courses offered on Udemy
            and Codecademy, both sites I still use to this day.
          </p>
          <p className="bio-text">
            Check out my resume below for my work history and/or navigate to the
            code tab above to check out some projects I've created.
          </p>
        </div>
        <div className="section-container">
          <a
            href="https://drive.google.com/file/d/1tP6SPC1wXcTKCJnJD3TM-Bk6LPRhTP89/view?usp=sharing"
            target="_blank"
          >
            <div className="bio-section resume"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bio;
