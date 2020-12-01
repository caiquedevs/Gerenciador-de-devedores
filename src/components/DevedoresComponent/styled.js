import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const TitleList = styled.figure`
  width: 100%;
  max-width: 373px;
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
  height: calc(100vh - 70px);
  overflow: auto;

  list-style: none;
  border-right: 1px solid #e1e0e0;
`;

export const ItemList = styled.li`
  width: 100%;
  height: 70px;
  padding: 0 30px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #f6f6f6;

  animation: bottomAnimate 0.5s;

  button.btn-info {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    div.text-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 15px;
    }

    span {
      margin-bottom: 3px;
      font-weight: 500;
      font-size: 13px;
      color: ${colors.textLigth};
    }
  }
`;

export const EmptyList = styled.div`
  width: 100%;
  max-width: 373px;
  height: 70px;
  padding: 0 23px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-right: 1px solid #e1e0e0;
  border-bottom: 1px solid #f6f6f6;

  span {
    color: ${colors.textLigth};
  }
`;
