import React from 'react';
import styled from 'styled-components';

export default WideButton = ({ outline, text }) => {
  if (outline) {
    return (
      //set up navigation and link from props
      // check
      <ContainerOutline>
        <TextOutline>{text}</TextOutline>
      </ContainerOutline>
    );
  }

  if (!outline) {
    return (
      <ContainerFilled>
        <TextFilled>{text}</TextFilled>
      </ContainerFilled>
    );
  }
};

const ContainerOutline = styled.TouchableOpacity`
  width: 90%;
  height: 36px;
  border: 2px solid ${({ theme }) => theme.color.main};
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  elevation: 2;
  border-radius: 2px;
`;

const ContainersFilled = styled.TouchableOpacity`
  width: 90%;
  height: 36px;
  background-color: ${({ theme }) => theme.color.main};
  display: flex;
  justify-content: center;
  align-items: center;
  elevation: 2;
  border-radius: 2px;
`;

const TextFilled = styled.Text`
  font-family: 'Roboto-medium';
  font-size: 16px;
  color: ${({ theme }) => theme.color.white};
`;

const TextOutline = styled.Text`
  font-family: 'Roboto-medium';
  font-size: 16px;
  color: ${({ theme }) => theme.color.main};
`;
