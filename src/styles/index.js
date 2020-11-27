import styled, { createGlobalStyle } from 'styled-components';
import arrowIcon from '../assets/arrow.svg';
import * as colors from './colors';

// import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
   /* largura do scroll vertical e horizonal*/
   ::-webkit-scrollbar { width: 0px; height: 10px; }
   /* Fundo do scroll*/
   ::-webkit-scrollbar-track { background: transparent; }
   /* Cor do scroll*/
   ::-webkit-scrollbar-thumb { background: silver; }
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    position: relative;
    font-family: 'Roboto', sans-serif;;
  }
  .toast-container {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .Toastify__toast{
    width: 100%;
    max-width: 325px;
    margin-top: 7px;
    margin-right: 7px;
  }
  @keyframes fadeInAnimate {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes topAnimate {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes leftAnimate {
    from {
      opacity: 0;
      transform: translate3d(-60px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes rightAnimate {
    from {
      opacity: 0;
      transform: translate3d(60px, 0px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  div.toastify{
    display: flex;
    align-items: center;
    svg{ margin: 0 10px 0 10px;}
  }

  button {
    width: auto;
    height: auto;
    background: none;
    border: none;
    display: flex;

    transition: 0.15s all;
  }
  button:hover{
    cursor: pointer;
    filter: brightness(0.9);
  }
  a:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  input[type="text"] {
    width: 100%;
    max-width: 275px;
    height: 40px;
    padding: 0 12px;
    margin-bottom: 10px;

    color: ${colors.textLigth};
    border: none;
    border-radius: 5px;
    background: #EEEEEE;

    ::-webkit-input-placeholder {
      font-size: 12px;
      text-transform: uppercase;
      color: #BFBFBF;
    }
  }

  textarea {
    width: 100%;
    max-width: 275px;
    height: 90px;
    padding: 13px 12px;

    color: ${colors.textLigth};
    border: none;
    border-radius: 5px;
    background: #EEEEEE;

    resize: none;

    ::-webkit-input-placeholder {
      font-size: 12px;
      text-transform: uppercase;
      color: #BFBFBF;
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  max-width: 275px;
  height: 40px;
  padding: 0 12px;
  margin-bottom: 10px;

  font-family: Roboto;
  font-size: 12px;
  color: ${(props) => (props.changed ? colors.textLigth : '#BFBFBF')};
  text-transform: ${(props) => (props.changed ? 'none' : 'uppercase')};

  border: none;
  border-radius: 5px;
  background: url(${arrowIcon}) #eeeeee no-repeat;
  background-position: 95% 17px;
  appearance: none;

  option {
    color: ${colors.textLigth};
    text-transform: none;
  }
`;

export default GlobalStyle;
