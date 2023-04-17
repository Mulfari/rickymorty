import React, { useState } from 'react';
import CharacterModal from './CharacterModal';
import './styles/CharacterCard.css';

const CharacterCard = ({ character }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="character-card" onClick={handleCardClick}>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      {showModal && <CharacterModal character={character} onClose={closeModal} />}
    </div>
  );
};

export default CharacterCard;
