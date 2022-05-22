import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Pricing } from './routes/Pricing';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box textAlign="center" fontSize="xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
        </Routes>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
