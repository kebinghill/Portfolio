import React, { useState } from "react";

const ProjectCard = (props) => {
  const [currentProject, editCurrentProject] = useState("");

  if (props.projects.length > 0) {
    if (currentProject === "") {
      return (
        <div>
          <a href={props.projects[0].link} target="_blank">
            {props.projects[0].name}
          </a>
          {/* {props.projects[0].headerImage} */}
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
