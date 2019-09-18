import styled from 'styled-components';

export const Container = styled.aside`
  grid-area: aside;
  /** CSS Interno*/
  background: #485365;
  display: flex;
  flex-direction: column;
  height: 100%;
  /*
  */

  #logo {
  }
  #nav {
  }
  #aside {
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: 'center';
  height: 63px;
  flex-shrink: 0;
  background: #434c5b;

  img {
    cursor: pointer;
    height: 70px;
    padding: 15px;
  }
`;
