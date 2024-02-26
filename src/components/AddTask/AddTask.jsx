import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import './AddTask.css';

function BasicDatePicker({ onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label='Due Date' onChange={onChange} format='YYYY/MM/DD' />
    </LocalizationProvider>
  );
}

export default function AddTask({ onAddTask }) {
  const [newTask, setNewTask] = useState({
    name: '',
    description: '',
    dueDate: null,
  });
  // TODO: Handle empty values for name, description, and dueDate
  const handleNameChange = (e) => {
    setNewTask({ ...newTask, name: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setNewTask({ ...newTask, description: e.target.value });
  };

  const handleDueDateChange = (date) => {
    setNewTask({ ...newTask, dueDate: date.format('YYYY-MM-DD') });
  };

  const handleAddTask = () => {
    if (newTask.name.trim() === '') {
      return;
    }
    onAddTask(newTask);
    setNewTask({
      name: '',
      description: '',
      dueDate: null,
    });
  };

  return (
    <div className='add-task-wrapper'>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          alignItems: 'center',
          margin: 'auto',
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          id='standard-basic'
          label='Add Task'
          value={newTask.name}
          onChange={handleNameChange}
        />
        <TextField
          id='standard-basic'
          label='Task Description'
          value={newTask.description}
          onChange={handleDescriptionChange}
        />
        <BasicDatePicker onChange={handleDueDateChange} />
        <Button
          className='add-task-button'
          variant='contained'
          color='warning'
          onClick={handleAddTask}
        >
          Add Task
        </Button>
      </Box>
    </div>
  );
}
