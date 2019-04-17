import React, { Component } from 'react';
import Header from './componentes/Header/Header';
import Menu from './componentes/Menu/Menu';

class App extends Component {
  render() {
      return (
              <React.Fragment>
                  <Header />
                  <Menu />
              </React.Fragment>
        );
    }
}

export default App;
