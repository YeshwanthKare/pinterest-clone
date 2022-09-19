import React from "react";
import Pin from "./Pin";
import "./MainBoard.css";

const MainBoard = (props) => {
  let { pins } = props;

  return (
    <div className="mainboard">
      {pins.map((pin) => {
        let { urls } = pin;
        return <Pin key={pin.id} urls={urls} />;
      })}
    </div>
  );
};

export default MainBoard;
