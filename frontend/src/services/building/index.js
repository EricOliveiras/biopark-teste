import api from '../api';
import { notify } from '../../notify';

export const buildingAPI = {
  async create({name, address, numberOfApartments}) {
    try {
      const response = await api.post('/building/store', {
        name, address, numberOfApartments
      });

      notify(response.status, 'Edifício cadastrado com sucesso!');

      return response;
    } catch (e) {
      if (e.response.status !== 201) {
        notify(e.response.status, 'Parece que algo deu errado');
      }
    }
  },

  async readAll() {
    try {
      const response = await api.get('/building');

      const buildings = response.data.map((build) => ({
        id: `${build.id}`,
        name: `${build.name}`,
        address: `${build.address}`,
        numberOfApartments: `${build.numberOfApartments}`
      }));

      return buildings;
    } catch (e) {
      notify(e.response.status, 'Parece que algo deu errado');
    }
  },

  async read(id) {
    try {
      const response = await api.get(`/building/${id}`);

      const building = response.data;

      return building;
    } catch (e) {
      notify(e.response.status, 'Parece que algo deu errado');
    }
  }
};
