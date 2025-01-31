import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate();
  navigate("/calculator");


  return (
    <div backgroundColor='blue'>
      <br /><br /><br /><br />
        <Box className = 'papbox'>
          <Paper className='pap' sx={{borderRadius: 8,backgroundColor:'white',opacity: '0.8', transition: 'all 0.3s ease-in-out','&:hover':{backgroundColor: 'white',opacity: '1',transform: 'scale(1.05)'}}}>
            <div className = 'boxhead'>
              <Typography variant='poster'>
                <h2>LOGIN PAGE</h2>
              </Typography>
            </div>
            <br /><br /><br />
            <div className='boxcont'>
              <TextField variant='outlined' label='Username' sx={{'& .MuiOutlinedInput-root': {borderRadius: 4}}}></TextField><br /><br />
              <TextField variant='outlined' type='password' label='Password' sx={{'& .MuiOutlinedInput-root': {borderRadius: 4}}}></TextField><br /><br />
              <Link>
                <Button variant='contained' sx={{borderRadius: 2, backgroundColor: 'black', transition: 'all 0.3s ease-in-out','&:hover':{backgroundColor: 'white', color:'black', transform: 'scale(1.1)'}}}>Submit</Button>
              </Link>
            </div>
          </Paper>
        </Box>
    </div>
  )
}

export default Login
