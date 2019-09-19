import React from 'react';
import styled from 'styled-components';

import NavItens from '../NavItens';
import Profile from '../Profile';

const Container = styled.aside`
  display: flex;
  align-items: center;
`;

export default function MenuHeaderProfile(props) {
  return (
    <Container>
      <NavItens />
      <Profile />
    </Container>
  );
}
