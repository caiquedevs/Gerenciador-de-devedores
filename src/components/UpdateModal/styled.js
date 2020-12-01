import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const ContainerModal = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 100px;

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;

  background-color: rgba(63, 66, 75, 0.85);

  @media screen and (min-width: 992px) {
    width: calc(100% - 80px);
    position: absolute;
  }
`;

export const Modal = styled.form`
  width: 100%;
  max-width: 435px;
  height: 493px;
  padding-top: 58px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 90px;
  left: calc(50% - 215px);
  z-index: 4;

  border-radius: 5px;
  background-color: ${colors.ligth};

  animation: topAnimate 0.5s;

  @media screen and (min-width: 992px) {
    position: absolute;
  }

  @media screen and (min-width: 0px) and (max-width: 575px) {
    max-width: 320px;
    left: calc(50% - 160px);
  }

  h2 {
    margin-bottom: 7px;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    color: ${colors.textDark};
  }
  p {
    width: 100%;
    max-width: 286px;
    margin-bottom: 23px;

    font-weight: normal;
    font-size: 13px;
    color: ${colors.textLigth};
    text-align: center;
  }

  span {
    color: #4a4a4a;
    font-size: 15px;
    margin-top: 10px;
  }

  button.btn-update,
  button.btn-delete {
    width: 275px;
    height: 40px;
    margin-top: 22px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    color: ${colors.ligth};

    border-radius: 5px;
    background: ${colors.darkBlue};

    &:active {
      filter: brightness(0.7);
    }
  }

  button.btn-delete {
    margin-top: 10px;
    background-color: ${colors.ligth};
    border: 1px solid ${colors.darkBlue};
    color: ${colors.darkBlue};
  }
`;

export const BtnCloseModal = styled.button`
  color: ${colors.darkBlue};
  font-size: 30px;
  position: absolute;
  top: 25px;
  right: 25px;
`;
