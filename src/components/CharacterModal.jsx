// src/components/CharacterModal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CharacterModal = ({ isOpen, onRequestClose, character }) => {
  if (!character) return null;

  const { name, image, species, gender, status, origin, location } = character;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Character Modal"
      className="character-modal"
      overlayClassName="character-modal-overlay"
    >
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      <p>Status: {status}</p>
      <p>Origin: {origin.name}</p>
      <p>Location: {location.name}</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default CharacterModal;
