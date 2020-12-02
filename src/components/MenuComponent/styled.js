import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const BtnMobile = styled.div`
  width: 100%;
  max-width: 180px;
  height: 50px;

  display: ${(props) => (props.modal ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;

  color: ${colors.ligth};
  font-weight: 500;
  border-radius: 30px;
  background-color: ${colors.darkBlue};

  position: fixed;
  bottom: 30px;
  left: calc(50% - 90px);
  z-index: 10;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const Menu = styled.nav`
  width: 100%;
  max-width: 80px;
  height: 100vh;

  display: none;
  background-color: ${colors.darkBlue};

  @media screen and (min-width: 992px) {
    display: initial;
  }
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
