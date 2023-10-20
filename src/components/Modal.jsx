import React from "react";
import Ellipse23 from "../img/Ellipse 23.svg";
import "../styles/Modal.scss";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <img className="ellipse-23" src={Ellipse23} alt="" />
        {children}
      </div>
    </div>
  );
};

export default Modal;
