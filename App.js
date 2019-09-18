import React from 'react';
import styled from 'styled-components';
import Home from './src/pages/Home';

const Container = styled.View`
  /* flex: 1; */
  background-color: #000;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const App = () => {
  return (
    <Container>
      <Home />
    </Container>
  );
};

export default App;
