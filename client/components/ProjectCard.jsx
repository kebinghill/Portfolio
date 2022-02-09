import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';


const ProjectCard = (props) => {

  const [currentProject, editCurrentProject] = useState('');

  if (props.projects.length > 0) {
    if (currentProject === '') {
    return (
      <div>
        {props.projects[0].name}
        {/* {props.projects[0].headerImage} */}
      </div>
    )} else {
      return (
        <div>
          {props.projects[currentProject].name}
          {/* {props.projects[currentProject].headerImage} */}
        </div>
      )
    }
  } else {
  return <div className="project-card">
  </div>;
  }
};

export default ProjectCard;
