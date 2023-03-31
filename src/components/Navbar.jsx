import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box>
<AppBar position="static">
  <Toolbar>
   
    <Typography>start</Typography>
    <Button color="inherit"><Link to ='/'style={{color:'white',textDecoration:'none'}}>
    View</Link></Button>
    <Button color="inherit"><Link to ='/add'style={{color:'white',textDecoration:'none'}}>
    Add</Link></Button>
  </Toolbar>
</AppBar>
</Box>
   
  )
}

export default Navbar
