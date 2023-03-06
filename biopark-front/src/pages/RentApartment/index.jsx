import React from 'react';
import Header from '../../components/Header';
import RentApartmentForm from '../../components/RentApartmentForm';

import './style.css';

function RentApartment() {
  return (
    <>
      <Header />
      <div className="container">
        <RentApartmentForm />
      </div>
    </>
  );
}

export default RentApartment;
