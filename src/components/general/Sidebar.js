import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Close as CloseIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Import Link from React Router

const SidebarContainer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    boxSizing: 'border-box',
    backgroundColor: 'rgb(0, 122, 204)', // Updated color
    color: '#fff',
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  margin: theme.spacing(1),
}));

const Sidebar = ({ open, onClose }) => {
  return (
    <SidebarContainer variant="persistent" anchor="left" open={open}>
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
      <Divider />
      <List>
        <ListItem button component={Link} to="/"> {/* Use 'to' instead of 'href' */}
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/Reserve"> {/* Use 'to' instead of 'href' */}
          <ListItemText primary="Reserve" />
        </ListItem>
        <ListItem button component={Link} to="/visit"> {/* Use 'to' instead of 'href' */}
          <ListItemText primary="Visit" />
        </ListItem>
        <ListItem button component={Link} to="/docter"> {/* Use 'to' instead of 'href' */}
          <ListItemText primary="docters" />
        </ListItem>
     
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
