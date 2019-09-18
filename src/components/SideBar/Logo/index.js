import React from 'react';

import { Divider } from '@material-ui/core';
import ThemeSwitcher from '../ThemeSwitcher';
import { Container, LogoTipo } from './styles';
import image from '../../../assets/logo.svg';

export default function Logo() {
  return (
    <Container>
      <LogoTipo>
        <img alt="logo" src={image} />
      </LogoTipo>
      {/* <Divider />
       <ThemeSwitcher />
      <Divider /> */}
    </Container>
  );
}
