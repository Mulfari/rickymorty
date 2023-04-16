import React from 'react';
const CharacterCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>Gender: {props.gender}</p>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
    </div>
  );
};

export default CharacterCard;