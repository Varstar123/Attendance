import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
        <br /><br /><br /><br /><br />
          <h1>Login</h1>
          
          
          <TextField label='Username' variant='outlined' /><br /><br />
        
          <TextField label='password' type='password' variant='outlined' /><br /><br />
          
          <Button variant='contained' >SUBMIT</Button> 
          
          
    </div>
  )
}

export default Login