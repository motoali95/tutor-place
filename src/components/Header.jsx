import React from "react";
import { useState } from "react";

import "../styles/Home.scss";
import Shadow from "../img/Ellipse 24.svg";
import NFT from "../img/Frame 3296.svg";
import { Link } from "react-router-dom";

const Header = () => {
    const list = ["Главная", "Что даст обучение"];
  const [active, setActive] = useState([]);
  return  ( 
  <div>
    <div className="header">
        <img className="circle" src={Shadow} alt="" />
        <div className="navbar">
          <img className="nft" src={NFT} alt="" />
          <div className="navlist">
            <ul>
              {list.map((item, i) => (
                
                <Link className="link" to={i === 0 ? "/":''}>
                  
                  <li
                  key={i}
                  onClick={() => setActive(i)}
                  className={active === i ? "active" : ""}
                >
                  {item}
                </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="button">
            <p>Личный кабинет</p>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Header;
