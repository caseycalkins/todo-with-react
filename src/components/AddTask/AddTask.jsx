import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './AddTask.css';
import { useState } from 'react';

function BasicDatePicker() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Due Date" />
        </LocalizationProvider>
      );
}


export default function AddTask() {
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
                <BasicDatePicker />
                <Button className="add-task-button" variant="contained" color="warning">Add Task</Button>
            </Box>
        </div>
    )
}