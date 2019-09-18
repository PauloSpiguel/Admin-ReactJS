import React from 'react';
import { Divider } from '@material-ui/core';
import ThemeSwitcher from './ThemeSwitcher';
import { Container, Logo } from './styles';

import ListMenu from './ListMenu';
import DeepMenu from './DeepMenu';
import SmallDeepMenu from './SmallDeepMenu';
import logo from '../../assets/react.png';

const Sidebar = () => (
  <>
    <Container>
      <div id="logo">
        <Divider />
        <Logo>
          <img alt="logo" src={logo} />
        </Logo>
        <Divider />
        <ThemeSwitcher />
        <Divider />
      </div>
      <ListMenu />
      <SmallDeepMenu />
    </Container>
  </>
);

export default Sidebar;
