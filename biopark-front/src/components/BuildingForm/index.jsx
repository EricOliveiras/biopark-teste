import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { buildingAPI } from '../../services/building';

import './style.css';

function BuildingForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ name, address, numberOfApartments }) => {
    const numApt = parseInt(numberOfApartments);
    const response = await buildingAPI.create({
      name: name,
      address: address,
      numberOfApartments: numApt,
    });

    if (response.status === 201) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Adicionar edifício</h2>
        <div className="form-input">
          <label htmlFor="name">Nome do edifício</label>
          <input id="name" placeholder="Ex: Ed. das Luzes" {...register('name', { required: true })} />
          {errors.name && <span>Este campo é obrigatório</span>}
        </div>
        <div className="form-input">
          <label htmlFor="address">Endereço</label>
          <input id="address" placeholder="Ex: Rua das flores, 100" {...register('address', { required: true })} />
          {errors.address && <span>Este campo é obrigatório</span>}
        </div>
        <div className="form-input">
          <label htmlFor="numberOfApartments">Número de apartamentos</label>
          <input
            id="numberOfApartments"
            type="number"
            min="2"
            placeholder="0"
            {...register('numberOfApartments', { required: true, min: 2 })}
          />
          {errors.numberOfApartments &&
            errors.numberOfApartments.type === 'required' && (
            <span>Este campo é obrigatório</span>
          )}
          {errors.numberOfApartments &&
            errors.numberOfApartments.type === 'min' && (
            <span>O número mínimo de apartamentos é 2</span>
          )}
        </div>

        <button type="submit">Registrar edifício</button>
      </form>
      <ToastContainer />
    </>
  );
}

export default BuildingForm;
