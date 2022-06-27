import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  const [projects, getProjects] = useState("");

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = () => {
    axios
      .get("/api/projects")
      .then((response) => {
        const allProjects = response.data;
        getProjects(allProjects);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <FaAngleLeft className="project-arrows --prev" />
        <ProjectCard projects={projects} className="carousel_photo" />
        <FaAngleRight className="project-arrows --next" />
      </div>
    </div>
  );
};

export default ProjectList;
