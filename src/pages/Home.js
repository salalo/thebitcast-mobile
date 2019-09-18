import React from 'react';
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';

const Container = styled.View`
  /* flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center; */
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const Home = () => {
  return (
    <Container>
      <Topbar />
      <Navbar />
    </Container>
  );
};

export default Home;
