import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import './TaskList.css';
import DeleteButton from '../DeleteButton/DeleteButton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: 'auto',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function BasicStack({ tasks, onSubmitTask }) {
  return (
    <>
      <Box sx={{ width: '60%' }}>
        <Stack spacing={2}>
          <div>
            {' '}
            {/* Added a <div> as a block-level container */}
            <ul className='unordered-list-wrapper'>
              {tasks.map((task, index) => (
                <li key={index}>
                  <Item className='task-list-section-wrapper'>
                    <Typography variant='h6'>{task.name}</Typography>
                    <Typography variant='body1'>{task.description}</Typography>
                    <Typography variant='body2'>{task.dueDate}</Typography>
                  </Item>
                  <DeleteButton onDeleteTask={() => onSubmitTask(index)} />
                </li>
              ))}
            </ul>
          </div>
        </Stack>
      </Box>
    </>
  );
}

export default function TaskList({ tasks, onSubmitTask }) {
  return (
    <>
      <div className='task-list-wrapper'>
        <BasicStack tasks={tasks} onSubmitTask={onSubmitTask} />
      </div>
    </>
  );
}
