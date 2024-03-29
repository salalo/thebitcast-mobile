import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export default MasterStyle = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  </>
);
