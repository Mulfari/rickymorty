import React, { useState } from 'react';

const LocationSearch = ({ setLocationId }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocationId(searchValue);
    setSearchValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location-id">Buscar ubicación por ID:</label>
        <input
          id="location-id"
          type="number"
          min="1"
          max="126"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Buscar</button>
        <p>Por favor, ingrese un número de ID de localidad entre 1 y 126.</p>

      </form>
    </div>
  );
};

export default LocationSearch;
