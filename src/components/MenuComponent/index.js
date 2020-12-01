import React from 'react';
import { useDispatch } from 'react-redux';
import * as actionsApp from '../../store/modules/app/actions';
import * as colors from '../../styles/colors';

import logo from '../../assets/logo.svg';
import HomeIcon from '../../assets/home';
import RegisterIcon from '../../assets/register';
import logout from '../../assets/logout.svg';

import { Menu, List, ItemList } from './styled';

export default function MenuComponent({ itemMenuActive, setItemMenuActive }) {
  const dispatch = useDispatch();
  return (
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
  );
}
