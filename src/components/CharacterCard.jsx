import React, { useState } from 'react';
import './styles/CharacterCard.css';

const CharacterCard = ({ character }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className="character-card" onClick={toggleModal}>
        <img src={character.image} alt={character.name} className="character-image" />
        <h3 className="character-name">{character.name}</h3>
        <p className="character-species">{character.species}</p>
      </div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p>Especie: {character.species}</p>
            <p>Estado: {character.status}</p>
            <p>Género: {character.gender}</p>
            <p>Origen: {character.origin.name}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterCard;