import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: red;
  font-size: 50;
  text-align: center;
  font-family: 'Roboto-medium';
`;

const Navbar = () => {
  return (
    <Container>
      <Text>navbar</Text>
    </Container>
  );
};

export default Navbar;
