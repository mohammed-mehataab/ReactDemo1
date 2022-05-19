import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Login() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Login</h2>
      
      <TextField id="outlined-basic" label="Email" variant="outlined" />
    
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <br></br>
     
      <Button variant="contained">Login</Button><Button><p>Sign up?</p></Button>
    </Box>
  );
}