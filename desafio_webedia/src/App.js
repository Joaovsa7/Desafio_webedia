import React, { Component } from 'react';
import Header from './componentes/Header/Header';
import Container from './componentes/Container/Container';


class App extends Component {
  render() {
      return (
              <React.Fragment>
                  <Container>
                    <Header />
                  </Container>
              </React.Fragment>
        );
    }
}

export default App;
