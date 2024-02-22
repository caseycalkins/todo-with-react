import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import './TaskList.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: 'auto',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function BasicStack() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Typography noWrap></Typography>
      </Stack>
    </Box>
  );
}

export default function TaskList() {
  return (
    <>
      <div className='task-list-wrapper'>
        <BasicStack />
      </div>
    </>
  );
}
