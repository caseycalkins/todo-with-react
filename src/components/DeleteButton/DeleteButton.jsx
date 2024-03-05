import React from 'react';
import Button from '@mui/material/Button';

const handleDeleteTask = (index) => {
  onDeleteTask(index);
};

function DeleteButton({ onDeleteTask }) {
  return (
    <div className='delete-button-wrapper'>
      <Button
        className='delete-task-button'
        variant='contained'
        color='error'
        onClick={handleDeleteTask}
      >
        Delete Task
      </Button>
    </div>
  );
}

export default DeleteButton;
