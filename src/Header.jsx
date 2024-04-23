import React from "react";
import { ReactComponent as Logo } from "./assets/shared/logo.svg";
import { useState, useEffect } from "react";
import { ReactComponent as HamburgerIcon } from "./assets/shared/icon-hamburger.svg";
import { ReactComponent as CloseBtn } from "./assets/shared/icon-close.svg";
const Header = ({ step, setStep, updateBackgroundImg }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };
  const handleStepChange = (newStep) => {
    if (newStep >= 1 && newStep <= 4) {
      setStep(newStep);
      updateBackgroundImg(newStep);
      setIsVisible(!isVisible);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="headerContainer">
      <header>
        <div className="logoConatiner">
          {" "}
          <Logo />
        </div>
        {screenWidth > 425 ? (
          <nav className="navBlur">
            <ul>
              <li
                className={`pageNumber ${step === 1 ? "active" : ""}`}
                onClick={() => handleStepChange(1)}
              >
                <span>00</span> Home
              </li>
              <li
                className={`pageNumber ${step === 2 ? "active" : ""}`}
                onClick={() => handleStepChange(2)}
              >
                <span>01</span> Destination
              </li>
              <li
                className={`pageNumber ${step === 3 ? "active" : ""}`}
                onClick={() => handleStepChange(3)}
              >
                <span>02</span>Crew
              </li>
              <li
                className={`pageNumber ${step === 4 ? "active" : ""}`}
                onClick={() => handleStepChange(4)}
              >
                <span>03</span>
                Technology
              </li>
            </ul>{" "}
          </nav>
        ) : (
          <div className="mobileNavBar">
            {!isVisible ? (
              <button onClick={toggle}>
                {" "}
                <HamburgerIcon />
              </button>
            ) : (
              ""
            )}
            {isVisible && (
              <nav className="navBlur">
                <ul>
                  {" "}
                  <button onClick={toggle}>
                    <CloseBtn />
                  </button>
                  <li
                    className={`pageNumber ${step === 1 ? "active" : ""}`}
                    onClick={() => handleStepChange(1)}
                  >
                    <span>00</span> Home
                  </li>
                  <li
                    className={`pageNumber ${step === 2 ? "active" : ""}`}
                    onClick={() => handleStepChange(2)}
                  >
                    <span>01</span> Destination
                  </li>
                  <li
                    className={`pageNumber ${step === 3 ? "active" : ""}`}
                    onClick={() => handleStepChange(3)}
                  >
                    <span>02</span>Crew
                  </li>
                  <li
                    className={`pageNumber ${step === 4 ? "active" : ""}`}
                    onClick={() => handleStepChange(4)}
                  >
                    <span>03</span>
                    Technology
                  </li>
                </ul>{" "}
              </nav>
            )}
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
