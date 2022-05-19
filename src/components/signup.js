import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Signup() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Sign Up</h2>
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" /><br></br>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Phone" variant="outlined" /><br></br>
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <TextField id="outlined-basic" label="Confirm Password" variant="outlined" /><br></br>
      <Button variant="contained">Sign Up</Button>
    </Box>
  );
}