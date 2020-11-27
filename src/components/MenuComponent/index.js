import React from 'react';
import * as colors from '../../styles/colors';

import logo from '../../assets/logo.svg';
import HomeIcon from '../../assets/home';
import RegisterIcon from '../../assets/register';
import logout from '../../assets/logout.svg';

import { Menu, List, ItemList } from './styled';

export default function MenuComponent({
  itemMenuActive,
  setItemMenuActive,
  setActiveRegisterModal,
}) {
  return (
    <Menu>
      <List>
        <ItemList>
          <figure>
            <img src={logo} alt="logo" />
          </figure>
        </ItemList>

        <ul className="itemGroup">
          <ItemList
            className={itemMenuActive === 'home' ? 'active' : ''}
            onClick={() => {
              setItemMenuActive('home');
              setActiveRegisterModal(false);
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
              setActiveRegisterModal(true);
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

        <ItemList>
          <img src={logout} alt="logout icon" />
        </ItemList>
      </List>
    </Menu>
  );
}
