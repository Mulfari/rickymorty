import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/LocationsList.css';

const LocationsList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/location');
        setLocations(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="locations-list">
      {locations.map(location => (
        <div key={location.id} className="location-card">
          <h3>{location.name}</h3>
          <p>Tipo: {location.type}</p>
          <p>Dimensión: {location.dimension}</p>
        </div>
      ))}
    </div>
  );
};

export default LocationsList;
