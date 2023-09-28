import React from "react";
import { Routes, Route } from "react-router-dom";
import IntroductionText from "./IntroductionText";
import Header from "./Header";
import Bio from "./Bio";
import Code from "./Code";
import Music from "./Music";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IntroductionText />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/code" element={<Code />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </>
  );
};

export default App;
