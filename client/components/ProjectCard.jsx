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
          {/*TODO MOVE INLINE STYLING TO CSS SHEET*/}
          <div
            style={{
              borderRadius: "3px",
              backgroundImage: `url(${attackOfTheCodeImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "35vh",
              width: "70vw",
            }}
          ></div>
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
