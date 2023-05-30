import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import ApartmentCard from '../../components/ApartmentCard';
import { buildingAPI } from '../../services/building';

import './style.css';

const ShowApartments = () => {
  const [apartments, setApartments] = useState([]);
  const [building, setBuilding] = useState();

  const navigate = useNavigate();

  const { id } = useParams();

  const getApartmentsByBuilding = async () => {
    const response = await buildingAPI.read(id);
    setBuilding(response);
    setApartments(response.apartments);
  };

  const saveId = () => {
    localStorage.setItem('buildingId', id);
    navigate('/apartment/store');
  };

  const showInfo = async (id) => {
    navigate(`/apartment/${id}`);
  };

  useEffect(() => {
    getApartmentsByBuilding();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <h1>Apartamentos disponíveis deste Edifício </h1>
        <div className="apartment-list">
          {building && apartments <= 0 ? (
            <p>
              Ainda não há apartamentos registrados, clique aqui para <a className="add-apt-ex" onClick={saveId}>Adicionar apartamento</a>
            </p>
          ) : (
            building &&
            apartments.map((apartment) => {
              if (!apartment.rented) {
                return (
                  <div key={apartment.id}>
                    <ApartmentCard
                      key={apartment.id}
                      image={'/img/iso_city_tower_02.svg'}
                      name={building.name}
                      address={building.address}
                      rooms={apartment.rooms}
                      bathrooms={apartment.bathrooms}
                      parkingSpaces={apartment.parkingSpaces}
                      showInfo={async () => {
                        await showInfo(apartment.id);
                      }}
                    />
                  </div>
                );
              }
            })
          )}
        </div>
      </div>
      {apartments && (
        <p className="add-apt">
          <a onClick={saveId}>Adicionar novo apartamento</a>
        </p>
      )}
      <hr />
      <div className="home">
        <h1>Apartamentos alugados deste Edifício </h1>
        <div className="apartment-list">
          {building && apartments <= 0 ? (
            <p>
              Ainda não há apartamentos registrados, clique aqui para <a className="add-apt-ex" onClick={saveId}>Adicionar apartamento</a>
            </p>
          ) : (
            building &&
            apartments.map((apartment) => {
              if (apartment.rented) {
                return (
                  <div key={apartment.id}>
                    <ApartmentCard
                      key={apartment.id}
                      image={'/img/iso_city_tower_02.svg'}
                      name={building.name}
                      address={building.address}
                      rooms={apartment.rooms}
                      bathrooms={apartment.bathrooms}
                      parkingSpaces={apartment.parkingSpaces}
                      showInfo={async () => {
                        await showInfo(apartment.id);
                      }}
                    />
                  </div>
                );
              }
            })
          )}
        </div>
      </div>
    </>
  );
};
export default ShowApartments;
