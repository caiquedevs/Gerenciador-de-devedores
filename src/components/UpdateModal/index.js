import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionsApp from '../../store/modules/app/actions';

import { ContainerModal, Modal } from './styled';

export default function UpdateModal() {
  const modalUpdate = useSelector((state) => state.app.modalUpdate);
  const dispatch = useDispatch();

  const [nomeUsuario] = useState(modalUpdate.data.nome);
  const [valorDevedor, setValorDevedor] = useState(modalUpdate.data.valor);
  const [motivoDevedor, setMotivoDevedor] = useState(modalUpdate.data.motivo);

  const handleClickDeleteDivida = (divida) => {
    dispatch(
      actionsApp.deleteDividaRequest({
        idDivida: divida._id,
        idUsuario: divida.idUsuario,
      })
    );
  };

  const handleClickUpdateDivida = () => {
    dispatch(
      actionsApp.updateDividaRequest({
        _id: modalUpdate.data._id,
        idUsuario: modalUpdate.data.idUsuario,
        motivo: motivoDevedor,
        valor: valorDevedor,
      })
    );
  };

  const handleClickShowModalUpdate = (divida, modal, view) => {
    dispatch(
      actionsApp.modalUpdateStatus({
        data: divida,
        modal,
        viewMode: view,
      })
    );
  };

  return (
    <>
      {/* Fechar modal ao clicar no container */}
      <ContainerModal
        onClick={() => handleClickShowModalUpdate(null, false, false)}
      />

      {/* Modal de update */}
      <Modal>
        <h2>Atualize este devedor !</h2>
        <p>
          Preencha o formulário a baixo para atualizar este devedor na sua lista
        </p>

        <input value={nomeUsuario} placeholder="Nome" type="text" disabled />
        <input
          value={valorDevedor}
          onChange={(e) => setValorDevedor(e.target.value)}
          placeholder="Valor"
          type="text"
        />
        <textarea
          value={motivoDevedor}
          onChange={(e) => setMotivoDevedor(e.target.value)}
          placeholder="Motivo"
          name="valor"
          id="valor"
        />

        <button onClick={handleClickUpdateDivida} type="button">
          Atualizar
        </button>
        <button
          onClick={() => handleClickDeleteDivida(modalUpdate.data)}
          className="btn-delete"
          type="button"
        >
          Excluir
        </button>
      </Modal>
    </>
  );
}
