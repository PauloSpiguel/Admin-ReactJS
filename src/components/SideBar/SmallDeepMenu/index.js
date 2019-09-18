import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import {
  Apps,
  Settings,
  Share,
  LocalPhone,
  HeadsetMic,
} from '@material-ui/icons';

import { Container } from './styles';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function SmallDeepMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Container>
      <Tooltip title="Menu Ferramentas">
        <Apps onClick={handleClick} />
      </Tooltip>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <HeadsetMic />
          </ListItemIcon>
          <ListItemText primary="Suporte" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <LocalPhone />
          </ListItemIcon>
          <ListItemText primary="Telefones úteis" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <Share />
          </ListItemIcon>
          <ListItemText primary="Compartilhar" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Configurações" />
        </StyledMenuItem>
      </StyledMenu>
    </Container>
  );
}
