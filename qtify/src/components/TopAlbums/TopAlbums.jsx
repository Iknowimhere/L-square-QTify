import {
  Box,
  Button,
  CircularProgress,
  Grid2 as Grid,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardComponent from '../CardComponent/CardComponent';

const TopAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAlbums = async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        'https://qtify-backend-labs.crio.do/albums/top'
      );

      setAlbums(response.data);
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
    <Box sx={{ overflowX: 'hidden', width: '100%', maxWidth: '100%',padding:"2em"}}>
      <Box
        sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
      >
        <Typography sx={{ fontWeight: '400', fontSize: '20px' }}>
          Top albums
        </Typography>
        <Button
          variant='text'
          sx={{
            color: 'var(--color-primary)',
            textTransform: 'capitalize',
            fontWeight: '400px',
            fontSize: '20px',
          }}
        >
          Collapse
        </Button>
      </Box>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid
          container
          spacing={6}
          sx={{ width: '100%', maxWidth: '100%', margin: 0 }}
        >
          {albums.map((album) => {
            return (
              <Grid item xs={12} md={6} key={album.id}>
                <CardComponent album={album} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default TopAlbums;
