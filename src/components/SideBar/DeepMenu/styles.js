import styled from 'styled-components';

export const Container = styled.div`
  margin-top: auto;

  min-height: 50px;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  ul {
    background: #434c5b;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 5px;
    color: #848484;

    list-style: none;

    li:hover {
      transition: background 1s;
      transition: padding 0.5s;
      background: #485365;
      padding: 4px;
      border-radius: 4px;
    }
  }
`;
