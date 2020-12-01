import styled from 'styled-components';

export const Dashboard = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    height: 100vh;
    max-height: 100vh;

    flex-direction: row;
    overflow: hidden;
  }
`;
