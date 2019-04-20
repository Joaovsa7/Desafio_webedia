import React from 'react';
import Container from './componentes/Container/Container';
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
