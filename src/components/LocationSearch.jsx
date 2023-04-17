import React, { useState } from 'react';
import './styles/LocationSearch.css';

const LocationSearch = ({ setLocationId }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocationId(searchValue);
    setSearchValue('');
  };

  return (
    <div className="location-search">
      <form onSubmit={handleSubmit}>
        <label htmlFor="location-id" className="location-search-label">
          Buscar ubicación por ID:
        </label>
        <input
          id="location-id"
          type="number"
          min="1"
          max="126"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="location-search-input"
        />
        <button type="submit" className="location-search-button">
          Buscar
        </button>
        <p className="location-search-hint">
          Por favor, ingrese un número de ID de localidad entre 1 y 126.
        </p>
      </form>
    </div>
  );
};

export default LocationSearch;
