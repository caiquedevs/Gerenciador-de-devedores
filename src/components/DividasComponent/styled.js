import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Section = styled.section`
  width: 100%;
  padding-top: ${(props) =>
    props.hasDividas && props.hasDividas.length > 0 ? '30px' : '90px'};
  padding-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: ${(props) =>
    props.hasDividas && props.hasDividas.length > 0 ? 'center' : 'flex-start'};
  flex-direction: ${(props) =>
    props.hasDividas && props.hasDividas.length > 0 ? 'column' : 'row'};

  div.info-group {
    display: none;

    @media screen and (min-width: 992px) {
      display: initial;
      padding-bottom: 0;
      overflow: auto;
    }
  }

  div.info-group figure {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button#btnCreate {
    width: 299px;
    height: 45px;
    margin-top: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Bai Jamjuree;
    font-weight: bold;
    font-size: 15px;
    color: ${colors.ligth};
    text-transform: uppercase;
    background-color: ${colors.darkBlue};

    &:active {
      filter: brightness(0.7);
    }
  }

  div.title {
    width: 90%;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div.title-group {
      display: flex;
      align-items: center;

      h3 {
        font-size: 25px;
        color: ${colors.darkBlue};
        margin-right: 7px;
      }

      span {
        font-size: 18px;
        display: none;
      }

      @media screen and (min-width: 992px) {
        span {
          display: initial;
        }
      }
    }

    button {
      font-size: 15px;
      padding: 7px 15px;
      background-color: ${colors.darkBlue};
      color: ${colors.ligth};
      display: none;

      @media screen and (min-width: 992px) {
        display: initial;
      }
    }
  }
`;

export const List = styled.ul`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  list-style: none;

  input {
    appearance: none;
    display: none;

    :checked + div.bodyItemList {
      height: auto;
      opacity: 1;
    }
  }

  @media screen and (min-width: 992px) {
    display: initial;
    height: calc(100vh - 135px);
  }
`;

export const ItemList = styled.li`
  width: 90%;
  padding: 0 30px;
  margin-bottom: 15px;

  animation: topAnimate 0.5s;

  button.btn-options {
    padding: 10px;
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
    top: 14px;
    left: 20px;
    z-index: 1;

    button.btn-options {
      margin: 0;
      cursor: pointer;
    }

    &:hover {
      display: flex;
    }
  }

  div.headerItemList {
    height: 65px;
    min-height: 50px;

    display: none;
    align-items: center;
    justify-content: flex-start;

    div.text-group small {
      width: 70%;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    @media screen and (min-width: 992px) {
      display: flex;
    }
  }

  div.bodyItemList {
    width: 100%;
    height: auto;
    opacity: 1;
    overflow: hidden;

    transition: 1s all;

    hr {
      opacity: 0.25;
    }

    div.text-group {
      margin: 20px 0;
    }

    @media screen and (min-width: 992px) {
      height: 0;
      opacity: 0;
      overflow: hidden;
    }
  }

  div.text-group {
    width: 100%;
    display: flex;
    flex-direction: column;

    span {
      margin-bottom: 3px;
      color: ${colors.dark};
      font-weight: 500;
    }

    small {
      color: ${colors.textDark};
    }
  }

  div.btnShowDivida label {
    padding: 10px;
    border: 1px solid #cecece;
    border-radius: 10px;

    display: flex;
    cursor: pointer;
  }

  border: 1px solid #cecece;
  border-radius: 5px;
`;

export const BtnEdit = styled.button`
  width: auto;
  position: absolute;
  right: 45px;
  bottom: 20px;
`;
export const BtnDelete = styled.button`
  width: auto;
  position: absolute;
  right: 0px;
  bottom: 20px;
`;
