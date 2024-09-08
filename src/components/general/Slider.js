import React from 'react';
import Slider from 'react-slick';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const StyledSlider = styled(Slider)(({ theme }) => ({
  '& .slick-slide': {
    margin: '0 10px',
  },
  '& .slick-prev': {
    left: 0,
    zIndex: 1,
  },
  '& .slick-next': {
    right: 0,
    zIndex: 1,
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}));

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <StyledSlider {...settings}>
      <StyledCard>
        <CardMedia
          component="img"
          height="140"
          image="https://via.placeholder.com/800x400" // Replace with actual image
          alt="Slide 1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Slide 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description for slide 1.
          </Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardMedia
          component="img"
          height="140"
          image="https://via.placeholder.com/800x400" // Replace with actual image
          alt="Slide 2"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Slide 2
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description for slide 2.
          </Typography>
        </CardContent>
      </StyledCard>
      {/* Add more slides as needed */}
    </StyledSlider>
  );
};

export default SliderComponent;
