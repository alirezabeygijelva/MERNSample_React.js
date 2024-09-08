import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActionArea, CardMedia, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import homeBg from '../../assets/Images/home.png';
import visit from '../../assets/Images/visit.png';
import Reserve from '../../assets/Images/Reserve.png';
const FullWidthSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f5f5f5', // Background color for contrast
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: 8,
}));

const FullWidthImage = styled(CardMedia)(({ theme }) => ({
  height: 300,
  width: '50%',
  objectFit: 'cover',
  borderRadius: 8,
}));

const TextSection = styled(Box)(({ theme }) => ({
  width: '50%',
  padding: theme.spacing(4),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  borderRadius: 16,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 140,
}));

const HomePage = () => {
  return (
    <Container>
      {/* Full-width image with text beside */}
      <FullWidthSection>
        <FullWidthImage
           image={homeBg} // Replace with actual image
          title="Full Width Section"
        />
        <TextSection>
          <Typography variant="h4" gutterBottom>
            Welcome to DocComic
          </Typography>
          <Typography variant="body1" paragraph>
            Explore our services and find out how we can help you. Our platform offers various features tailored to your needs. Learn more about our offerings below.
          </Typography>
          <Typography variant="body1">
            From booking appointments to learning about our team, we provide comprehensive solutions designed for your convenience. Get started by exploring our features.
          </Typography>
        </TextSection>
      </FullWidthSection>

      <Typography variant="h4" gutterBottom align="center" sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
        Explore Our Features
      </Typography>

      <Grid container spacing={4}>
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardActionArea>
              <StyledCardMedia
                image={visit} // Replace with actual image
                title="Home"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Home
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Discover the main features and services offered on the home page.
                </Typography>
              </CardContent>
            </CardActionArea>
          </StyledCard>
        </Grid>
        
        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardActionArea>
              <StyledCardMedia
                image={Reserve} // Replace with actual image
                title="Book"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Book
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Schedule your appointments easily with our booking system.
                </Typography>
              </CardContent>
            </CardActionArea>
          </StyledCard>
        </Grid>
        
        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardActionArea>
              <StyledCardMedia
                image="https://via.placeholder.com/300x140" // Replace with actual image
                title="About"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  About
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Learn more about our services and team.
                </Typography>
              </CardContent>
            </CardActionArea>
          </StyledCard>
        </Grid>
        
        {/* Card 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardActionArea>
              <StyledCardMedia
                image="https://via.placeholder.com/300x140" // Replace with actual image
                title="Contact"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Contact
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get in touch with us for inquiries and support.
                </Typography>
              </CardContent>
            </CardActionArea>
          </StyledCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
