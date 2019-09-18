import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  @media only screen and (max-width: 468px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  padding: 7px;
  height: 30;
  z-index: 999;
`;

const Button = styled.button`
  padding: 3px;
  margin: 3px;
  border-radius: 50%;
  width: 24px;
  height: 24px;

  background-color: #fff;
  border: 0;
`;

// import { Container } from './styles';

const ThemeSwitcher = () => (
  <>
    <Container>
      <Button
        style={{ background: '#7159c1' }}
        id="rocket"
        onClick={e => console.log(e.target.id)}
      />
      <Button
        style={{ background: '#333' }}
        id="dark"
        onClick={e => console.log(e.target.id)}
      />
      <Button id="light" onClick={e => console.log(e.target.id)} />
    </Container>
  </>
);

export default ThemeSwitcher;
