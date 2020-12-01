import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { TiArrowSortedDown } from 'react-icons/ti';
import * as actionsApp from '../../store/modules/app/actions';

import { Section, List, ItemList } from './styled';
import ilustration from '../../assets/ilustration.svg';
import optionsIcon from '../../assets/options.svg';

export default function FormAreaComponent({ setItemMenuActive }) {
  const dividasPorDevedor = useSelector((state) => state.app.dividasPorDevedor);
  const dispatch = useDispatch();

  const handleClickExcluirDivida = (divida, index) => {
    dispatch(
      actionsApp.deleteDividaRequest({
        index,
        idDivida: divida._id,
        idUsuario: divida.idUsuario,
      })
    );
  };

  const handleClickShowModalUpdate = (divida, modal) => {
    dispatch(
      actionsApp.modalUpdateStatus({
        data: divida,
        modal,
      })
    );
  };

  return (
    <Section hasDividas={dividasPorDevedor}>
      {/* Mostrar quando não houver devedor selecionado */}
      {!dividasPorDevedor || dividasPorDevedor.length === 0 ? (
        <div className="info-group">
          <figure>
            <img src={ilustration} alt="ilustration" />
          </figure>

          <button
            id="btnCreate"
            onClick={() => {
              dispatch(actionsApp.modalRegisterStatus(true));
              setItemMenuActive('register');
            }}
            type="button"
          >
            Cadastrar Devedor OU Divida
          </button>
        </div>
      ) : (
        <>
          {/* Titulo da lista de dividas por devedor */}
          <div className="title">
            <div className="title-group">
              <h3>{dividasPorDevedor[0].nome}</h3>
              <span> - Dividas</span>
            </div>
            <button
              onClick={() => {
                dispatch(actionsApp.modalRegisterStatus(true));
                setItemMenuActive('register');
              }}
              type="button"
            >
              Cadastrar divida
            </button>
          </div>

          {/* Lista de dividas por devedor */}
          <List>
            {dividasPorDevedor.map((divida, index) => (
              <ItemList key={index}>
                {/* Cabeçalho do item da lista */}
                <div className="headerItemList">
                  <button className="btn-options" type="button">
                    <img src={optionsIcon} alt="options icon" />
                  </button>

                  {/* Corpo do menu de opções */}
                  <div className="options-body">
                    <button
                      type="button"
                      onClick={() =>
                        handleClickShowModalUpdate(divida, true, false)
                      }
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => handleClickExcluirDivida(divida, index)}
                    >
                      Excluir
                    </button>
                  </div>

                  <div className="text-group">
                    <span>Criado em</span>
                    <small>
                      {moment(divida.criado).format('DD/MM/YYYY - h:mm:ss')}
                    </small>
                  </div>

                  <div className="text-group">
                    <span>Motivo</span>
                    <small>{divida.motivo}</small>
                  </div>

                  <div className="text-group">
                    <span>Valor</span>
                    <small>
                      {Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(divida.valor)}
                    </small>
                  </div>

                  <div className="btnShowDivida">
                    <label htmlFor={divida._id} className="iconArrow">
                      <TiArrowSortedDown />
                    </label>
                  </div>
                </div>

                {/* Corpo do item da lista */}
                <input type="checkbox" id={divida._id} />
                <div className="bodyItemList">
                  <hr />
                  <div className="text-group">
                    <span>Criado em</span>
                    <small>
                      {moment(divida.criado).format('DD/MM/YYYY - h:mm:ss')}
                    </small>
                  </div>

                  <div className="text-group">
                    <span>Motivo</span>
                    <small>{divida.motivo}</small>
                  </div>

                  <div className="text-group">
                    <span>Valor</span>
                    <small>
                      {Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(divida.valor)}
                    </small>
                  </div>
                </div>
              </ItemList>
            ))}
          </List>
        </>
      )}
    </Section>
  );
}
