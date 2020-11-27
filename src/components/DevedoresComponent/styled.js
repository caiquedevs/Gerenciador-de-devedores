import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const TitleList = styled.figure`
  width: 373px;
  height: 70px;
  padding: 0 23px;

  display: flex;
  align-items: center;

  border-right: 1px solid #e1e0e0;
  border-bottom: 1px solid #f6f6f6;

  img {
    margin-right: 13px;
  }

  figcaption {
    font-weight: 500;
    font-size: 18px;
    color: ${colors.textDark};
  }
`;

export const List = styled.ul`
  width: 373px;
  height: calc(100vh - 80px);

  list-style: none;
  border-right: 1px solid #e1e0e0;
`;

export const ItemList = styled.li`
  width: 100%;
  height: 70px;
  padding: 0 25px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #f6f6f6;

  > button.btn-options {
    width: 30px;
    height: 30px;
    margin-right: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: default;

    :hover ~ div.options-body {
      display: flex;
    }
  }

  div.options-body {
    width: 120px;
    height: 35px;
    background-color: #f5f5f5;

    display: none;
    justify-content: space-around;
    align-items: center;

    position: absolute;
    top: 17px;
    left: 47px;
    z-index: 1;

    button.btn-options {
      margin: 0;
      cursor: pointer;
    }

    &:hover {
      display: flex;
    }
  }

  button.btn-info {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    span {
      margin-left: 15px;

      font-weight: 500;
      font-size: 13px;
      color: ${colors.textLigth};
    }
  }
`;
