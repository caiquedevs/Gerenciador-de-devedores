import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Menu = styled.nav`
  width: 100%;
  max-width: 80px;
  height: 100vh;

  background-color: ${colors.darkBlue};
`;

export const List = styled.ul`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  list-style: none;

  ul {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    list-style: none;
  }
`;

export const ItemList = styled.li`
  width: 100%;
  min-height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  user-select: none;

  img {
    pointer-events: none;
  }

  &.active {
    background-color: ${colors.bgIconEnable};
  }
`;
