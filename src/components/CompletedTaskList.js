import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { List, Typography } from '@mui/material';

const CompletedTaskList = () => {
    const tasks = useSelector(state => state.tasks.filter(task => task.completed));

    return (
        <div>
            <Typography variant="h6">Completed Tasks</Typography>
            <List>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} isCompletedList={true} />
                ))}
            </List>
        </div>
    );
};

export default CompletedTaskList;