import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/EpisodesList.css';

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/episode');
        setEpisodes(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="episodes-list">
      {episodes.map(episode => (
        <div key={episode.id} className="episode-card">
          <h3>{episode.name}</h3>
          <p>Episodio: {episode.episode}</p>
          <p>Fecha de emisión: {episode.air_date}</p>
        </div>
      ))}
    </div>
  );
};

export default EpisodesList;
