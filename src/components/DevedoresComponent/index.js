/* eslint-disable no-unused-vars */
import React from 'react';

import { TitleList, List, ItemList } from './styled';

import folder from '../../assets/folder.svg';
import optionsIcon from '../../assets/options.svg';
import documentIcon from '../../assets/document.svg';

const devedoresFakes = [1, 2, 3, 5, 6, 7];

export default function DevedoresComponent({
  devedores,
  setActiveUpdateModal,
}) {
  return (
    <section>
      <TitleList>
        <img src={folder} alt="folder icon" />
        <figcaption>Devedores cadastrados</figcaption>
      </TitleList>

      <List>
        {devedoresFakes.map((devedor) => (
          <ItemList key={devedor}>
            <button className="btn-options" type="button">
              <img src={optionsIcon} alt="options icon" />
            </button>

            <div className="options-body">
              <button type="button" onClick={() => setActiveUpdateModal(true)}>
                Editar
              </button>
              <button type="button">Excluir</button>
            </div>

            <button
              type="button"
              className="btn-info"
              onClick={() => {
                setActiveUpdateModal(true);
              }}
            >
              <img src={documentIcon} alt="document icon" />
              <span>Menote Bugs</span>
            </button>
          </ItemList>
        ))}
      </List>
    </section>
  );
}
