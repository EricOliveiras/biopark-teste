import React from 'react';
import Header from '../../components/Header';
import ApartmentForm from '../../components/ApartmentForm';

import './style.css';

function RegisterApartment() {
  return (
    <>
      <Header />
      <div className="container">
        <ApartmentForm />
      </div>
    </>
  );
}

export default RegisterApartment;
