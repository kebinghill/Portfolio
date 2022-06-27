import React, { useState } from "react";
import attackOfTheCodeImage from "../../public/images/attack-of-the-code.png";

const ProjectCard = (props) => {
  const [currentProject, editCurrentProject] = useState("");

  if (props.projects.length > 0) {
    if (currentProject === "") {
      return (
        <div className="carousel_photo initial">
          <a href={props.projects[0].link} target="_blank">
            {props.projects[0].name}
          </a>
          {/* TODO: figure out class names with img tags, make images dynamic with resizing of window */}
          <img
            src={attackOfTheCodeImage}
            alt="Nothing to see here"
            height="175px"
            width="225px"
            className="project-image"
          />
        </div>
      );
    } else {
      return (
        <div>
          <a href={props.projects[currentProject].link} target="_blank">
            {props.projects[currentProject].name}
          </a>
          {/* {props.projects[currentProject].headerImage} */}
        </div>
      );
    }
  } else {
    return <div className="project-card"></div>;
  }
};

export default ProjectCard;
