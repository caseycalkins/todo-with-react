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
            <DatePicker
            label="Due Date"
            onChange={onChange}
            format="YYYY/MM/DD"
        />
        </LocalizationProvider>
    );
}


export default function AddTask() {
    const [newTask, setNewTask] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleTaskNameChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleTaskDescriptionChange = (event) => {
        setTaskDescription(event.target.value);
    }

    const handleDueDateChange = (date) => {
        // date is a date object. format it to a string
        setDueDate(date.format('YYYY-MM-DD'));
        // setDueDate(date.toISOString());
    }

    const handleInputs = () => {
        console.log(newTask, taskDescription, dueDate);
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
                <TextField
                    id="standard-basic"
                    label="Add Task"
                    value={newTask}
                    onChange={handleTaskNameChange}
                />
                <TextField
                    id="standard-basic"
                    label="Task Description"
                    value={taskDescription}
                    onChange={handleTaskDescriptionChange}
                />
                <BasicDatePicker onChange={handleDueDateChange}/>
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