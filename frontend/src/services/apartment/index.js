import api from '../api';
import { notify } from '../../notify';

export const apartmentAPI = {
  async create({
    buildingId,
    rooms,
    bathrooms,
    parkingSpaces,
    rentAmount,
    squareMeter
  }) {
    try {
      const response = await api.post('/apartment/store', {
        buildingId,
        rooms,
        bathrooms,
        parkingSpaces,
        rentAmount,
        squareMeter,
      });

      if (response.status === 409) {
        notify(response.status, 'Não é possivel adicionar mais apartmanetos a este edifício!');
      }

      notify(response.status, 'Apartamento cadastrado com sucesso!');

      return response;
    } catch (e) {
      if (e.response.status === 409) {
        notify(e.response.status, 'Não é possivel adicionar mais apartmanetos a este edifício!');
      } else {
        notify(e.response.status, 'Parece que algo deu errado');
      }
    }
  },

  async readAll() {
    try {
      const response = await api.get('/apartment');

      const apartments = response.data.map((apartment) => ({
        id: `${apartment.id}`,
        rooms: `${apartment.rooms}`,
        bathrooms: `${apartment.bathrooms}`,
        parkingSpaces: `${apartment.parkingSpaces}`,
        rented: `${apartment.rented}`,
        locator: `${apartment.locator}`,
        squareMeter: `${apartment.squareMeter}`,
        rentAmount: `${apartment.rentAmount}`,
        renterId: `${apartment.renterId}`,
        Building: {
          id: `${apartment.Building.id}`,
          name: `${apartment.Building.name}`,
          address: `${apartment.Building.address}`,
          bathroomsOfApartments: `${apartment.Building.bathroomsOfApartments}`
        },
      }));

      return apartments;
    } catch (e) {
      notify(e.response.status, 'Parece que algo deu errado');
    }
  },

  async readAvailables() {
    try {
      const response = await api.get('/apartment/availables');

      const apartments = response.data.map((apartment) => ({
        id: `${apartment.id}`,
        rooms: `${apartment.rooms}`,
        bathrooms: `${apartment.bathrooms}`,
        parkingSpaces: `${apartment.parkingSpaces}`,
        rented: `${apartment.rented}`,
        locator: `${apartment.locator}`,
        squareMeter: `${apartment.squareMeter}`,
        rentAmount: `${apartment.rentAmount}`,
        renterId: `${apartment.renterId}`,
        Building: {
          id: `${apartment.Building.id}`,
          name: `${apartment.Building.name}`,
          address: `${apartment.Building.address}`,
          bathroomsOfApartments: `${apartment.Building.bathroomsOfApartments}`
        },
      }));

      return apartments;
    } catch (e) {
      notify(e.response.status, 'Parece que algo deu errado');
    }
  },

  async read(id) {
    try {
      const response = await api.get(`/apartment/${id}`);

      const apartment = response.data;

      return apartment;
    } catch (e) {
      notify(e.response.status, 'Parece que algo deu errado');
    }
  },

  async rentApartment({id, fullname, document, email, phoneNumber}) {
    try {
      const response = await api.post(`/apartment/rentapartment/${id}`, {
        id, fullname, document, email, phoneNumber
      });

      notify(response.status, 'Apartamento alugado com sucesso!');

      return response;
    } catch (e) {
      if (e.response.status === 409) {
        notify(e.response.status, 'Apartamento já alugado!');
      } else {
        notify(e.response.status, 'Parece que algo deu errado');
      }
    }
  }
};
