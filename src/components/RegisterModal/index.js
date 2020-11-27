import React, { useState } from 'react';

import { ContainerModal, Modal } from './styled';
import { Select } from '../../styles';

export default function RegisterModal({
  activeRegisterModal,
  setActiveRegisterModal,
  setItemMenuActive,
}) {
  const [changeSelect, setChangeSelect] = useState(false);

  return (
    <>
      <ContainerModal
        active={activeRegisterModal}
        onClick={() => {
          setActiveRegisterModal(false);
          setItemMenuActive('home');
        }}
      />
      <Modal active={activeRegisterModal}>
        <h2>Cadastre um novo Devedor !</h2>
        <p>
          Preencha o formulário a baixo para cadastrar um novo devedor para sua
          lista
        </p>

        <Select
          changed={changeSelect}
          name="cars"
          id="cars"
          onChange={() => setChangeSelect(true)}
        >
          <option hidden>Nome</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </Select>

        <input placeholder="Valor" type="text" />
        <textarea placeholder="Motivo" name="valor" id="valor" />
        <button type="button">Criar</button>
      </Modal>
    </>
  );
}
