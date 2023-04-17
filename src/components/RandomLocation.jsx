import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomLocation = ({ locationId, onLocationChange }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/location/${locationId}`);
      setLocation(response.data);
      onLocationChange(response.data.residents);
    };

    fetchLocation();
  }, [locationId, onLocationChange]);

  return (
    <div>
      {location ? (
        <div>
          <h2>Ubicación</h2>
          <p>Nombre: {location.name}</p>
          <p>Tipo: {location.type}</p>
          <p>Dimension: {location.dimension}</p>
          <p>Población: {location.residents.length}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default RandomLocation;
