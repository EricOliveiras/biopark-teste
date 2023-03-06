import React from 'react';
import './style.css';

const ApartmentCard = ({
  id,
  image,
  rooms,
  bathrooms,
  parkingSpaces,
  name,
  address,
  showInfo,
}) => {
  return (
    <div className="apartment-card" key={id}>
      <div className="apartment-details">
        <img src={image}/>
        <h2>{name}</h2>
        <hr />
        <h3>Endereço: {address}</h3>
        <p>Quartos: {`${rooms}`}</p>
        <p>Banheiros: {`${bathrooms}`}</p>
        <p>Vagas de garagem: {`${parkingSpaces}`}</p>
        <button onClick={showInfo}>Ver Detalhes</button>
      </div>
    </div>
  );
};

export default ApartmentCard;
