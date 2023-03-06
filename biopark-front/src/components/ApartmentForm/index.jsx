import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { apartmentAPI } from '../../services/apartment';

import './style.css';

function ApartmentForm() {
  const navigate = useNavigate();

  const id = localStorage.getItem('buildingId');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({
    rooms,
    bathrooms,
    parkingSpaces,
    rentAmount,
    squareMeter,
  }) => {
    const response = await apartmentAPI.create({
      buildingId: id,
      rooms: parseInt(rooms),
      bathrooms: parseInt(bathrooms),
      parkingSpaces: parseInt(parkingSpaces),
      rentAmount: parseInt(rentAmount),
      squareMeter: parseInt(squareMeter),
    });

    if (response.status === 201) {
      setTimeout(() => {
        navigate(`/building/${id}`);
      }, 3000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Adicionar apartamento</h2>
        <div className="form-input">
          <label htmlFor="rooms">Nº de quartos</label>
          <input
            id="rooms"
            type="number"
            min="1"
            placeholder="0"
            {...register('rooms', { required: true, min: 1 })}
          />
          {errors.rooms && errors.rooms.type === 'required' && (
            <span>Este campo é obrigatório</span>
          )}
          {errors.rooms && errors.rooms.type === 'min' && (
            <span>O número mínimo de quartos é 1</span>
          )}
        </div>
        <div className="form-input">
          <label htmlFor="bathrooms">Nº de banheiros</label>
          <input
            id="bathrooms"
            type="number"
            min="1"
            placeholder="0"
            {...register('bathrooms', { required: true, min: 1 })}
          />
          {errors.bathrooms && errors.bathrooms.type === 'required' && (
            <span>Este campo é obrigatório</span>
          )}
          {errors.bathrooms && errors.bathrooms.type === 'min' && (
            <span>O número mínimo de banheiros é 1</span>
          )}
        </div>
        <div className="form-input">
          <label htmlFor="parkingSpaces">Número de vagas para veículos</label>
          <input
            id="parkingSpaces"
            type="number"
            min="0"
            placeholder="0"
            {...register('parkingSpaces')}
          />
          {errors.parkingSpaces && errors.parkingSpaces.type === 'required' && (
            <span>Este campo é obrigatório</span>
          )}
          {errors.parkingSpaces && errors.parkingSpaces.type === 'min' && (
            <span>O número mínimo de vagas é 0</span>
          )}
        </div>
        <div className="form-input">
          <label htmlFor="rentAmount">Valor do aluguel</label>
          <input
            id="rentAmount"
            placeholder="Ex: 1500"
            {...register('rentAmount', { required: true })}
          />
          {errors.rentAmount && errors.rentAmount.type === 'required' && (
            <span>Este campo é obrigatório</span>
          )}
        </div>
        <div>
          <label htmlFor="squareMeter">Área m² </label>
          <input
            id="squareMeter"
            type="number"
            {...register('squareMeter', { min: 20 })}
          />
          {errors.squareMeter && errors.squareMeter.type === 'required' && (
            <span>Este campo é obrigatório</span>
          )}
          {errors.squareMeter && errors.squareMeter.type === 'min' && (
            <span>O tamanho mínimo em m² é 20</span>
          )}
        </div>
        <button type="submit">Registrar apartamento</button>
      </form>
      <ToastContainer />
    </>
  );
}

export default ApartmentForm;
