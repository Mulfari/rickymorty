// src/components/CharacterModal.js
import React from 'react';
import './styles/CharacterModal.css';

const CharacterModal = ({ character, onClose }) => {
  const closeModalOnOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModalOnOverlayClick}>
      <div className="modal-content">
      <button className="close-modal" onClick={() => onClose()}>

          &times;
        </button>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Last known location: {character.location.name}</p>
      </div>
    </div>
  );
};

export default CharacterModal;
