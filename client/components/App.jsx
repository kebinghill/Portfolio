import React from 'react';
import ProjectList from './ProjectList';
import BioSection from './BioSection';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header/>
      <BioSection />
      <ProjectList />
    </div>
  );
};

export default App;
