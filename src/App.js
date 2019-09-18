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
  console.log(screen);
  return screen > 468;
};

const App = () => (
  <>
    <Router>
      <div id="wapper">
        <div id="wapper-logo">
          <Logo />
        </div>
        <div id="wapper-aside">
          <SideBar menu={window.addEventListener('resize', handleScreen)} />
        </div>
        <div id="wapper-main">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </Router>
    <GlobalStyle />
  </>
);

export default App;
