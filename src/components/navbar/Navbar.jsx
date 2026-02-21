import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShopIcon from '@mui/icons-material/Shop';
import LogoPhoto from './../../assets/img/LogoKashop.png';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography sx={{ flexGrow: 1 }}>
            <Box alignItems={"center"} display="flex" gap={0}>
              <ShopIcon sx={{ mr: 1 }} />
              Kashop

            </Box>

          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center', }}>
            <Link component={RouterLink} to="/" color="inherit" underline='none' >Home</Link>
            <Link component={RouterLink} to="/cart" color="inherit" underline='none' >Cart</Link>
            <Link component={RouterLink} to="/login" color="inherit" underline='none' >Login</Link>
            <Link component={RouterLink} to="/register" color="inherit" underline='none' >Register</Link>
          </Box>

          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
