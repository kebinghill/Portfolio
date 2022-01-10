import React from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import ProjectCard from './ProjectCard';


const ProjectList = () => {
  return (
    <div className="project-list">
      <FaAngleLeft className="project-arrows"/>
      <ProjectCard />
      <FaAngleRight className="project-arrows"/>
    </div>
  );
};

export default ProjectList;
