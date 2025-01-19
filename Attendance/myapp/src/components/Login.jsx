import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login Page</h1><br /><br />
        <TextField variant='standard' label='username'></TextField><br /><br />
        <TextField variant='standard' label='password'></TextField><br /><br />
        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Login