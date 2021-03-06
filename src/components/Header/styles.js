import styled from 'styled-components';

export const Container = styled.header`
  /*grid-column-start: 1;
  grid-column-end: 3;*/
  grid-area: header;

  background: #7159c1;
  color: #fff;
  padding: 0 10px;

  #span {
    color: #fff;
  }
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    div {
      margin-left: 20px;
      padding: 5px 10px 5px 20px;
      border-left: 1px solid #eee;
    }

    img {
      cursor: pointer;

      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #fff;
      text-decoration: none;
    }
  }
`;
