import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomLocation = ({ locationId, onLocationChange }) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
  
    const fetchLocation = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/location/${locationId}`, {
          cancelToken: source.token,
        });
        setLocation(response.data);
        onLocationChange(response.data.residents);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          setError(error);
        }
      }
    };
  
    fetchLocation();
  
    return () => {
      source.cancel('Component unmounted');
    };
  }, [locationId, onLocationChange]);
  

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {location ? (
        <div>
          <h2>Ubicación</h2>
          <p>Nombre: {location.name}</p>
          <p>Tipo: {location.type}</p>
          <p>Dimensión: {location.dimension}</p>
          <p>Población: {location.residents.length}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default RandomLocation;
