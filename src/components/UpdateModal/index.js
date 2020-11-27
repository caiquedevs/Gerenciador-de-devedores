import React from 'react';

import { ContainerModal, Modal } from './styled';

export default function RegisterModal({
  activeUpdateModal,
  setActiveUpdateModal,
}) {
  return (
    <>
      <ContainerModal
        active={activeUpdateModal}
        onClick={() => {
          setActiveUpdateModal(false);
        }}
      />
      <Modal active={activeUpdateModal}>
        <h2>Atualize este devedor !</h2>
        <p>
          Preencha o formulário a baixo para atualizar este devedor na sua lista
        </p>

        <input placeholder="Nome" type="text" />
        <input placeholder="Valor" type="text" />
        <textarea placeholder="Motivo" name="valor" id="valor" />
        <button type="button">Atualizar</button>
        <button className="btn-delete" type="button">
          Excluir
        </button>
      </Modal>
    </>
  );
}
