import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { PowerSettingsNew, Mood, Home } from '@material-ui/icons';

import { makeStyles } from '@material-ui/styles';

import Profile from '../Profile';

const useStyles = makeStyles({
  root: {
    marginRight: '5px',
  },
});

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return props.menu2 ? (
    <>
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon style={{ color: '#fff' }} />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Mood className={classes.root} />
            Meu Perfil
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Home className={classes.root} />
            Minha Conta
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <PowerSettingsNew className={classes.root} />
            Sair
          </MenuItem>
        </Menu>
      </div>

      <Profile />
    </>
  ) : (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon style={{ color: '#fff' }} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Mood className={classes.root} />
          Meu Perfil
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Home className={classes.root} />
          Minha Conta
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <PowerSettingsNew className={classes.root} />
          Sair
        </MenuItem>
      </Menu>
    </div>
  );
}
