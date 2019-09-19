import React from 'react';

import { Link } from 'react-router-dom';

import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuHeaderProfile from './MenuHeaderProfile';
import MoreVertIcon from './MoreVertIcon';

import { Container, Content } from './styles';

const Header = props => (
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
      {props.menu.profileWidth ? (
        <MenuHeaderProfile />
      ) : (
        <MoreVertIcon menu2={props.menu.screenWidth} />
      )}
    </Content>
  </Container>
);

export default Header;
