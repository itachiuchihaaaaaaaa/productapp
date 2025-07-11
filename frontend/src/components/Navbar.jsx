import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
const Navbar = () => {

const [role,setRole] =useState(null)

useEffect(()=>{
  const savedRole = sessionStorage.getItem("role");
  setRole(savedRole)
},[])

  return (
    <div> <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">
            <Link to={'/p'}
             style={{color:'white', textDecoration:'none'}}>
            Product
            </Link>
          </Button>
          {role==="admin" && (
             <Button color="inherit">
            <Link to={'/a'}
             style={{color:'white', textDecoration:'none'}}>
          Admin
            </Link>
          </Button>
          )}

           <Button color="inherit">
            <Link to={'/'} onClick={()=>{sessionStorage.clear()}}
             style={{color:'white', textDecoration:'none'}}>
        Logout
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <br /><br /><br /><br />
    </Box>
      
    </div>
  )
}

export default Navbar
