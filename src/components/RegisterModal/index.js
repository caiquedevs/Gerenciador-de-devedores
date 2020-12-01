import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { FaWindowClose } from 'react-icons/fa';
import * as actionsApp from '../../store/modules/app/actions';

import { ContainerModal, Modal, BtnCloseModal } from './styled';
import { Select } from '../../styles';

export default function RegisterModal({ setItemMenuActive }) {
  const pessoas = useSelector((state) => state.app.pessoas);
  const dispatch = useDispatch();

  const [changeSelect, setChangeSelect] = useState(false);
  const [idUsuario, setIdUsuario] = useState('');
  const [valorDevedor, setValorDevedor] = useState('');
  const [motivoDevedor, setMotivoDevedor] = useState('');

  const handleChangeSelect = (e) => {
    setChangeSelect(true);
    setIdUsuario(e.target.value);
  };

  const handleClickNewDivida = (e) => {
    e.preventDefault();
    if (idUsuario === '') return toast.info(' 👨‍🦰 Escolha um devedor primeiro');
    if (valorDevedor === '') return toast.info(' 💰 Insira um valor primeiro');
    if (motivoDevedor === '')
      return toast.info(' 📄 Insira um motivo primeiro');

    dispatch(
      actionsApp.createDividaRequest({
        data: {
          idUsuario,
          motivo: motivoDevedor,
          valor: Number(valorDevedor),
        },

        menu: setItemMenuActive,
      })
    );
  };

  return (
    <>
      {/* Fechar modal ao clicar no container */}
      <ContainerModal
        onClick={() => {
          dispatch(actionsApp.modalRegisterStatus(false));
          setItemMenuActive('home');
        }}
      />

      {/* Modal de Registro */}
      <Modal onSubmit={(e) => handleClickNewDivida(e)}>
        <BtnCloseModal
          type="button"
          onClick={() => {
            dispatch(actionsApp.modalRegisterStatus(false));
            setItemMenuActive('home');
          }}
        >
          <FaWindowClose />
        </BtnCloseModal>
        <h2>Cadastre um novo Devedor !</h2>
        <p>
          Preencha o formulário a baixo para cadastrar um novo devedor para sua
          lista
        </p>

        <Select
          changed={changeSelect}
          name="pessoas"
          id="pessoas"
          onChange={(e) => handleChangeSelect(e)}
        >
          <option hidden>Nome</option>
          {pessoas.length >= 0 &&
            pessoas.map((pessoa) => (
              <option key={pessoa.id} value={pessoa.id}>
                {pessoa.name}
              </option>
            ))}
        </Select>

        <input
          placeholder="Valor"
          type="number"
          onChange={(e) => setValorDevedor(e.target.value)}
        />
        <textarea
          placeholder="Motivo"
          name="valor"
          id="valor"
          onChange={(e) => setMotivoDevedor(e.target.value)}
        />
        <button
          className="btn-create"
          onClick={(e) => handleClickNewDivida(e)}
          type="submit"
        >
          Criar
        </button>
      </Modal>
    </>
  );
}
