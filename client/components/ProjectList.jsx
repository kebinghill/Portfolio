import React, { useEffect, useState } from "react";
import axios from "axios";
import attackOfTheCodeImage from "../../public/images/attack-of-the-code.png";

const ProjectList = () => {
  const [projects, getProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getAllProjects();
    setLoading(false);
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-list">
      {Object.values(projects).map((project) => {
        return (
          <div className="project-card" key={project.id}>
            <a href={project.link}>
              <h3>{project.name}</h3>

              {
                //TO DO: IMAGE RENDERING
                <img
                  src={attackOfTheCodeImage}
                  alt="Nothing to see here"
                  height="200px"
                  width="350px"
                />
              }

              {
                //TO DO: ADD DESCRIPTION TO DB
              }
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
