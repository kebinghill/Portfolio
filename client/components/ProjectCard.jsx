import React, { useState } from "react";
import attackOfTheCodeImage from "../../public/images/attack-of-the-code.png";

const ProjectCard = (props) => {
  const [currentProject, editCurrentProject] = useState("");

  if (props.projects.length > 0) {
    if (currentProject === "") {
      return (
        <div className="project-card">
          <a href={props.projects[0].link} target="_blank">
            {props.projects[0].name}
          </a>
          <img
            src={attackOfTheCodeImage}
            alt="Nothing to see here"
            height="150px"
            width="250px"
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
