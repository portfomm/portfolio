import React, { useState } from "react";
import "./banner.scss";
import AwsIcon from "../../../assets/icons/aws";
import HtmlIcon from "../../../assets/icons/html";
import NodeJS from "../../../assets/icons/nodejs";
import CssIcon from "../../../assets/icons/css";
import NestJsIcon from "../../../assets/icons/nestjs";
import ExpressJsIcon from "../../../assets/icons/express";
import DynamoDb from "../../../assets/icons/dynamodb";
import MySqlIcon from "../../../assets/icons/mysql";
import BootstrapIcon from "../../../assets/icons/bootstrap";

const TeachBanner = () => {
    const [activeButton , setActiveButton] = useState("FRONT-END")
  const frontEnd = [
    { id: 1, img: <AwsIcon size={120}  color={"#000000"} />, name: '' ,type: 'BACK-END' },
    { id: 2, img: <HtmlIcon size={120}  color={"#000000"} />, name: '' ,type: 'FRONT-END' },
    { id: 3, img: <NodeJS size={120}  color={"#000000"} />, name: '' ,type: 'BACK-END' },
    { id: 4, img: <CssIcon size={120}  color={"#000000"} />, name: '' ,type: 'FRONT-END' },
    { id: 5, img: <NestJsIcon size={120}  color={"#000000"} />, name: '' ,type: 'BACK-END' },
    { id: 6, img: <ExpressJsIcon size={120}  color={"#000000"} />, name: '' ,type: 'BACK-END' },
    { id: 7, img: <DynamoDb size={120}  color={"#000000"} />, name: '' ,type: 'DATABASE' },
    { id: 8, img: <MySqlIcon size={120}  color={"#000000"} />, name: '' ,type: 'DATABASE' },
    { id: 9, img: <BootstrapIcon size={120}  color={"#000000"} />, name: '' ,type: 'FRONT-END' }
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
        {frontEnd.filter((item) => item.type === activeButton).map((item) => (
          <div key={item.id} className="box-icon">{item.img}</div>
          ))}
      </div>
    </section>
  );
};

export default TeachBanner;
