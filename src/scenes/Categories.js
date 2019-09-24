import React from 'react';
import styled from 'styled-components';
import Topbar from '../components/Topbar';

const StyledCategories = styled.View`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.color.black};
  font-size: 12;
  text-align: center;
  font-family: 'Roboto-regular';
`;

const Categories = () => {
  return (
    <StyledCategories>
      <Topbar heading="Categories" />
      <Text>SHOPEN</Text>
    </StyledCategories>
  );
};

export default Categories;
