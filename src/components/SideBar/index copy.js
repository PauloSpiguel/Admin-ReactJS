import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Divider, Drawer } from '@material-ui/core';
import ThemeSwitcher from '../ThemeSwitcher';
import { Container, Logo } from './styles';

const styles = theme => ({});

/* const styles = theme => ({
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '63px',
    flexShrink: 0,
    background: '#434c5b',
  },
  logoImage: {
    cursor: 'pointer',
    height: '64px',
    padding: 15,
  },
}); */

// eslint-disable-next-line react/prefer-stateless-function
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerWidth: 240,
      drawerWidthDefault: 130,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Container>
          <Divider />
          <Logo>
            <img
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/en/0/02/Meo_logo.svg"
            />
          </Logo>
          <Divider className={{}} />
          <ThemeSwitcher toggleTheme={this.props.toggleTheme} />
          <Divider />
        </Container>
      </>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Sidebar);
