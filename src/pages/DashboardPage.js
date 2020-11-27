/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Dashboard } from './styled';

import MenuComponent from '../components/MenuComponent';
import SearchComponent from '../components/SearchComponent';
import DevedoresComponent from '../components/DevedoresComponent';
import FormAreaComponent from '../components/FormAreaComponent';
import RegisterModal from '../components/RegisterModal/index';
import UpdateModal from '../components/UpdateModal/index';

export default function DashboardPage() {
  const [devedores, setDevedores] = useState([]);
  const [devedorSelecionado, setDevedorSelecionado] = useState(null);
  const [itemMenuActive, setItemMenuActive] = useState('home');
  const [activeRegisterModal, setActiveRegisterModal] = useState(false);
  const [activeUpdateModal, setActiveUpdateModal] = useState(false);

  return (
    <Dashboard>
      <MenuComponent
        itemMenuActive={itemMenuActive}
        setItemMenuActive={setItemMenuActive}
        setActiveRegisterModal={setActiveRegisterModal}
      />

      <div className="body-app">
        <SearchComponent devedores={devedores} />

        <div className="dashboard">
          <DevedoresComponent
            setActiveUpdateModal={setActiveUpdateModal}
            devedores={devedores}
          />
          <FormAreaComponent
            setItemMenuActive={setItemMenuActive}
            setActiveRegisterModal={setActiveRegisterModal}
          />
        </div>
      </div>

      <RegisterModal
        setItemMenuActive={setItemMenuActive}
        activeRegisterModal={activeRegisterModal}
        setActiveRegisterModal={setActiveRegisterModal}
      />
      <UpdateModal
        activeUpdateModal={activeUpdateModal}
        setActiveUpdateModal={setActiveUpdateModal}
      />
    </Dashboard>
  );
}
