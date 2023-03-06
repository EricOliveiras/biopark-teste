import React from 'react';

import './style.css';

const ApartamentView = ({
  id,
  rooms,
  bathrooms,
  parkingSpaces,
  rentAmount,
  squareMeter,
  name,
  address,
  link,
  showDetails,
  fullname,
  document,
  email,
  phoneNumber,
}) => {
  return (
    <div className="apartamentCardView">
      <div className="apartamentView" key={id}>
        <h2>{name}</h2>
        <hr />
        <p>Endereço: {address}</p>
        <p>Quartos: {`${rooms}`}</p>
        <p>Banheiros: {`${bathrooms}`}</p>
        <p>Vagas de garagem: {`${parkingSpaces}`}</p>
        <p>Área: {`${squareMeter}m²`}</p>
        <p>Valor: {`R$ ${rentAmount}/mês`}</p>
        {showDetails && (
          <>
            <h3>Locatário</h3>
            <p>Nome: {`${fullname}`}</p>
            <p>Documento: {`${document}`}</p>
            <p>email: {`${email}`}</p>
            <p>Telefone: {`${phoneNumber}`}</p>
          </>
        )}
        <button>
          <a href={link}>Alugar</a>
        </button>
      </div>
    </div>
  );
};

export default ApartamentView;
