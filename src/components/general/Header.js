import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Sidebar from './Sidebar';
import { styled } from '@mui/material/styles';

const HeaderContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgb(0, 122, 204)', // Updated color
  color: '#fff',
  padding: '0 20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  borderBottom: '2px solid rgba(0, 122, 204, 0.5)', // Slightly lighter blue for bottom border
}));

const Logo = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontFamily: 'Comic Sans MS',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: '#fff',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  fontFamily: 'Comic Sans MS',
  fontWeight: 'bold',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'rgba(0, 122, 204, 0.8)', // Slightly lighter blue on hover
    color: '#fff',
  },
}));

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <HeaderContainer position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleSidebarOpen}>
            <MenuIcon />
          </IconButton>
          <Logo variant="h6">DocComic</Logo>
          <Box>
            <NavButton variant="text" href="/home">Home</NavButton>
            <NavButton variant="text" href="/book">Book</NavButton>
            <NavButton variant="text" href="/about">About</NavButton>
            <NavButton variant="text" href="/contact">Contact</NavButton>
          </Box>
        </Toolbar>
      </HeaderContainer>

      <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />
    </>
  );
};

export default Header;
