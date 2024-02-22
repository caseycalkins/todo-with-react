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
            <DatePicker label="Due Date" onChange={onChange}/>
        </LocalizationProvider>
      );
}


export default function AddTask() {
    const [task, setTask] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const taskName = (event) => {
        setTask(event.target.value);
    }

    const taskDescriptionInput = (event) => {
        setTaskDescription(event.target.value);
    }

    const dueDateInput = (event) => {
        setDueDate(event.toISOString());
    }

    const handleInputs = () => {
        console.log(task, taskDescription, dueDate);
    }

    return (
        <div className="add-task-wrapper">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    display: 'flex',
                    alignItems: 'center',
                    margin: 'auto',
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="Add Task" />
                <TextField id="standard-basic" label="Task Description" />
                <BasicDatePicker onChange={dueDateInput}/>
                <Button
                className="add-task-button"
                variant="contained"
                color="warning"
                onClick={handleInputs}
                >
                    Add Task
                </Button>
            </Box>
        </div>
    )
}