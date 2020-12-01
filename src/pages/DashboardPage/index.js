import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionsApp from '../../store/modules/app/actions';

import { Dashboard } from './styled';

import MenuComponent from '../../components/MenuComponent';
import DevedoresComponent from '../../components/DevedoresComponent';
import DividasComponent from '../../components/DividasComponent';
import RegisterModal from '../../components/RegisterModal';
import UpdateModal from '../../components/UpdateModal';

export default function DashboardPage() {
  const statusModalRegister = useSelector((state) => state.app.modalRegister);
  const statusModalUpdate = useSelector((state) => state.app.modalUpdate.modal);

  const [itemMenuActive, setItemMenuActive] = useState('home');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsApp.getPessoasRequest());
  }, [dispatch]);

  return (
    <Dashboard>
      <MenuComponent
        itemMenuActive={itemMenuActive}
        setItemMenuActive={setItemMenuActive}
      />

      <DevedoresComponent />
      <DividasComponent setItemMenuActive={setItemMenuActive} />

      {statusModalRegister ? (
        <RegisterModal setItemMenuActive={setItemMenuActive} />
      ) : null}

      {statusModalUpdate ? <UpdateModal /> : null}
    </Dashboard>
  );
}
