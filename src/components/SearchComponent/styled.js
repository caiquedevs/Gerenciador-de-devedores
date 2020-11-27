import styled from 'styled-components';

export const Search = styled.label`
  width: 100%;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-bottom: 1px solid #e1e0e0;
  position: relative;

  img {
    position: absolute;
    left: 30px;
    z-index: 2;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 0 55px;

    font-size: 14px;
    font-family: 'Bai Jamjuree', sans-serif;

    border: none;

    &::-webkit-input-placeholder {
      color: #cccccc;
    }
  }
`;
