import styled from 'styled-components';

export const Container = styled.div`
  grid-area: logo;
`;

export const LogoTipo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 63px;
  flex-shrink: 0;
  background: #434c5b;

  img {
    cursor: pointer;
    height: 70px;
    padding: 15px;
  }
`;
