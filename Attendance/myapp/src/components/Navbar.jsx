import React from 'react'
import {AppBar, Button, ThemeProvider, Toolbar} from '@mui/material'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <br /><br /><br /><br />
        <AppBar sx={{backgroundColor: '#222222'}}>
            <Toolbar className="nav">
                <div className="navimg">
                    <img src="https://img.freepik.com/premium-vector/ac-modern-logo-design_786241-186.jpg" alt="" class="navimg"/>
                </div>
                <div>
                    &nbsp;
                    <Link to="/login">
                    <Button variant='contained' sx={{borderRadius: 2, backgroundColor: 'black', transition: 'all 0.3s ease-in-out','&:hover':{backgroundColor: 'white', color:'black', transform: 'scale(1.1)'}}}>Login</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Link to="/creds">
                    <Button variant='contained' sx={{borderRadius: 2, backgroundColor: 'black', transition: 'all 0.3s ease-in-out','&:hover':{backgroundColor: 'white', color:'black', transform: 'scale(1.1)'}}}>Creds</Button>
                    </Link>     
                </div>               
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
