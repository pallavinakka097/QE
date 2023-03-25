import React from 'react'
import "./quize.css";
import { lang } from "./coursedata.js";
function Courses() {
  const lis = lang.map((item) => {
    return (
      <div className="box1">
        <img src={item.image} className="img1" />
        <h2>{item.name}</h2>
        <button>{item.desc}</button>
      </div>
    );
  });
  return <div className="flex1">{lis}</div>;
};

export default Courses;