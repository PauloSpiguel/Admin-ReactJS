import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import { Settings, Share, LocalPhone, HeadsetMic } from '@material-ui/icons';

import { Container } from './styles';

export default function DeepMenu() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/suport" style={{ color: 'inherit' }}>
            <Tooltip title="Suporte telefônico">
              <HeadsetMic />
            </Tooltip>
          </Link>
        </li>
        <li>
          <Link to="/localphone" style={{ color: 'inherit' }}>
            <Tooltip title="Telefones úteis">
              <LocalPhone />
            </Tooltip>
          </Link>
        </li>
        <li>
          <Link to="/settings" style={{ color: 'inherit' }}>
            <Tooltip title="Configurações">
              <Settings />
            </Tooltip>
          </Link>
        </li>
        <li>
          <Link to="/share" style={{ color: 'inherit' }}>
            <Tooltip title="Compartilhar">
              <Share />
            </Tooltip>
          </Link>
        </li>
      </ul>
    </Container>
  );
}
