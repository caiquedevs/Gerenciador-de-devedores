import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Section = styled.section`
  padding: 0 23px;

  div.info-footer {
    width: 100%;
    /* margin-top: 10px; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    small {
      font-size: 18px;
      font-weight: 400;
      text-align: center;
      color: #cecece;
    }

    span {
      font-size: 17px;
      color: ${colors.textDark};
      font-weight: 400;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 0;

    span#info-footer {
      display: none;
    }
  }
`;

export const TitleList = styled.figure`
  width: 100%;
  max-width: 100%;
  height: 70px;
  padding: 0 23px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 13px;
  }

  figcaption {
    font-weight: 500;
    font-size: 18px;
    color: ${colors.textDark};
  }

  @media screen and (min-width: 992px) {
    max-width: 373px;
    border-right: 1px solid #e1e0e0;
    border-bottom: 1px solid #f6f6f6;
    justify-content: flex-start;
  }
`;

export const List = styled.ul`
  width: 100%;
  height: auto;
  padding: 15px 0;

  display: flex;
  overflow: auto;
  list-style: none;

  @media screen and (min-width: 992px) {
    min-width: 373px;
    max-width: 373px;
    height: calc(100vh - 70px);
    padding: 0;

    border-right: 1px solid #e1e0e0;
    flex-direction: column;
  }
`;

export const ItemList = styled.li`
  width: 100%;
  min-width: 250px;
  height: 250px;
  padding: 15px;
  margin-right: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #f6f6f6;
  animation: bottomAnimate 0.5s;

  @media screen and (min-width: 992px) {
    min-width: auto;
    height: 75px;
    min-height: 75px;
    padding: 0 30px;

    justify-content: flex-start;

    border: none;
    border-bottom: 1px solid #f6f6f6;
  }

  button.btn-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: default;

    img {
      width: 80px;
      margin-bottom: 10px;
    }

    @media screen and (min-width: 992px) {
      img {
        margin-bottom: 0;
      }
    }

    div.text-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;

      span {
        margin-bottom: 7px;
        font-weight: 500;
        font-size: 17px;
        color: ${colors.textLigth};
      }

      @media screen and (min-width: 992px) {
        margin-left: 15px;
        margin-top: 0;
        align-items: flex-start;

        span {
          font-size: 13px;
        }
      }
    }

    @media screen and (min-width: 992px) {
      flex-direction: row;
      cursor: pointer;

      img {
        width: auto;
      }
    }
  }
`;

export const EmptyList = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 23px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #f6f6f6;

  span {
    color: ${colors.textLigth};
  }

  @media screen and (min-width: 992px) {
    max-width: 373px;
    border: none;
    border-right: 1px solid #e1e0e0;
    border-bottom: 1px solid #f6f6f6;
  }
`;
