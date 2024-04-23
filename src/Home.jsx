import React from "react";
import "./index.css";

const Home = ({ step, setStep, updateBackgroundImg }) => {
  const handleNextStep = () => {
    setStep(step + 1);
    updateBackgroundImg(step + 1);
  };
  return (
    <div className="step-container home">
      <div />
      <div className="content">
        <div>
          <h2>SO, YOU WANT TO TRAVEL TO</h2>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button onClick={handleNextStep}>EXPLORE</button>
      </div>
    </div>
  );
};

export default Home;
