import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/RandomLocation.css';

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
    return <div className="random-location"><div className="loading">Error: {error.message}</div></div>;
  }

  return (
    <div className="random-location">
      {location ? (
        <div>
          <h2>Ubicación</h2>
          <div className="info">
            <span className="label">Nombre:</span>
            <span className="value">{location.name}</span>
          </div>
          <div className="info">
            <span className="label">Tipo:</span>
            <span className="value">{location.type}</span>
          </div>
          <div className="info">
            <span className="label">Dimensión:</span>
            <span className="value">{location.dimension}</span>
          </div>
          <div className="info">
            <span className="label">Población:</span>
            <span className="value">{location.residents.length}</span>
          </div>
        </div>
      ) : (
        <div className="loading">Cargando...</div>
      )}
    </div>
  );
};

export default RandomLocation;
