import React from "react";
import "./Pin.css";

const Pin = ({ urls }) => {
  let sizePin = "medium";
  return (
    <div className="pin">
      <div className="pin__container">
        <div className={`pin__container  ${sizePin}`}>
          <img src={urls?.regular} alt="pin" />
        </div>
      </div>
    </div>
  );
};

export default Pin;
