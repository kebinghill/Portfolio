import React from 'react';
import ProjectList from './ProjectList';
import BioSection from './BioSection';
import Header from './Header';
import Three from './Three';
const App = () => {
  return (
    <div>
      <Header />
      <BioSection />
      <ProjectList />
      {/* <Three /> */}
    </div>
  );
};

export default App;
