import React from 'react';
import { Container } from './styles';

import ListMenu from './ListMenu';
import DeepMenu from './DeepMenu';
import SmallDeepMenu from './SmallDeepMenu';
import Logo from './Logo';

const Sidebar = props => (
  <>
    <Container>
      <Logo />
      <ListMenu />
      {props.menu ? <DeepMenu /> : <SmallDeepMenu />}
    </Container>
  </>
);

export default Sidebar;
