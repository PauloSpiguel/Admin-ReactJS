import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import Routes from './routes';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';
import Footer from './components/Footer';

import GlobalStyle from './styles/global';

const App = () => (
  <>
    <Router>
      <div id="wapper">
        <div id="wapper-aside">
          <SideBar />
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
