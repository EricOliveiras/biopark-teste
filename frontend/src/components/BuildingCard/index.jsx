import React from 'react';
import './style.css';

const BuildingCard = ({
  id,
  img,
  name,
  address,
  numberOfApartments,
  showInfo,
}) => {
  return (
    <div className="building-card" key={id}>
      <div className="building-details">
        <img src={img} />
        <h2>{name}</h2>
        <hr />
        <h3>Endereço: {address}</h3>
        <p>Apartamentos: {`${numberOfApartments}`}</p>
        <button onClick={showInfo}>Ver Detalhes</button>
      </div>
    </div>
  );
};

export default BuildingCard;
