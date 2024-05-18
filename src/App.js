import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Actions from './components/Action';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Actions />
    </ChakraProvider>
  );
}

export default App;
