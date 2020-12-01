import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionsApp from '../../store/modules/app/actions';

import { Section, TitleList, List, ItemList, EmptyList } from './styled';

import folder from '../../assets/folder.svg';
import documentIcon from '../../assets/document.svg';

export default function DevedoresComponent() {
  const devedores = useSelector((state) => state.app.devedores);
  const dividasPorDevedor = useSelector((state) => state.app.dividasPorDevedor);
  const dispatch = useDispatch();

  const handleClickShowDividas = (idUsuario) => {
    dispatch(actionsApp.selectDevedor(idUsuario));
  };

  return (
    <Section>
      {/* Titulo da lista  */}
      <TitleList>
        <img src={folder} alt="folder icon" />
        <figcaption>Devedores cadastrados</figcaption>
      </TitleList>

      {/* Mostrar enquanto nao carrega a lista */}
      {!devedores ? (
        <EmptyList>
          <span>Carregando...</span>
        </EmptyList>
      ) : null}

      {/* Mostrar quando lista esta vazia */}
      {devedores.length === 0 ? (
        <EmptyList>
          <span>Sua lista está vazia</span>
        </EmptyList>
      ) : null}

      {/* Lista de devedores */}
      <List>
        {devedores.length > 0 &&
          devedores.map((devedor, index) => (
            <ItemList key={index}>
              <button
                type="button"
                className="btn-info"
                onClick={() => handleClickShowDividas(devedor.idUsuario)}
              >
                <img src={documentIcon} alt="document icon" />
                <div className="text-group">
                  <span>{devedor.nome}</span>
                  <small>
                    {devedor.qtd} {devedor.qtd > 1 ? 'dividas' : 'divida'}
                  </small>
                </div>
              </button>
            </ItemList>
          ))}
      </List>

      {devedores.length > 1 ? (
        <>
          <div className="info-footer">
            <small>Arraste para o lado</small>
          </div>
        </>
      ) : null}

      {(devedores.length > 0 && !dividasPorDevedor) ||
      (devedores.length > 0 && dividasPorDevedor.length === 0) ? (
        <div className="info-footer">
          <span>Selecione um devedor</span>
        </div>
      ) : null}
    </Section>
  );
}
