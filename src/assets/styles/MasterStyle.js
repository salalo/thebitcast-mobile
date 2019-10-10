import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export default MasterStyle = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <StatusBar hidden={false} translucent={true} />
      <>{children}</>
    </ThemeProvider>
  </>
);
