import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';

export default function Navigation() {
    return  (
      <nav className=" fixed-top" id="mainNav">
        
    <AppBar position="relative">
  

    <Toolbar elevation={0}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 1 }}
      >
        <MenuIcon />
      </IconButton>
   
      {/* <Button className="navbar-brand js-scroll" variant="h5" component="div"  href="#page-top" sx={{ flexGrow: 1 }}>
        JASON MA
      </Button> */}
      
      <Grid  container spacing={1} align="center" xs={12} sm={12} md={12}>
        {/* flexgrow specifically applies to the following buttons */}
      
        <Grid className="nav-item" item xs={6} sm={3} md={2}>
          <Button  color="inherit" variant="h6"  sx={{ flexGrow: 1 }}  href="#home">Home</Button>
        </Grid>
        <Grid className="nav-item" item xs={6} sm={3} md={2}>
          <Button  color="inherit" variant="h6"  sx={{ flexGrow: 1 }} href="#about"> About</Button>
        </Grid>
        <Grid className="nav-item" item xs={6} sm={3} md={2}>
          <Button  color="inherit" variant="h6"  sx={{ flexGrow:1 }} href="#service"> Services </Button>
        </Grid>
        <Grid  className="nav-item" item xs={6} sm={3} md={2}>
          <Button  color="inherit" variant="h6"  sx={{ flexGrow: 1 }}  href="#work"> Projects</Button>
        </Grid>
        <Grid className="nav-item" item xs={6} sm={3} md={2}>
          <Button  color="inherit" variant="h6" sx={{ flexGrow: 1 }} href="#contact">Contact</Button>
        </Grid>
        <Grid className="nav-item" item xs={6} sm={3} md={2}>
          <Button  color="inherit" variant="h6"  sx={{ flexGrow: 1 }} href="https://antra.com">Antra</Button>
        </Grid>
       
      </Grid>
     
    </Toolbar>
  </AppBar>
  </nav>
    )
}