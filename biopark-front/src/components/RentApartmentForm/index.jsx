import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { apartmentAPI } from '../../services/apartment';

import './style.css';

function RentApartmentForm() {
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ fullname, document, email, phoneNumber }) => {
    const response = await apartmentAPI.rentApartment({
      id: id,
      fullname,
      document,
      email,
      phoneNumber,
    });

    if (response.status === 200) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Alugar Apartamento</h2>
        <div className="form-input">
          <label htmlFor="fullname">Nome completo</label>
          <input
            id="fullname"
            {...register('fullname')}
          />
          {errors.fullname && errors.fullname.type === 'required' && (
            <span>Este campo é obrigatório</span>
          )}
        </div>
        <div className="form-input">
          <label htmlFor="document">Nº de documento</label>
          <input
            id="document"
            {...register('document')}
          />
          {errors.document && errors.document.type === 'required' && (
            <span>Este campo é obrigatório</span>
          )}
        </div>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input id="email" {...register('email')} />
        </div>
        <div className="form-input">
          <label htmlFor="phoneNumber">Telefone</label>
          <input id="phoneNumber" {...register('phoneNumber')} />
        </div>
        <button type="submit">Alugar apartamento</button>
      </form>
      <ToastContainer />
    </>
  );
}

export default RentApartmentForm;
