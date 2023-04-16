import React, { useState, useEffect } from 'react';
import './styles/CharacterDetails.css';
import { useParams } from 'react-router-dom';

const CharacterDetails = ({ characterId }) => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!character) {
    return <div className="character-details">Cargando...</div>;
  }

  return (
    <div className="character-details">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Especie: {character.species}</p>
      <p>Estado: {character.status}</p>
      <p>Origen: {character.origin.name}</p>
      <p>Ubicación: {character.location.name}</p>
      <p>Episodios: {character.episode.length}</p>
    </div>
  );
};

export default CharacterDetails;
