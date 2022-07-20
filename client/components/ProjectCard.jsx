import React from "react";
import attackOfTheCodeImage from "../../public/images/attack-of-the-code.png";

const ProjectCard = (props) => {
  if (props.projects.length > 0) {
    props.projects.forEach((el) => {
      return (
        <div>
          <p>TEXT</p>
        </div>
      );
    });
  }
  console.log(props.projects);
  return <div>REACHED NULL</div>;
};

export default ProjectCard;
