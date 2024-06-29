import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { List, Typography } from '@mui/material';
import { FaCheckCircle } from 'react-icons/fa';

const CompletedTaskList = () => {
    const tasks = useSelector(state => state.tasks.filter(task => task.completed));

    return (
        <div className="completed-task-list-container">
            <Typography variant="h6">
                <FaCheckCircle style={{ marginRight: '8px', color: 'green' }} />
                Completed Tasks
            </Typography>
            <List>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} isCompletedList={true} />
                ))}
            </List>
        </div>
    );
};

export default CompletedTaskList;