import React from 'react';

import { Section } from './styled';
import ilustration from '../../assets/ilustration.svg';

export default function FormAreaComponent({
  setActiveRegisterModal,
  setItemMenuActive,
}) {
  return (
    <Section>
      <div className="info-group">
        <figure>
          <img src={ilustration} alt="ilustration" />
        </figure>

        <button
          onClick={() => {
            setActiveRegisterModal(true);
            setItemMenuActive('register');
          }}
          type="button"
        >
          Cadastrar Devedor
        </button>
      </div>
    </Section>
  );
}
