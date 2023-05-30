import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { apartmentAPI } from '../../services/apartment';

import './style.css';

function RentApartmentForm() {
  const navigate = useNavigate();

  const { id } = useParams();

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

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
            placeholder="Ex: João da Silva"
            {...register('fullname', { required: true })}
          />
          {errors.fullname && errors.fullname.type === 'required' && (
            <span>Este campo é obrigatório</span>
          )}
        </div>
        <div className="form-input">
          <label htmlFor="document">Nº de documento RG/CPF</label>
          <input
            id="document"
            placeholder="CPF ou RG"
            {...register('document', { required: true })}
          />
          {errors.document && errors.document.type === 'required' && (
            <span>Este campo é obrigatório</span>
          )}
        </div>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            {...register('email', {
              pattern: emailRegex,
            })}
          />
          {errors.email && <span>Formato de email inválido</span>}
        </div>
        <div className="form-input">
          <label htmlFor="phoneNumber">Telefone</label>
          <input
            id="phoneNumber"
            {...register('phoneNumber', { required: true })}
          />
          {errors.phoneNumber && errors.phoneNumber.type === 'required' && (
            <span>Este campo é obrigatório</span>
          )}
        </div>
        <button type="submit">Alugar apartamento</button>
      </form>
      <ToastContainer />
    </>
  );
}

export default RentApartmentForm;
