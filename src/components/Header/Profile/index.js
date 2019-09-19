import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
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

export default function Profile() {
  return (
    <Container>
      <div>
        <strong id="span">Paulo Spiguel</strong>
        <Link to="/profile">Meu Perfil</Link>
      </div>
      <img
        src="https://api.adorable.io/avatars/50/abott@adorable.pngCopy to Clipboard
"
        alt="Imagem Perfil"
      />
    </Container>
  );
}
