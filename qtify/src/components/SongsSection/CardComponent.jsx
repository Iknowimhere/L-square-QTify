import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Box, Chip } from '@mui/material';

export default function CardComponent({ item }) {
  return (
    <Box sx={{ height: '232px', width: '159px' }}>
      <Card sx={{ width: 159, height: 205 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='170'
            image={item.image}
            alt='green iguana'
          />
          <CardContent sx={{ padding: 0 }}>
            <Chip
              label={`${item.likes} Likes`}
              sx={{
                backgroundColor: '#121212',
                color: '#fff',
                borderRadius: '10px',
                gap: '1px',
                height: '23px',
                width: '80px',
                fontSize: '10px',
                position: 'relative',
                top: 6,
                left: 6,
                bottom: 6,
              }}
            />
          </CardContent>
        </CardActionArea>
      </Card>
      <Typography
        sx={{ color: '#fff', width: '200px', size: '14px', fontWeight: 400 }}
      >
        {item.title}
      </Typography>
    </Box>
  );
}
