import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import SideBar from './components/SideBar';
import Header from './components/Header';

import GlobalStyle, { Wrapper, ContentWrapper, Content } from './styles/global';

import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';

class App extends Component {
  state = {
    theme: themes.rocket,
    drawer: themes.drawerOpen,
  };

  toggleTheme = idTheme => {
    switch (idTheme) {
      case 'dark':
        this.setState({
          theme: themes.dark,
        });
        break;
      case 'light':
        this.setState({
          theme: themes.light,
        });
        break;
      default:
        this.setState({
          theme: themes.rocket,
        });
        break;
    }
  };

  toggleDrawer = () => {
    this.setState({
      drawer:
        this.state.drawer === themes.drawerOpen
          ? themes.drawerOpen
          : themes.drawerClose,
    });
  };

  render() {
    return (
      <>
        <Router>
          <Wrapper>
            <ThemeContext.Provider value={this.state}>
              <SideBar toggleTheme={this.toggleTheme} />
              <ContentWrapper id="content-wrapper">
                <ThemeContext.Consumer>
                  {theme => (
                    <ThemeProvider theme={theme}>
                      <Header toggleDrawer={this.toggleDrawer} />
                    </ThemeProvider>
                  )}
                </ThemeContext.Consumer>
                <Content id="content">
                  <Routes />
                </Content>
              </ContentWrapper>
            </ThemeContext.Provider>
          </Wrapper>
        </Router>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
