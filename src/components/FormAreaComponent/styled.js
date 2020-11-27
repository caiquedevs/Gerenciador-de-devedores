import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Section = styled.section`
  width: 100%;
  max-width: 100%;
  padding-top: 90px;

  display: flex;
  justify-content: center;

  div.info-group figure {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
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
`;
