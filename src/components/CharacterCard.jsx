import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles/CharacterCard.css';

const CharacterCard = ({ character }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/personaje/${character.id}`);
  };

  return (
    <div className="character-card" onClick={handleClick}>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Especie: {character.species}</p>
      <p>Estado: {character.status}</p>
    </div>
  );
};

export default CharacterCard;
