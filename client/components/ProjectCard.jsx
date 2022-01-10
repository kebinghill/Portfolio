import React from 'react';

const ProjectCard = (props) => {

  if (props.projects.length > 0) {
    return (
      props.projects.map((project, index) => {
        console.log(project.name);
        return (<div className="project-card" key={index}>
          <h2>{project.name}</h2>
        </div>
        );
      })
    )
  } else {
  return <div className="project-card">
  </div>;
  }
};

export default ProjectCard;
