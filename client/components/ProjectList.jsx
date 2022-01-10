import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import ProjectCard from './ProjectCard';


const ProjectList = () => {
  const [projects, getProjects] = useState('');

  useEffect(() => {
    getAllProjects();
  }, []);

  const url = 'http://localhost:3000/api/';

  const getAllProjects = () => {
    axios.get( `${url}projects`).then((response) => {
      const allProjects = response.data;
      getProjects(allProjects);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  return (
    <div className="project-list">
      <FaAngleLeft className="project-arrows"/>
      <ProjectCard projects={projects}/>
      <FaAngleRight className="project-arrows"/>
    </div>
  );
};

export default ProjectList;
