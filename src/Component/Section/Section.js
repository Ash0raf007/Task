import React, { useState } from "react";
import icon from "../../images/icon.png";
import "./section.css";
import data from "./data.json";

function Section() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.name1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.name2 &&
        item.name2.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="filter" id="filter">
      <h1 className="head">Filters</h1>
      <div className="filterapp">
        <div className="applied">
          <p style={{ cursor: "pointer" }}>Filter Applied </p>
          <p style={{ cursor: "pointer" }}>clear All</p>
        </div>
        <div className="field"></div>
        <div className="stock">
          <p className="word">Stock</p>
          <div className="seach">
            <input
              type="text"
              placeholder="$ TICKER"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div>
              <img src={icon} width={25} alt="" />
            </div>
          </div>

          <h3>▼ Industry</h3>
          <div className="sup">
            <div className="line3"></div>
            <div className="line4"></div>

            {filteredData.map((item) => (
              <div className="indust" key={item.id}>
                <div>
                  <div className="space">
                    <img src={item.img1} className="imgspace" alt="" />
                    <span className="space">{item.name1}</span>
                  </div>
                </div>

                <div className="colum">
                  <div className="space">
                    {item.img2 && (
                      <img src={item.img2} className="imgspace" alt="" />
                    )}
                    {item.name2 && <span className="space">{item.name2}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="options">
            <div>
              <h3>▼ Market cap</h3>
              <div className="flex">
                <div className="radios">
                  <input
                    type="radio"
                    className="radio"
                    name="radio1"
                    id="radio01"
                  />
                </div>

                <span>Micro</span>
              </div>
              <div className="flex">
                <div className="radios">
                  <input
                    type="radio"
                    className="radio"
                    name="radio1"
                    id="radio02"
                  />
                </div>

                <span>Small</span>
              </div>
              <div className="flex">
                <div className="radios">
                  <input
                    type="radio"
                    className="radio"
                    name="radio1"
                    id="radio03"
                  />
                </div>

                <span>Large</span>
              </div>
            </div>

            <div>
              <h3>▼ Risk level</h3>

              <div className="flex">
                <div className="radios">
                  <input
                    type="radio"
                    className="radio"
                    name="radio"
                    id="radio1"
                  />
                </div>

                <span>Low Risk</span>
              </div>
              <div className="flex">
                <div className="radios">
                  <input
                    type="radio"
                    className="radio"
                    name="radio"
                    id="radio2"
                  />
                </div>
                <span>Mid Risk</span>
              </div>
              <div className="flex">
                <div className="radios">
                  <input
                    type="radio"
                    className="radio"
                    name="radio"
                    id="radio3"
                  />
                </div>

                <span>High Risk</span>
              </div>
            </div>
          </div>

          <div className="options">
            <div>
              <h3 className="option">Strategy</h3>
              <select name="" id="">
                <option value="">Big option Buys</option>
                <option value="" selected>
                  Merger Arbitrage
                </option>
                <option value="">Short Reports</option>
              </select>
            </div>

            <div>
              <h3 className="option">Asset</h3>
              <select name="" id="">
                <option value="">Stocks</option>
                <option value="" selected>
                  Option
                </option>
                <option value="">Futures</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="button">
        <button>Apply</button>
      </div>
    </div>
  );
}

export default Section;
