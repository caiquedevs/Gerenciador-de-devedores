import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionsApp from '../../store/modules/app/actions';

import { TitleList, List, ItemList, EmptyList } from './styled';

import folder from '../../assets/folder.svg';
import documentIcon from '../../assets/document.svg';

export default function DevedoresComponent() {
  const devedores = useSelector((state) => state.app.devedores);
  const dispatch = useDispatch();

  const handleClickShowDividas = (idUsuario) => {
    dispatch(actionsApp.selectDevedor(idUsuario));
  };

  return (
    <section>
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
    </section>
  );
}
