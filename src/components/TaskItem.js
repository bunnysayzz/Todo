import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../redux/actions';
import { ListItem, ListItemText, IconButton, Checkbox, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskItem = ({ task, isCompletedList }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        dispatch(deleteTask(task.id));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        dispatch(editTask(task.id, editedText));
        setIsEditing(false);
    };

    return (
        <ListItem>
            <Checkbox
                checked={task.completed}
                onChange={handleToggle}
                disabled={isCompletedList}
            />
            {isEditing ? (
                <TextField
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    onBlur={handleSave}
                    autoFocus
                />
            ) : (
                <ListItemText primary={task.text} />
            )}
            {!isCompletedList && (
                <>
                    <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )}
        </ListItem>
    );
};

export default TaskItem;
