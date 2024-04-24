import React, { useState, useEffect } from "react";
import VehicleImg from "./assets/technology/image-launch-vehicle-portrait.jpg";
import SpaceportImg from "./assets/technology/image-spaceport-portrait.jpg";
import CapsuleImg from "./assets/technology/image-space-capsule-portrait.jpg";
import VehicleImgLandscape from "./assets/technology/image-launch-vehicle-landscape.jpg";
import SpaceportImgLandscape from "./assets/technology/image-spaceport-landscape.jpg";
import CapsuleImgLandscape from "./assets/technology/image-space-capsule-landscape.jpg";
const Technology = () => {
  const [backgroundImg, setBackgroundImg] = useState(VehicleImg);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [selectedOption, setSelectedOption] = useState(null);
  const handleButtonClick = (option) => {
    setSelectedOption(option);
    updateBackgroundImg(option);
  };
  const navigationList = () => {
    return (
      <>
        <ul>
          <li
            onClick={() => handleButtonClick("Vehicle")}
            className={` ${
              selectedOption === "Vehicle" ? "active" : "notActive"
            }`}
          >
            1
          </li>
          <li
            onClick={() => handleButtonClick("Spaceport")}
            className={` ${
              selectedOption === "Spaceport" ? "active" : "notActive"
            }`}
          >
            2
          </li>
          <li
            onClick={() => handleButtonClick("Capsule")}
            className={` ${
              selectedOption === "Capsule" ? "active" : "notActive"
            }`}
          >
            3
          </li>
        </ul>
      </>
    );
  };
  const updateBackgroundImg = (newStep) => {
    switch (newStep) {
      case `Vehicle`:
        if (screenWidth > 775) {
          setBackgroundImg(VehicleImg);
        } else {
          setBackgroundImg(VehicleImgLandscape);
        }
        break;
      case `Spaceport`:
        if (screenWidth > 775) {
          setBackgroundImg(SpaceportImg);
        } else {
          setBackgroundImg(SpaceportImgLandscape);
        }
        break;
      case `Capsule`:
        if (screenWidth > 775) {
          setBackgroundImg(CapsuleImg);
        } else {
          setBackgroundImg(CapsuleImgLandscape);
        }
        break;
      default:
        if (screenWidth > 775) {
          setBackgroundImg(VehicleImg);
        } else {
          setBackgroundImg(VehicleImgLandscape);
        }
        break;
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      updateBackgroundImg(selectedOption);
    };

    window.addEventListener("resize", handleResize);
    updateBackgroundImg(selectedOption);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth, selectedOption]);
  const listOption = () => {
    switch (selectedOption) {
      case `Vehicle`:
        return (
          <>
            <h3>
              <span>03</span>
              SPACE LAUNCH 101
            </h3>
            <div className="techInfo">
              <div className="techContent">
                <div>
                  <h2>
                    <span>THE TERMINOLOGY…</span>LAUNCH VEHICLE
                  </h2>
                  <p className="techDescription">
                    A launch vehicle or carrier rocket is a rocket-propelled
                    vehicle used to carry a payload from Earth's surface to
                    space, usually to Earth orbit or beyond. Our WEB-X carrier
                    rocket is the most powerful in operation. Standing 150
                    metres tall, it's quite an awe-inspiring sight on the launch
                    pad!
                  </p>
                </div>
                <nav>{navigationList()}</nav>
              </div>{" "}
              <img src={backgroundImg} alt="Vehicle" />
            </div>
          </>
        );
      case `Spaceport`:
        return (
          <>
            <h3>
              <span>03</span>
              SPACE LAUNCH 101
            </h3>
            <div className="techInfo">
              <div className="techContent">
                <div>
                  <h2>
                    <span>THE TERMINOLOGY… </span>SPACEPORT
                  </h2>
                  <p className="techDescription">
                    A spaceport or cosmodrome is a site for launching (or
                    receiving) spacecraft, by analogy to the seaport for ships
                    or airport for aircraft. Based in the famous Cape Canaveral,
                    our spaceport is ideally situated to take advantage of the
                    Earth’s rotation for launch.
                  </p>
                </div>
                <nav>{navigationList()}</nav>
              </div>{" "}
              <img src={backgroundImg} alt="Spaceport" />
            </div>
          </>
        );
      case `Capsule`:
        return (
          <>
            {" "}
            <h3>
              <span>03</span>
              SPACE LAUNCH 101
            </h3>
            <div className="techInfo">
              <div className="techContent">
                <div>
                  <h2>
                    <span>THE TERMINOLOGY…</span>SPACE CAPSULE
                  </h2>
                  <p className="techDescription">
                    A space capsule is an often-crewed spacecraft that uses a
                    blunt-body reentry capsule to reenter the Earth's atmosphere
                    without wings. Our capsule is where you'll spend your time
                    during the flight. It includes a space gym, cinema, and
                    plenty of other activities to keep you entertained.
                  </p>
                </div>
                <nav>{navigationList()}</nav>
              </div>{" "}
              <img src={backgroundImg} alt="Capsule" />
            </div>
          </>
        );
      default:
        return (
          <>
            {" "}
            <h3>
              <span>03</span>
              SPACE LAUNCH 101
            </h3>
            <div className="techInfo">
              {" "}
              <div>
                <div className="techContent">
                  <div>
                    <h2>
                      <span>THE TERMINOLOGY…</span>LAUNCH VEHICLE
                    </h2>
                    <p className="techDescription">
                      A launch vehicle or carrier rocket is a rocket-propelled
                      vehicle used to carry a payload from Earth's surface to
                      space, usually to Earth orbit or beyond. Our WEB-X carrier
                      rocket is the most powerful in operation. Standing 150
                      metres tall, it's quite an awe-inspiring sight on the
                      launch pad!
                    </p>
                  </div>
                  <div>
                    <nav>
                      {" "}
                      <ul>
                        <li
                          onClick={() => handleButtonClick("Vehicle")}
                          className="active"
                        >
                          1
                        </li>
                        <li
                          onClick={() => handleButtonClick("Spaceport")}
                          className="notActive"
                        >
                          2
                        </li>
                        <li
                          onClick={() => handleButtonClick("Capsule")}
                          className="notActive"
                        >
                          3
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>{" "}
              <img src={backgroundImg} alt="Vehicle" />
            </div>
          </>
        );
    }
  };
  return (
    <section className="step-container tech">
      <div>
        <article className="content">{listOption()}</article>
      </div>
    </section>
  );
};

export default Technology;
