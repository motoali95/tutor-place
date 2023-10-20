import React, { useState } from "react";
import "../styles/Home.scss";
import Man from "../img/MAN.svg";
import Outline from "../img/Outline.svg";
import Round from "../img/Ellipse 25.svg";
import Education from "./Education";
import Modal from "./Modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setInputValue("");
  };
  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <img
          onClick={() => closeModal()}
          className="close-btn"
          src={Outline}
          alt=""
        />

        <h2>Начни прямо сейчас!</h2>

        <p>
          Получи все нужные навыки для заработка <br />
          на NFT всего за 28 дней!
        </p>
        <input
          placeholder="Ваш e-mail"
          type="email"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="close-button"
          onClick={inputValue.includes("@") ? closeModal : openModal}
        >
          Оплатить
        </button>
      </Modal>
      <div className="content">
        <div className="text">
          <div className="op-m">
            <p>Не упусти</p>
            <p>
              Возможность войти <br /> в
            </p>
            <h1>прибыльную нишу</h1>
          </div>
          <div className="op-p">
            <p>
              Получи все нужные навыки для заработка <br /> на NFT всего
              за 28 дней!
            </p>
          </div>
          <div onClick={() => openModal()} className="btn">
            Начать зарабатывать на NFT
          </div>
        </div>
        <img className="human" src={Man} alt="" />
        <img className="round" src={Round} alt="" />
      </div>
      <div className="edu">
        <Education />
      </div>
    </div>
  );
};

export default Home;
