import React from 'react';
import './Main.css';
import Login from '../Login/Login';
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';

export default function Main() {
  const [tasks, setTasks] = React.useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <main className='main-container'>
      <h1>Todo App</h1>
      <Login />
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}
