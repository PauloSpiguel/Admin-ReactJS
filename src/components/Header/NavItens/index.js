import React from 'react';
import { Link } from 'react-router-dom';

import Badge from '@material-ui/core/Badge';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';

import { Container } from './styles';

export default function NavItens() {
  return (
    <Container>
      <Badge badgeContent={1} color="primary">
        <Link to="/forum">
          <ForumIcon />
        </Link>
      </Badge>
      <Badge badgeContent={5} color="primary">
        <Link to="/forum">
          <MailIcon />
        </Link>
      </Badge>
      <Badge badgeContent={3} color="secondary">
        <Link to="/forum">
          <NotificationsIcon />
        </Link>
      </Badge>
    </Container>
  );
}
