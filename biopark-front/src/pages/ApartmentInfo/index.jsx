import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apartmentAPI } from '../../services/apartment';
import ApartamentView from '../../components/ApartmentView';
import Header from '../../components/Header';

import './style.css';

const ApartmentInfo = () => {
  const [apartment, setApartment] = useState();

  const { id } = useParams();

  async function getApartment() {
    const response = await apartmentAPI.read(id);
    console.log(response);
    setApartment(response);
  }

  useEffect(() => {
    getApartment();
  }, []);

  return (
    <>
      <Header />
      <div className="apartament">
        {apartment && (
          <ApartamentView
            key={apartment.id}
            name={apartment.Building.name}
            address={apartment.Building.address}
            rooms={apartment.rooms}
            bathrooms={apartment.bathrooms}
            parkingSpaces={apartment.parkingSpaces}
            squareMeter={apartment.squareMeter}
            rentAmount={apartment.rentAmount}
            showDetails={apartment.rented}
            fullname={apartment.rented ? apartment.Renter.fullname : ''}
            document={apartment.rented ? apartment.Renter.document : ''}
            email={apartment.rented ? apartment.Renter.email : ''}
            phoneNumber={apartment.rented ? apartment.Renter.phoneNumber : ''}
            link={`/apartment/rentapartment/${id}`}
          />
        )}
      </div>
    </>
  );
};

export default ApartmentInfo;
