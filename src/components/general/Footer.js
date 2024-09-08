import React from 'react';
import { Container, Grid, Typography, Link, Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
   backgroundColor: 'rgb(0, 122, 204)',
  color: '#fff',
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a team dedicated to providing the best services for booking and managing appointments. Learn more about our mission and values.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <FooterLink href="#home" variant="body2">Home</FooterLink><br />
            <FooterLink href="#about" variant="body2">About</FooterLink><br />
            <FooterLink href="#services" variant="body2">Services</FooterLink><br />
            <FooterLink href="#contact" variant="body2">Contact</FooterLink>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <FooterLink href="https://facebook.com" target="_blank" variant="body2">Facebook</FooterLink><br />
            <FooterLink href="https://twitter.com" target="_blank" variant="body2">Twitter</FooterLink><br />
            <FooterLink href="https://instagram.com" target="_blank" variant="body2">Instagram</FooterLink>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: <FooterLink href="mailto:support@example.com" variant="body2">support@example.com</FooterLink><br />
              Phone: +1 (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.5)' }} />
        
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} DocComic. All rights reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
