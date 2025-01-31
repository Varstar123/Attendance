import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
        <br /><br /><br /><br /><br />
          <h1>Sign Up</h1>
          
          
          <TextField label='Username' variant='outlined' /><br /><br />
          <TextField label='Set password' type='password' variant='outlined' /><br /><br />
          <TextField label='Confirm password' type='password' variant='outlined' /><br /><br />
          <TextField label='Email' type='text' variant='outlined' /><br /><br />
          <Button variant='contained' >SUBMIT</Button> 
          
          
    </div>
  )
}

export default Signup