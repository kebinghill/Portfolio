import React from "react";
import { isMobile } from "react-device-detect";
// import classNames from "classnames";

const Bio = () => {
  return (
    <div>
      <div className="section-container">
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
        <div className="section-container-resume">
          <a
            href="https://drive.google.com/file/d/1tP6SPC1wXcTKCJnJD3TM-Bk6LPRhTP89/view?usp=sharing"
            target="_blank"
          >
            <div className="resume-container resume"></div>
          </a>
          {!isMobile && (
            <div className="resume-container-text">
              <div id="sub-title">SUMMARY</div>
              <p className="bio-text">
                I started my career working as a technical support agent for
                startups such as Peloton and Monument. In 2021, I went through
                an intensive 6 month full-stack development bootcamp where I
                learned to program web apps using Javascript and associated
                frameworks. I then used that knowledge to work as part of the
                Monument engineering team to improve user experience with new
                features, improvements on old features, and bug fixes in a real
                world production environment.
              </p>
              <div id="sub-title">RELEVANT EXPERIENCE</div>
              <p className="bio-text">Software Engineer - Monument</p>
              <ul>
                <li className="experience">
                  Created and implemented the “DailyAffirmations” feature,
                  allowing users to receive personalized affirmations on their
                  dashboards. Integrated with Customer.io to send affirmations
                  via text messages to opted-in users.
                </li>
                <li className="experience">
                  Developed relational tables,service methods,and testing to
                  facilitate the integration of employers on the app, expanding
                  our reach and providing additional support to those in need.
                </li>
                <li className="experience">
                  Resolved various user experience bugs promptly and effectively
                  to ensure seamless usage of the application.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bio;
