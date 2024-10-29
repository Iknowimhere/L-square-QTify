import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Carousel from '../Carousel/Carousel';
import Section from './Section';
import CardComponent from './CardComponent'; // Import CardComponent

const SongsSection = () => {
  const [genres, setGenres] = useState([]);
  const [songs, setSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    // Fetch genres
    fetch('https://qtify-backend-labs.crio.do/genres')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setGenres([{ key: 'all', label: 'All' }, ...data.data]);
        } else {
          console.error('Unexpected genres data format:', data);
        }
      })
      .catch((error) => console.error('Error fetching genres:', error));

    // Fetch songs
    fetch('https://qtify-backend-labs.crio.do/songs')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setSongs(data);
        } else {
          console.error(
            'Expected an array for songs data, but received:',
            data
          );
        }
      })
      .catch((error) => console.error('Error fetching songs:', error));
  }, []);

  const handleTabChange = (newValue) => {
    setSelectedGenre(newValue);
  };

  // Filter songs based on selected genre key
  const filteredSongs =
    selectedGenre === 'All'
      ? songs
      : songs.filter((song) => song.genre.label === selectedGenre);

  console.log('Selected genre:', selectedGenre);
  console.log('Filtered songs:', filteredSongs);
  return (
    <Section title='Songs'>
      {/* Tab component for genres */}
      <Tabs
        value={selectedGenre}
        onChange={handleTabChange}
        variant='scrollable'
        scrollButtons='auto'
        sx={{
          '& .MuiTabs-flexContainer': {
            justifyContent: 'left',
            borderRadius: 2,
            padding: '4px',
          },
          '& .MuiTab-root': {
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'none',
            margin: '0 8px',
            borderRadius: '8px',
            minWidth: '80px',
          },
          '& .Mui-selected': {
            color: '#fff',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: 'green',
            height: '3px',
            borderRadius: '5px',
          },
        }}
      >
        {genres.map((genre) => (
          <Tab
            label={genre.label}
            value={genre.label}
            key={genre.key}
            onClick={() =>
              genre.label === 'All'
                ? handleTabChange('All')
                : handleTabChange(genre.label)
            }
          />
        ))}
      </Tabs>

      {/* Carousel component to display songs */}
      <Box mt={2}>
        <Carousel
          items={filteredSongs}
          renderComponent={(item) => (
            <CardComponent item={item} /> // Use CardComponent here
          )}
        />
      </Box>
    </Section>
  );
};

export default SongsSection;
