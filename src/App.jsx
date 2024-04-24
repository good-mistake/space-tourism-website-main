import React, { useState, useEffect } from "react";
import Header from "./Header";
import Crew from "./Crew";
import Destination from "./Destination";
import Technology from "./Technology";
import Home from "./Home";
import CrewBackgroundImg from "./assets/crew/background-crew-desktop.jpg";
import HomeBackgroundImg from "./assets/home/background-home-desktop.jpg";
import DestinationBackgroundImg from "./assets/destination/background-destination-desktop.jpg";
import TechnologyBackgroundImg from "./assets/technology/background-technology-desktop.jpg";
import CrewBackgroundImgTablet from "./assets/crew/background-crew-tablet.jpg";
import HomeBackgroundImgTablet from "./assets/home/background-home-tablet.jpg";
import DestinationBackgroundImgTablet from "./assets/destination/background-destination-tablet.jpg";
import TechnologyBackgroundImgTablet from "./assets/technology/background-technology-tablet.jpg";
import CrewBackgroundImgMobile from "./assets/crew/background-crew-mobile.jpg";
import HomeBackgroundImgMobile from "./assets/home/background-home-mobile.jpg";
import DestinationBackgroundImgMobile from "./assets/destination/background-destination-mobile.jpg";
import TechnologyBackgroundImgMobile from "./assets/technology/background-technology-mobile.jpg";
const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [step, setStep] = useState(1);
  const [backgroundImg, setBackgroundImg] = useState(HomeBackgroundImg);
  const handleNextStep = () => {
    setStep(step + 1, () => {
      updateBackgroundImg(step + 1);
    });
  };
  const handlePrevStep = () => {
    setStep(step - 1, () => {
      updateBackgroundImg(step - 1);
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Home
            nextStep={handleNextStep}
            step={step}
            setStep={setStep}
            updateBackgroundImg={updateBackgroundImg}
          />
        );
      case 2:
        return (
          <Destination
            step={step}
            nextStep={handleNextStep}
            prevStep={handlePrevStep}
          />
        );
      case 3:
        return <Crew nextStep={handleNextStep} prevStep={handlePrevStep} />;
      case 4:
        return <Technology prevStep={handlePrevStep} />;
      default:
        return null;
    }
  };
  const updateBackgroundImg = (newStep) => {
    switch (newStep) {
      case 1:
        if (screenWidth > 775) {
          setBackgroundImg(HomeBackgroundImg);
        } else if (screenWidth < 775 && screenWidth > 425) {
          setBackgroundImg(HomeBackgroundImgTablet);
        } else {
          setBackgroundImg(HomeBackgroundImgMobile);
        }
        break;
      case 2:
        if (screenWidth > 775) {
          setBackgroundImg(DestinationBackgroundImg);
        } else if (screenWidth < 775 && screenWidth > 425) {
          setBackgroundImg(DestinationBackgroundImgTablet);
        } else {
          setBackgroundImg(DestinationBackgroundImgMobile);
        }
        break;
      case 3:
        if (screenWidth > 775) {
          setBackgroundImg(CrewBackgroundImg);
        } else if (screenWidth < 775 && screenWidth > 425) {
          setBackgroundImg(CrewBackgroundImgTablet);
        } else {
          setBackgroundImg(CrewBackgroundImgMobile);
        }
        break;
      case 4:
        if (screenWidth > 775) {
          setBackgroundImg(TechnologyBackgroundImg);
        } else if (screenWidth < 775 && screenWidth > 425) {
          setBackgroundImg(TechnologyBackgroundImgTablet);
        } else {
          setBackgroundImg(TechnologyBackgroundImgMobile);
        }
        break;
      default:
        if (screenWidth > 775) {
          setBackgroundImg(HomeBackgroundImg);
        } else if (screenWidth < 775 && screenWidth > 425) {
          setBackgroundImg(HomeBackgroundImgTablet);
        } else {
          setBackgroundImg(HomeBackgroundImgMobile);
        }
        break;
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    updateBackgroundImg();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`appContainer `}
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <Header
        step={step}
        setStep={setStep}
        updateBackgroundImg={updateBackgroundImg}
      />
      <main>{renderStep()}</main>
    </div>
  );
};

export default App;
