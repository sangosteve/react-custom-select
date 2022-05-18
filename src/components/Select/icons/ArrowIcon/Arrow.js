import React from "react";
import "./Arrow.css";
const Arrow = ({ open }) => {
  return <span className={`arrow ${open ? `up` : null}`}></span>;
};

export default Arrow;
