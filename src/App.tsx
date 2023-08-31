import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Connect';
import { useState } from "react";
import Connect from './Connect';
import Footer from './Footer'
import BeerStore from './BeerStore';
import { Container, Typography, Box } from '@mui/material';

import Stack from '@mui/material/Stack';

function App() {
  const [isConnected, setConnected] = useState(false);
  return (
    <div className="App">

      <Connect
        onConnected={() => setConnected(true)}
        onDisconnected={() => setConnected(false)}
      />

      <Container sx={{ mt: 30 }}>
        <Typography textAlign={"center"} sx={{ color: "black" }} justifyContent={'center'}>
          <div>
            {
              !isConnected ?
                <div>
                  <h1>
                    Connect with your Concordium Wallet to verify your age!
                  </h1>

                </div>
                :
                <Box sx={{ mt: 10 }}>
                  <BeerStore />
                </Box>
            }
          </div>
        </Typography>
        <Footer />
      </Container>
    </div >
  );
}

export default App;
