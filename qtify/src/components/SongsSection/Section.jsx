// Section.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const Section = ({ title, children }) => {
  return (
    <Box my={4} px={2}>
      <Typography
        variant='h5'
        style={{ fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}
      >
        {title}
      </Typography>
      <Box>{children}</Box>
    </Box>
  );
};

export default Section;
