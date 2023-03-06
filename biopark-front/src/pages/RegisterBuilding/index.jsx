import React from 'react';
import Header from '../../components/Header';
import BuildingForm from '../../components/BuildingForm';

import './style.css';

function RegisterBuilding() {
  return (
    <>
      <Header />
      <div className="container">
        <BuildingForm />
      </div>
    </>
  );
}

export default RegisterBuilding;
