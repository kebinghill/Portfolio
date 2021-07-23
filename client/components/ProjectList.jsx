import React from 'react';
import SingleProject from './SingleProject';

const ProjectList = () => {
  const arr = [{name: 'Attack of the Code', image: '/images/Attack-of-the-code.png'}, {name: 'Example 2', image: '/images/Attack-of-the-code.png'}];
  return (
    <div>
      <div id="code-section" className="code-section-container">
        <div className="section-title">CODE</div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          width: '100vw',
          height: '450px',

        }}>
          {arr.map((project)=>{
            return <SingleProject key={project.name} projects={project}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
