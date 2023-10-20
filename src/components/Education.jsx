import React from "react";
import Ellipse26 from '../img/Ellipse 26.svg'
import Ellipse24 from '../img/Ellipse 24.svg'
import Ellipse27 from '../img/Ellipse 27.svg'
import Ellipse28 from '../img/Ellipse 28.svg'
import img1 from '../img/1.svg'
import img2 from '../img/2.svg'
import img3 from '../img/3.svg'
import img4 from '../img/4.svg'
import "../styles/Education.scss"

const Education = () => {
  return (
  <div className="education">
    <img className="ellipse-27" src={Ellipse27} alt="" />
    <img className="ellipse-26" src={Ellipse26} alt="" />
    <img className="ellipse-24" src={Ellipse24} alt="" />
    <img className="ellipse-25" src={Ellipse24} alt="" />
    <img className="ellipse-28" src={Ellipse28} alt="" />
    <h1>Что даст тебе обучение?</h1>
    <div className="images">
    <img className="cat" src={img1} alt="" />
    <img className="cat" src={img2} alt="" />
    <img className="cat" src={img3} alt="" />
    <img className="cat" src={img4} alt="" />
    </div>
    
  </div>
  );
};

export default Education;
