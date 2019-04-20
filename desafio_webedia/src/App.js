import React from 'react';
import Header from './componentes/Header/Header';
import Container from './componentes/Container/Container';
import NewsContainer from './componentes/RequestData/Card_News/Card_News';
import RequestData from './componentes/RequestData/RequestData';


export default function App() {
      return (
              <React.Fragment>
                  <Container>
                    <RequestData />
                  </Container>
              </React.Fragment>
        );
}
