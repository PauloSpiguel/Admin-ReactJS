import React from 'react';

import { Link } from 'react-router-dom';

import { IconButton } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';

import { Container, Content, Profile } from './styles';

const Header = () => (
  <Container>
    <Content>
      <nav>
        <IconButton color="inherit" aria-label="Open drawer" onClick={{}}>
          <MenuIcon />
        </IconButton>
        <div>
          <Link to="/dashboard">
            <span id="span">DASHBOARD</span>
          </Link>
        </div>
      </nav>
      <aside>
        {function teste() {
          const menuActive = false;
          if (!menuActive) {
            return <h1>:</h1>;
          }
        }}
        <Profile>
          <div>
            <strong id="span">Paulo Spiguel</strong>
            <Link to="/profile">Meu Perfil</Link>
          </div>
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.pngCopy to Clipboard
  "
            alt="Imagem Perfil"
          />
        </Profile>
      </aside>
    </Content>
  </Container>
);

export default Header;
