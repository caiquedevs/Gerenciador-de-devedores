import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionsApp from '../../store/modules/app/actions';
import * as colors from '../../styles/colors';

import logo from '../../assets/logo.svg';
import HomeIcon from '../../assets/home';
import RegisterIcon from '../../assets/register';
import logout from '../../assets/logout.svg';

import { Menu, List, ItemList, BtnMobile } from './styled';

export default function MenuComponent({ itemMenuActive, setItemMenuActive }) {
  const statusModalRegister = useSelector((state) => state.app.modalRegister);
  const statusModalUpdate = useSelector((state) => state.app.modalUpdate.modal);

  const dispatch = useDispatch();
  return (
    <>
      <BtnMobile
        modal={statusModalRegister || statusModalUpdate}
        onClick={() => {
          setItemMenuActive('register');
          dispatch(actionsApp.modalRegisterStatus(true));
        }}
        type="button"
      >
        Cadastrar divida
      </BtnMobile>
      <Menu>
        <List>
          {/* Logo do menu */}
          <ItemList>
            <figure>
              <img src={logo} alt="logo" />
            </figure>
          </ItemList>

          {/* Icones do menu */}
          <ul className="itemGroup">
            <ItemList
              className={itemMenuActive === 'home' ? 'active' : ''}
              onClick={() => {
                setItemMenuActive('home');
                dispatch(actionsApp.modalRegisterStatus(false));
              }}
            >
              <HomeIcon
                color={
                  itemMenuActive === 'home'
                    ? colors.iconEnable
                    : colors.iconDisabled
                }
              />
            </ItemList>
            <ItemList
              className={itemMenuActive === 'register' ? 'active' : ''}
              onClick={() => {
                setItemMenuActive('register');
                dispatch(actionsApp.modalRegisterStatus(true));
              }}
            >
              <RegisterIcon
                color={
                  itemMenuActive === 'register'
                    ? colors.iconEnable
                    : colors.iconDisabled
                }
              />
            </ItemList>
          </ul>

          {/* Icone de saida do menu */}
          <ItemList>
            <img src={logout} alt="logout icon" />
          </ItemList>
        </List>
      </Menu>
    </>
  );
}
