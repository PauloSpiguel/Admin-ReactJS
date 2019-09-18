import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.theme.background};
  color: ${props => props.theme.theme.color};
  padding: 0 10px;

  #span {
    color: ${props => props.theme.theme.color};
  }
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
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
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      text-decoration: none;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`;
