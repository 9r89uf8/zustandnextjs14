import React from 'react';
import { Typography, Container } from '@mui/material';

export const metadata = {
  title: 'Welcome to My Next.js App',
  description: 'This is the home page of my Next.js app',
};

const HomePage = () => {
  return (
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Next.js App
        </Typography>
        <Typography variant="body1">
          This is the home page. Here you can find all the essential information.
        </Typography>
      </Container>
  );
};

export default HomePage;
