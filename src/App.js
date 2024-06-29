import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import CompletedTaskList from './components/CompletedTaskList';
import { Container, Box, Typography } from '@mui/material';
import { loadTasks } from './redux/actions';
import { FaTasks, FaPlusCircle } from 'react-icons/fa';
import './App.css';

const AppContent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTasks());
    }, [dispatch]);

    return (
        <Container className="app-container">
            <Box textAlign="center" my={4}>
                <Typography variant="h3" className="app-title">
                    <FaTasks style={{ marginRight: '8px' }} />
                    To-Do List
                </Typography>
            </Box>
            <Box className="task-section">
                <Typography variant="h5" className="task-input-title">
                    <FaPlusCircle style={{ marginRight: '8px' }} />
                    Add New Task
                </Typography>
                <TaskInput />
            </Box>
            <Box className="task-lists">
                <Box className="task-list">
                    <TaskList />
                </Box>
                <Box className="completed-task-list">
                    <CompletedTaskList />
                </Box>
            </Box>
        </Container>
    );
};

const App = () => (
    <Provider store={store}>
        <AppContent />
    </Provider>
);

export default App;
