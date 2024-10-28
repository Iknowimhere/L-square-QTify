import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Grid2 as Grid,
  Typography,
} from '@mui/material';
import axios from 'axios';
import CardComponent from '../CardComponent/CardComponent';
import Carousel from '../Carousel/Carousel';

const NewAlbums = () => {
  const [newAlbums, setNewAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);

  const fetchAlbums = async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        'https://qtify-backend-labs.crio.do/albums/new'
      );
      setNewAlbums(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <Box
      sx={{
        overflowX: 'hidden',
        width: '100%',
        maxWidth: '100%',
        padding: '2em',
      }}
    >
      <Box
        sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
      >
        <Typography sx={{ fontWeight: '400', fontSize: '20px' }}>
          New Albums
        </Typography>
        <Button
          variant='text'
          onClick={() => setShowCarousel(!showCarousel)}
          sx={{
            color: 'var(--color-primary)',
            textTransform: 'capitalize',
            fontWeight: '400px',
            fontSize: '20px',
          }}
        >
          {showCarousel ? 'Show All' : 'Collapse'}
        </Button>
      </Box>
      {loading ? (
        <CircularProgress />
      ) : showCarousel ? (
        <Carousel
          items={newAlbums}
          renderComponent={(album) => <CardComponent album={album} />}
        />
      ) : (
        <Grid
          container
          spacing={6}
          sx={{ width: '100%', maxWidth: '100%', margin: 0 }}
        >
          {newAlbums.map((album) => (
            <Grid item xs={12} md={6} key={album.id}>
              <CardComponent album={album} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default NewAlbums;
