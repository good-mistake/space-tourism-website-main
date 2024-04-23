import React from "react";
import { useState } from "react";
import Douglas from "./assets/crew/image-douglas-hurley.png";
import Ansari from "./assets/crew/image-anousheh-ansari.png";
import Mark from "./assets/crew/image-mark-shuttleworth.png";
import Victor from "./assets/crew/image-victor-glover.png";

const Crew = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };
  const navigationList = () => {
    return (
      <>
        {" "}
        <ul>
          <li
            onClick={() => handleButtonClick("Douglas")}
            className={` ${
              selectedOption === "Douglas" ? "active" : "notActive"
            }`}
          >
            {" "}
          </li>
          <li
            onClick={() => handleButtonClick("Mark")}
            className={` ${selectedOption === "Mark" ? "active" : "notActive"}`}
          >
            {" "}
          </li>
          <li
            onClick={() => handleButtonClick("Victor")}
            className={` ${
              selectedOption === "Victor" ? "active" : "notActive"
            }`}
          >
            {" "}
          </li>
          <li
            onClick={() => handleButtonClick("Ansari")}
            className={` ${
              selectedOption === "Ansari" ? "active" : "notActive"
            }`}
          >
            {" "}
          </li>
        </ul>
      </>
    );
  };
  const listOption = () => {
    switch (selectedOption) {
      case `Douglas`:
        return (
          <>
            {" "}
            <h3>
              <span>02</span>
              MEET YOUR CREW
            </h3>{" "}
            <div className="crewInfo">
              {" "}
              <div>
                {" "}
                <h2>
                  <span>Commander</span>Douglas Hurley
                </h2>
                <p className="description">
                  Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot and former NASA astronaut. He launched into space
                  for the third time as commander of Crew Dragon Demo-2.
                </p>
                <ul>
                  <li
                    onClick={() => handleButtonClick("Douglas")}
                    className="active"
                  ></li>
                  <li
                    onClick={() => handleButtonClick("Mark")}
                    className="notActive"
                  ></li>
                  <li
                    onClick={() => handleButtonClick("Victor")}
                    className="notActive"
                  ></li>
                  <li
                    onClick={() => handleButtonClick("Ansari")}
                    className="notActive"
                  ></li>
                </ul>
              </div>{" "}
              <img src={Douglas} alt="Douglas Hurley" />
            </div>
          </>
        );
      case `Mark`:
        return (
          <>
            {" "}
            <h3>
              <span>02</span>
              MEET YOUR CREW
            </h3>{" "}
            <div className="crewInfo">
              <div>
                {" "}
                <h2>
                  <span>Mission Specialist </span>MARK SHUTTLEWORTH
                </h2>
                <p className="description">
                  Mark Richard Shuttleworth is the founder and CEO of Canonical,
                  the company behind the Linux-based Ubuntu operating system.
                  Shuttleworth became the first South African to travel to space
                  as a space tourist.
                </p>
                {navigationList()}
              </div>{" "}
              <img src={Mark} alt="Mark Shutlleworth" />
            </div>
          </>
        );
      case `Victor`:
        return (
          <>
            {" "}
            <h3>
              <span>02</span>
              MEET YOUR CREW
            </h3>{" "}
            <div className="crewInfo">
              <div>
                {" "}
                <h2>
                  <span>PILOT</span>Victor Glover
                </h2>
                <p className="description">
                  Pilot on the first operational flight of the SpaceX Crew
                  Dragon to the International Space Station. Glover is a
                  commander in the U.S. Navy where he pilots an F/A-18.He was a
                  crew member of Expedition 64, and served as a station systems
                  flight engineer.
                </p>
                {navigationList()}
              </div>{" "}
              <img src={Victor} alt="Victor Glover" />
            </div>
          </>
        );
      case `Ansari`:
        return (
          <>
            {" "}
            <h3>
              <span>02</span>
              MEET YOUR CREW
            </h3>{" "}
            <div className="crewInfo">
              <div>
                {" "}
                <h2>
                  <span>Flight Engineer</span>Anousheh Ansari
                </h2>
                <p className="description">
                  Anousheh Ansari is an Iranian American engineer and co-founder
                  of Prodea Systems. Ansari was the fourth self-funded space
                  tourist, the first self-funded woman to fly to the ISS, and
                  the first Iranian in space.
                </p>
                {navigationList()}
              </div>{" "}
              <img src={Ansari} alt="Anousheh Ansari " />
            </div>
          </>
        );
      default:
        return (
          <>
            {" "}
            <h3>
              <span>02</span>
              MEET YOUR CREW
            </h3>{" "}
            <div className="crewInfo">
              {" "}
              <div>
                {" "}
                <h2>
                  <span>Commander</span>Douglas Hurley
                </h2>
                <p className="description">
                  Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot and former NASA astronaut. He launched into space
                  for the third time as commander of Crew Dragon Demo-2.
                </p>
                <ul>
                  <li
                    onClick={() => handleButtonClick("Douglas")}
                    className="active"
                  ></li>
                  <li
                    onClick={() => handleButtonClick("Mark")}
                    className="notActive"
                  ></li>
                  <li
                    onClick={() => handleButtonClick("Victor")}
                    className="notActive"
                  ></li>
                  <li
                    onClick={() => handleButtonClick("Ansari")}
                    className="notActive"
                  ></li>
                </ul>
              </div>{" "}
              <img src={Douglas} alt="Douglas Hurley" />
            </div>
          </>
        );
    }
  };
  return (
    <div className="step-container crew">
      <div>
        <div>
          <div className="content">{listOption()}</div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
