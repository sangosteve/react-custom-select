import React from "react";
import "./Close.css";
const Close = ({ onClick }) => {
  return (
    <div className="close-icon" onClick={onClick}>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default Close;
