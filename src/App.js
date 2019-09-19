import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import Routes from './routes';

import Header from './components/Header';
import Logo from './components/SideBar/Logo';
import SideBar from './components/SideBar';
import Main from './components/Main';
import Footer from './components/Footer';

import GlobalStyle from './styles/global';

const handleScreen = () => {
  const screen = document.body.clientWidth;

  return screen;
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: false,
      widgetWidth: false,
    };
  }

  toggle = () => {
    const screen = document.body.clientWidth;
    this.setState({
      screenWidth: screen > 613,
      profileWidth: screen > 668,
      widgetWidth: screen > 468,
    });
  };

  render() {
    window.onresize = this.toggle;
    return (
      <>
        <Router>
          <div id="wapper">
            <div id="wapper-logo">
              <Logo />
            </div>
            <div id="wapper-aside">
              <SideBar menu={this.state.widgetWidth} />
            </div>
            <div id="wapper-main">
              <Header menu={this.state} />
              <Main />
              <Footer />
            </div>
          </div>
        </Router>
        <GlobalStyle />
      </>
    );
  }
}
