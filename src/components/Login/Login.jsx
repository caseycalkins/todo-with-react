import * as React from 'react';
import Button from '@mui/material/Button';
import './Login.css';

export default function ButtonUsage() {
  return (
    <div className='login-wrapper'>
      <Button className='login-button' variant='contained' color='warning'>
        Login
      </Button>
    </div>
  );
}
