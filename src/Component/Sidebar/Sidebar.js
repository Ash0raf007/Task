import React from "react";
import logo from "../../images/logo.png";
import AlertB from "../../images/1.png";
import Training from "../../images/2.png";
import Automation from "../../images/3.png";
import Portofolio from "../../images/4.png";
import Trading from "../../images/5.png";
import Avatar from "../../images/Avatar.png";
import alarm from "../../images/bell.png";

import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="header">
      <div className="side-nav">
        <div className="logo">
          <img src={logo} className="logo-img" alt="" />
          <div></div>
        </div>

        <ul>
          <li className="on">
            <img src={AlertB} width={60} alt="" />
            <p>Alerts</p>
          </li>
          <li className="on">
            <img src={Training} width={60} alt="" />
            <p>Training</p>
          </li>

          <li style={{ position: "relative" }}>
            <img src={Automation} width={60} alt="" />
            <p>Automation</p>
            <div className="contnt">
              <h1>Coming soon</h1>
            </div>
          </li>

          <li style={{ position: "relative" }}>
            <img src={Portofolio} width={60} alt="" />
            <p>Portofolio</p>
            <div className="contnt">
              <h1>Coming soon</h1>
            </div>
          </li>
          <li style={{ position: "relative" }}>
            <img src={Trading} width={60} alt="" />
            <p>Trading</p>
            <div className="contnt">
              <h1>Coming soon</h1>
            </div>
          </li>
        </ul>

        <ul className="endbar">
          <div className="icon">
            <p className="numb">6</p>
            <img src={alarm} width={35} alt="" />
          </div>
          <div className="avatar">
            <img src={Avatar} width={70} alt="" />
            <div>
              <p className="title">Moni Roy</p>
              <p className="title">Beginner</p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
