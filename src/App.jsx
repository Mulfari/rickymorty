import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import CharacterCard from './components/CharacterCard';
import RandomLocation from './components/RandomLocation';
import LocationSearch from './components/LocationSearch';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [locationId, setLocationId] = useState(Math.floor(Math.random() * 126) + 1);
  const [currentPage, setCurrentPage] = useState(1);

  const handleLocationUpdate = (newLocationId) => {
    if (newLocationId !== locationId) {
      setLocationId(newLocationId);
      setCurrentPage(1);
    }
  };

  const onLocationChange = async (residents) => {
    const characterPromises = residents.map((url) => axios.get(url));
    const characterResponses = await Promise.all(characterPromises);
    setCharacters(characterResponses.map((response) => response.data));
  };

  const getPaginatedData = (data, itemsPerPage, currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div className="app">
      <Navbar />
      <h1>Personajes de Rick y Morty</h1>
      <LocationSearch setLocationId={handleLocationUpdate} />
      <RandomLocation locationId={locationId} onLocationChange={onLocationChange} setLocationId={handleLocationUpdate} />
      <div className="character-grid">
        {getPaginatedData(characters, 10, currentPage).map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      {characters.length > 10 && (
        <Pagination
          itemsPerPage={10}
          totalItems={characters.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default App;
