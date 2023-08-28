import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Connect';
import { useState } from "react";
import Connect from './Connect';
import Footer from './Footer'
import BeerStore from './BeerStore';
import { Container, Typography, Box, Link } from '@mui/material';
function App() {
  const [isConnected, setConnected] = useState(false);
  return (
    <div className="App">

      <Connect
        onConnected={() => setConnected(true)}
        onDisconnected={() => setConnected(false)}
      />


      <Container sx={{ mt: 15 }}>
        {isConnected && <BeerStore />}
      </Container>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Footer />
      </Box>
    </div >
  );
}

export default App;
