import React from 'react';
import './Main.css';
import Login from '../Login/Login';
import AddTask from '../AddTask/AddTask';
import TaskList from '../TaskList/TaskList';

export default function Main() {
    return (
            <main className="main-container">
                <h1>Todo App</h1>
                <Login />
                <AddTask />
                <TaskList />
            </main>
    );
}
