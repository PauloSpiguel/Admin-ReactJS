import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import {
  ViewQuilt,
  PeopleAlt,
  Message,
  Send,
  Assessment,
} from '@material-ui/icons';

import { Container, ListItens } from './styles';

const useStyles = makeStyles({
  IconSend: {
    transform: 'rotate(-20deg)',
  },
});

export default function ListMenu() {
  const classes = useStyles();
  return (
    <Container>
      <ListItens>
        <li>
          <Link to="/dashboard">
            <ViewQuilt />
            <span>DASHBOARD</span>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <PeopleAlt />
            <span>USUÁRIOS</span>
          </Link>
        </li>
        <li>
          <Link to="/message">
            <Message />
            <span>MENSAGENS</span>
          </Link>
        </li>
        <li>
          <Link to="/demands">
            <Send className={classes.IconSend} />
            <span>DEMANDAS</span>
          </Link>
        </li>
        <li>
          <Link to="/report">
            <Assessment />
            <span>RELATÓRIOS</span>
          </Link>
        </li>
      </ListItens>
    </Container>
  );
}
