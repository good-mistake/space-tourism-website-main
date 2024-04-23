import React from "react";
import { useState } from "react";
import MoonImage from "./assets/destination/image-moon.png";
import MarsImage from "./assets/destination/image-mars.png";
import EuropaImage from "./assets/destination/image-europa.png";
import TitanImage from "./assets/destination//image-titan.png";
const Destination = () => {
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
            onClick={() => handleButtonClick("MOON")}
            className={` ${selectedOption === "MOON" ? "active" : ""}`}
          >
            {" "}
            MOON
          </li>
          <li
            onClick={() => handleButtonClick("MARS")}
            className={` ${selectedOption === "MARS" ? "active" : ""}`}
          >
            {" "}
            MARS
          </li>
          <li
            onClick={() => handleButtonClick("EUROPA")}
            className={` ${selectedOption === "EUROPA" ? "active" : ""}`}
          >
            {" "}
            EUROPA
          </li>
          <li
            onClick={() => handleButtonClick("TITAN")}
            className={` ${selectedOption === "TITAN" ? "active" : ""}`}
          >
            {" "}
            TITAN
          </li>
        </ul>
      </>
    );
  };
  const listOption = () => {
    switch (selectedOption) {
      case `MOON`:
        return (
          <div className="destinationInfo">
            {" "}
            <img src={MoonImage} alt="Moon" />
            <div>
              {navigationList()}
              <h2>MOON</h2>
              <p className="description">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <div className="distanceAndTime">
                <div>
                  <h5>AVG. DISTANCE</h5>384,400 km
                </div>{" "}
                <div>
                  <h5>Est. travel time</h5>3 days
                </div>
              </div>
            </div>
          </div>
        );
      case `MARS`:
        return (
          <div className="destinationInfo">
            <img src={MarsImage} alt="Mars" />
            <div>
              {navigationList()}
              <h2>MARS</h2>
              <p className="description">
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </p>
              <div className="distanceAndTime">
                <div>
                  <h5>AVG. DISTANCE</h5>225 MIL. km
                </div>{" "}
                <div>
                  <h5>Est. travel time</h5>9 months
                </div>
              </div>
            </div>
          </div>
        );
      case `EUROPA`:
        return (
          <div className="destinationInfo">
            <img src={EuropaImage} alt="Europa" />
            <div>
              {navigationList()}
              <h2>EUROPA</h2>
              <p className="description">
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </p>
              <div className="distanceAndTime">
                <div>
                  <h5>AVG. DISTANCE</h5>628 MIL. km
                </div>{" "}
                <div>
                  <h5>Est. travel time</h5>3 years
                </div>
              </div>
            </div>
          </div>
        );
      case `TITAN`:
        return (
          <div className="destinationInfo">
            <img src={TitanImage} alt="Titan" />
            <div>
              {navigationList()}
              <h2>TITAN</h2>
              <p className="description">
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </p>
              <div className="distanceAndTime">
                <div>
                  <h5>AVG. DISTANCE</h5>1.6 BIL. km
                </div>{" "}
                <div>
                  <h5>Est. travel time</h5>7 years
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="destinationInfo">
            {" "}
            <img src={MoonImage} alt="Moon" />
            <div>
              <ul>
                <li
                  onClick={() => handleButtonClick("MOON")}
                  className="active"
                >
                  {" "}
                  MOON
                </li>
                <li onClick={() => handleButtonClick("MARS")}> MARS</li>
                <li onClick={() => handleButtonClick("EUROPA")}> EUROPA</li>
                <li onClick={() => handleButtonClick("TITAN")}> TITAN</li>
              </ul>
              <h2>MOON</h2>
              <p className="description">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <div className="distanceAndTime">
                <div>
                  <h5>AVG. DISTANCE</h5>384,400 km
                </div>{" "}
                <div>
                  <h5>Est. travel time</h5>3 days
                </div>
              </div>
            </div>
          </div>
        );
    }
  };
  return (
    <div className="step-container destination">
      <div>
        <h3>
          <span>01</span>
          Pick your destination
        </h3>
        <div>
          <div className="content">{listOption()}</div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
