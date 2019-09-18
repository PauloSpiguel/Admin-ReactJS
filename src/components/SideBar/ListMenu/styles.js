import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (max-width: 468px) {
    align-items: center;
  }
  margin-top: 10px;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-family: Arial, sans-serif;
  font-size: 14px;
`;

export const ListItens = styled.ul`
  @media only screen and (max-width: 468px) {
    span {
      display: none;
    }
  }
  li {
    color: #fff;
    list-style: none;

    &:hover {
      background-color: #434c5b;
      border-radius: 4px;
    }

    a {
      padding-left: 10px;
      text-decoration: none;
      color: inherit;
      display: flex;
      align-items: center;
      padding: 5px 10px;

      span {
        padding-left: 10px;
      }
    }
  }
`;
