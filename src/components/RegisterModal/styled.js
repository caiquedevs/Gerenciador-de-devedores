import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const ContainerModal = styled.div`
  width: calc(100% - 80px);
  height: 100vh;
  padding-top: 100px;

  display: ${(props) => (props.active ? 'flex' : 'none')};
  justify-content: center;

  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;

  background-color: rgba(63, 66, 75, 0.85);
`;

export const Modal = styled.form`
  width: 100%;
  max-width: 435px;
  height: 475px;
  padding-top: 58px;

  display: ${(props) => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 100px;
  left: calc(50% - 180px);
  z-index: 4;

  border-radius: 5px;
  background-color: ${colors.ligth};

  animation: topAnimate 0.5s;

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

  button {
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
`;
