import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

// Material ui components
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';

// Material ui icons
import {
  Home,
  AccessTime,
  PersonOutline,
  NotificationsNone,
  Settings,
} from '@material-ui/icons';

// Custom icons
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher';
// import DashboardIcon from "../../icons/Dashboard";
// import UsersIcon from "../../icons/Users";
// import ChartIcon from "../../icons/Chart";
// import InventoryIcon from "../../icons/Inventory";

// React router

// Custom styles
// const drawerWidth = 240;
const drawerWidthDefault = 240;
const styles = theme => ({
  marginAuto: {
    marginLeft: 5,
  },
  navIcon: { color: '#8c939d' },
  hide: {
    display: 'none',
  },
  defaultDrawer: {
    background: '#485365',
  },
  drawer: {
    // width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    // width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: drawerWidthDefault,
    marginX: 'auto',
  },
  activeItem: {
    color: '#69b4c9 !important',
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
});

// eslint-disable-next-line react/prefer-stateless-function
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerWidth: 240,
      drawerWidthDefault: 140,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Drawer
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: this.props.open,
          [classes.drawerClose]: !this.props.open,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: this.props.open,
            [classes.drawerClose]: !this.props.open,
            [classes.defaultDrawer]: true,
          }),
        }}
        open={this.props.open}
      >
        <Divider />
        <div className={classes.logoWrapper}>
          {/* <Link className={classes.logoLink} to="/"> */}
          <img
            alt="Brainalytica logo"
            className={classes.logoImage}
            src="https://upload.wikimedia.org/wikipedia/en/0/02/Meo_logo.svg"
          />
          {/* </Link> */}
        </div>
        <Divider className={classes.logoDivider} />
        <ThemeSwitcher toggleTheme={this.props.toggleTheme} />
        <Divider />
        <List>
          {['Dashboard', 'Employees', 'Sales', 'Inventory', 'Settings'].map(
            (text, index) => (
              <ListItem
                button
                key={text}
                component={NavLink}
                selected={`/${text.toLowerCase()}` === this.props.params}
                to={`/${text.toLowerCase()}`}
              >
                <ListItemIcon
                  className={classNames({
                    [classes.navIcon]: true,
                    [classes.marginAuto]: !this.props.open,
                    [classes.activeItem]:
                      `/${text.toLowerCase()}` === this.props.params,
                  })}
                >
                  {/* {text === 'Dashboard' ? (
                    <DashboardIcon />
                  ) : text === 'Sales' ? (
                    <ChartIcon />
                  ) : text === 'Employees' ? (
                    <UsersIcon />
                  ) : text === 'Inventory' ? (
                    <InventoryIcon />
                  ) : text === 'Settings' ? (
                    <Settings />
                  ) : (
                    console.log('Missing Icon')
                  )} */}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      type="body2"
                      style={{ color: '#8c939d' }}
                      className={classNames({
                        [classes.activeItem]:
                          `/${text.toLowerCase()}` === this.props.params,
                      })}
                    >
                      {text}
                    </Typography>
                  }
                  className={classNames({
                    [classes.hide]: !this.props.open,
                  })}
                />
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Sidebar);
