import React from 'react'
import {AppBar, Button, ThemeProvider, Toolbar} from '@mui/material'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <AppBar sx={{backgroundColor: '#222222'}}>
            <Toolbar className="nav">
                <div className="navimg">
                    <img src="https://img.freepik.com/premium-vector/ac-modern-logo-design_786241-186.jpg" alt="" class="navimg"/>
                </div>
                <div>
                    &nbsp;
                    <Link to="/login">
                        <Button variant='contained' sx={{backgroundColor: '#222222'}}>Login</Button>
                    </Link>
                    &nbsp;
                    <Link to="/creds">
                    <Button variant='contained' sx={{backgroundColor: '#222222'}}>Creds</Button>
                    </Link>     
                </div>               
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
