import React from 'react';

const SingleProject = ({projects}) => {
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
<h2>{projects.name}</h2>
<img src={projects.image} alt={projects.name} style={{
  width: '45vw',
  height: '30vh',
}}/>
  </div>;
};

export default SingleProject;
