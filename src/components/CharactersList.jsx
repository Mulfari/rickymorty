import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import './styles/CharactersList.css';

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error(error));
  }, []);

  const handleCharacterClick = (id) => {
    // Aquí puedes manejar eventos de clic en tarjetas de personajes.
    // Por ejemplo, redirigir a la página de detalles del personaje.
    console.log('Personaje seleccionado:', id);
  };

  return (
    <div className="characters-list">
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          character={character}
          onClick={handleCharacterClick}
        />
      ))}
    </div>
  );
};

export default CharactersList;
