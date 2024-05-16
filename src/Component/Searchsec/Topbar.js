import React, { useState } from "react";
import data from "./data.json";
import alarm from "../../images/bell.png";
import "./Searchsec.css";
import icon from "../../images/icon.png";
import Main from "./Main";
function Topbar({ togglePopup }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof item.title1 === "string" &&
        item.title1.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof item.title2 === "string" &&
        item.title2.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof item.title3 === "string" &&
        item.title3.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof item.title4 === "string" &&
        item.title4.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof item.title1 !== "string" &&
        item.title1
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="parent">
      <div className="contain">
        <div className="intro">
          <div className="top">
            <div className="line"></div>
            <p className="Alerts">Alerts</p>
            <div className="search">
              <input
                type="text"
                placeholder="Search By..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div>
                <img src={icon} width={25} alt="" />
              </div>
            </div>
            <div className="icons">
              <p className="numb">6</p>
              <img src={alarm} width={35} alt="" />
            </div>
            <a href="#filter">
              <div className="btnparent">
                <button className="minfilter">Filter</button>
              </div>
            </a>
          </div>
        </div>

        <div className="main">
          <Main filteredData={filteredData} />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
