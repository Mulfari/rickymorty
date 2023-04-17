import React, { useState } from "react";
import Modal from "./Modal";
import "./styles/CharacterCard.css";

const CharacterCard = ({ character }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="card" onClick={handleOpenModal}>
      <img className="card-img" src={character.image} alt={character.name} />
      <p className="card-name">{character.name}</p>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        {}
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
      </Modal>
    </div>
  );
};

export default CharacterCard;
