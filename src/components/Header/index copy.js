import React, { Component, createContext } from 'react';

import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IconButton } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MailIcon from '@material-ui/icons/Mail';

import { Container, Content, Profile } from './styles';

const ThemeContext = createContext({
  theme: 'rocket',
  drawer: 'drawerOpen',
});

const styles = theme => ({
  root: {
    color: '#fff',
  },
  menu: {
    color: '#fff',
  },
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOn: false,
    };

    // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
    this.handleDrawer = this.handleDrawer.bind(this);
  }

  handleDrawer() {
    this.setState(state => ({
      menuOn: !state.menuOn,
    }));
  }

  render() {
    const { classes } = this.props;
    const { menuOn } = this.state;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <Container>
            <Content>
              <nav>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawer}
                  className={classNames(classes.menuButton)}
                >
                  {menuOn ? <MenuIcon /> : <ChevronLeftIcon />}
                </IconButton>
                <div>
                  <Link to="/dashboard">
                    <span id="span">DASHBOARD</span>
                  </Link>
                </div>
              </nav>
              <aside>
                <div>
                  <IconButton aria-label="show 12 new mails" color="inherit">
                    <Badge badgeContent={12} color="secondary">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  <IconButton aria-label="show 4 new talk" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <ForumIcon className={{}} />
                    </Badge>
                  </IconButton>
                  <IconButton
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={17} color="secondary">
                      <NotificationsIcon className={{}} />
                    </Badge>
                  </IconButton>
                </div>
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
        )}
      </ThemeContext.Consumer>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Header);
