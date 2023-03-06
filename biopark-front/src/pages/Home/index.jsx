import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import BuildingCard from '../../components/BuildingCard';
import { buildingAPI } from '../../services/building';

import './style.css';

const Home = () => {
  const [buildings, setBuildings] = useState([]);

  const navigate = useNavigate();

  const getBuildings = async () => {
    const response = await buildingAPI.readAll();
    setBuildings(response);
  };

  const showInfo = async (id) => {
    navigate(`/building/${id}`);
  };

  useEffect(() => {
    getBuildings();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <h1>Nossos Edifícios</h1>
        <div className="building-list">
          {buildings <= 0 ? (
            <p>
              Ainda não há edifícios registrados, clique aqui para{' '}
              <a id='add-building' href="/building/store">Adicionar edifício</a>
            </p>
          ) : (
            buildings.map((building) => {
              return (
                <BuildingCard
                  key={building.id}
                  img={'/img/iso_city_tower_02.svg'}
                  name={building.name}
                  address={building.address}
                  numberOfApartments={building.numberOfApartments}
                  showInfo={async () => {
                    await showInfo(building.id);
                  }}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
