import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { List, Typography } from '@mui/material';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks.filter(task => !task.completed));

    return (
        <div>
            <Typography variant="h6">Tasks</Typography>
            <List>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} isCompletedList={false} />
                ))}
            </List>
        </div>
    );
};

export default TaskList;
