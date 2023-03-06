import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { apartmentAPI } from '../../services/apartment';
import ApartmentCard from '../../components/ApartmentCard';

import './styles.css';

const AvailablesApartments = () => {
  const [apartments, setApartments] = useState([]);

  const navigate = useNavigate();

  const getApartments = async () => {
    const response = await apartmentAPI.readAvailables();
    setApartments(response);
  };

  const showInfo = async (id) => {
    navigate(`/apartment/${id}`);
  };

  useEffect(() => {
    getApartments();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <h1>Apartamentos disponíveis</h1>
        <div className="apartment-list">
          {apartments <= 0 ? (
            <p className="add-apt">Ainda não há apartamentos registrados</p>
          ) : (
            apartments.map((apartment) => {
              return (
                <>
                  <ApartmentCard
                    key={apartment.id}
                    image={'/img/iso_city_tower_02.svg'}
                    name={apartment.Building.name}
                    address={apartment.Building.address}
                    rooms={apartment.rooms}
                    bathrooms={apartment.bathrooms}
                    parkingSpaces={apartment.parkingSpaces}
                    showInfo={async () => {
                      await showInfo(apartment.id);
                    }}
                  />
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
export default AvailablesApartments;
