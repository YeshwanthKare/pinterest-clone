import React from "react";
import "./Pin.css";

const Pin = () => {
  let sizePin = "medium";
  return (
    <div className="pin">
      <div className="pin__container">
        <div className={`pin__container  ${sizePin}`}>
          <img
            src="https://images.unsplash.com/photo-1663183538157-3940996607c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="pin"
          />
        </div>
      </div>
    </div>
  );
};

export default Pin;
