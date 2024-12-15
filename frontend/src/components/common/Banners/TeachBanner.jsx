import React, { useState } from "react";
import "./banner.scss";

const TeachBanner = () => {
    const [activeButton , setActiveButton] = useState("FRONT-END")
  const frontEnd = [
    { id: 1, img: "icon" },
    { id: 2, img: "icon" },
    { id: 3, img: "icon" },
    { id: 4, img: "icon" },
    { id: 5, img: "icon" },
    { id: 6, img: "icon" },
    { id: 7, img: "icon" },
    { id: 8, img: "icon" },
  ];
  return (
    <section id="banner" className="me-5">
      <div className="banner-left">
        <h2>Skills</h2>
        <div className="btn-section">
          <button className={activeButton === "FRONT-END" ? 'active' : ''} onClick={() => setActiveButton("FRONT-END")}>Front End</button>
          <button className={activeButton === "BACK-END" ? 'active' : ''} onClick={() => setActiveButton("BACK-END")}>Back End</button>
          <button className={activeButton === "DATABASE" ? 'active' : ''} onClick={() => setActiveButton("DATABASE")}>Database</button>
        </div>
      </div>
      <div className="banner-right">
        {frontEnd.map((item) => (
          <div className="box-icon"></div>
          ))}
      </div>
    </section>
  );
};

export default TeachBanner;
