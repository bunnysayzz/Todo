import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { TextField, Button, Box } from '@mui/material';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask(task));
            setTask('');
        } else {
            alert('Task cannot be empty');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
            <TextField 
                label="New Task" 
                variant="outlined" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                onKeyPress={handleKeyPress}
                sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" color="primary" onClick={handleAddTask}>
                Add Task
            </Button>
        </Box>
    );
};

export default TaskInput;
