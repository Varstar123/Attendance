import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Button, IconButton, TextField, Toolbar } from '@mui/material';
import './Navbar.css'
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
        <AppBar sx={{ backgroundColor: "#4169E1" }}>
            <div className='area1'>
                <Toolbar>
                    <div>
                        <TextField variant='outlined' size='small' sx={{backgroundColor:'white', color:'black', minWidth:'100px', width:'200px'}}></TextField>
                        <Button sx={{backgroundColor:'#222222', height:'40px'}}>🔍</Button>
                    </div>
                </Toolbar>
            </div>
            <div className='area2'>
                <Toolbar sx={{ minHeight: '1px', height: '1px', padding: 0, backgroundColor: '#000080'}}>
                    <Link to = '/home'>
                        <Button variant='text' sx={{color: 'white'}}>Home</Button>
                    </Link>

                    <Link to = '/electronics'>
                        <Button variant='text' sx={{color: 'white'}}>Electronics</Button>
                    </Link>
                    
                    <Link>
                        <Button variant='text' sx={{color: 'white'}}>Clothing</Button>
                    </Link>

                    <Link to = '/beauty'>
                        <Button variant='text' sx={{color: 'white'}}>Beauty</Button>
                    </Link>

                    <Link>
                        <Button variant='text' sx={{color: 'white'}}>Kitchen</Button>
                    </Link>

                    <Link>
                        <Button variant='text' sx={{color: 'white '}}>Groceries</Button>
                    </Link>
                    <Link to = '/view'>
                        <Button variant='text' sx={{color: 'white '}}>View</Button>
                    </Link>
                    

                    <Link to ='/add'>
                        <Button variant='text' sx={{color: 'white '}}>Sell</Button>
                    </Link>
                  <Link to ='/login'>
                        <Button variant='text' sx={{color: 'white '}}>Login</Button>
                    </Link>
                  <Link to ='/signup'>
                  <Button variant='text' sx={{colour: 'white' }}>Signup</Button>
                  </Link>
                </Toolbar>
            </div>
        </AppBar>
        <br /><br />
    </div>
  )
}

export default Navbar