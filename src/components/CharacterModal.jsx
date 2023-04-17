import React from 'react';
import './styles/CharacterModal.css';

const CharacterModal = ({ character, onClose }) => {
  const handleClickOutside = (e) => {
    if (e.target.classList.contains('character-modal')) {
      onClose();
    }
  };

  return (
    <div className="character-modal" onClick={handleClickOutside}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{character.name}</h2>
        <img className="modal-image" src={character.image} alt={character.name} />
        <div className="modal-info">
          <p>Especie: {character.species}</p>
          <p>Género: {character.gender}</p>
          <p>Estado: {character.status}</p>
          <p>Origen: {character.origin.name}</p>
          <p>Ubicación actual: {character.location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
