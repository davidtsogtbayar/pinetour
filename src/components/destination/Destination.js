import React from "react";
import "./Destination.css";

const destinations = [
  ["Sukhbaatar square", "Ulaanbator"],
  ["Khuvsgul lake", "Khuvsgul"],
  ["Khorgiin togoo", "Arkhangai"],
  ["Terkhiin tsagaan lake", "Arkhangai"],
  ["Amarbaysgalant monastery", "Bulgan"],
  ["Sukhbaatar square", "Ulaanbator"],
];

export const Destination = () => (
  <div className="destination-container">
    <div className="destination-info">
      <div>TOURS | 6 DAYS</div>
      <div id="Agency">Destination of Our Agency</div>
      {destinations.map((dest, index) => (
        <div key={index} className="destination-item">
          <div className="circle-container">
            <div className="destination-circle">D{index + 1}</div>
            {index < destinations.length - 1 && (
              <div className="dotted-line"></div>
            )}
          </div>
          <div className="destination-details">
            <div>{dest[0]}</div>
            <div>{dest[1]}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="destination-map">
      <img src="Group 26.png" alt="Map" />
    </div>
  </div>
);
