import React from "react";
import currancy from "../../images/currancy.png";
import paper from "../../images/paper.png";
import icon1 from "../../images/icon1.png";
import currancy1 from "../../images/currancy1.PNG";
import "./Searchsec.css";

function Main({ filteredData }) {
  return (
    <div className="scroll-bg">
      <div className="scroll-div">
        <div className="scroll-object">
          <div className="papers">
            {filteredData.map((item) => (
              <details>
                <summary>
                  <div className="card">
                    <div key={item.id} className="info">
                      <div className="cart">
                        <img src={currancy} alt="" />
                        <p className="name">{item.name}</p>
                      </div>
                      <div className="line2"></div>
                      <div className="cart">
                        <img src={paper} alt="" />
                        <p className="name" style={{ paddingLeft: "5px" }}>
                          {item.title1}
                        </p>
                      </div>
                      <div className="line2"></div>

                      <div className="cart">
                        <img src={icon1} alt="" />
                        {item.title0 && (
                          <p className="name" style={{ color: "green" }}>
                            {item.title0}
                          </p>
                        )}
                        {item.title2 && (
                          <p className="name" style={{ color: "red" }}>
                            {item.title2}
                          </p>
                        )}
                      </div>
                      <div className="line2"></div>

                      <div className="cart">
                        <img src={currancy1} alt="" />
                        <p className="name" style={{ paddingLeft: "5px" }}>
                          {item.title3}
                        </p>
                      </div>
                    </div>
                  </div>
                </summary>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, reiciendis! Porro, aspernatur voluptatem iste tenetur
                  quisquam obcaecati in earum alias sequi maiores labore
                  repellendus voluptas numquam necessitatibus nihil aperiam hic
                  velit? Quae reprehenderit nesciunt voluptates maxime quo
                  impedit earum, suscipit magni expedita modi? Cupiditate est
                  ipsum modi, non dolores veniam.
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
