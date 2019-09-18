import styled from 'styled-components';

export const Container = styled.div`
  margin-top: auto;
  background: #434c5b;
  min-height: 50px;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    padding: 5px;
    color: #848484;

    list-style: none;

    &:hover {
      cursor: pointer;
      transition: background 1s;
      transition: padding 0.5s;
      background: #485365;
      padding: 4px;
      border-radius: 4px;
    }
  }
`;
