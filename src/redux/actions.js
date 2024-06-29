export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const LOAD_TASKS = 'LOAD_TASKS';

export const addTask = (text) => {
    const task = { id: Date.now(), text, completed: false };
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return {
        type: ADD_TASK,
        payload: task
    };
};

export const deleteTask = (id) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    return {
        type: DELETE_TASK,
        payload: { id }
    };
};

export const editTask = (id, text) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.map(task => 
        task.id === id ? { ...task, text } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    return {
        type: EDIT_TASK,
        payload: { id, text }
    };
};

export const toggleTask = (id) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    return {
        type: TOGGLE_TASK,
        payload: { id }
    };
};

export const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return {
        type: LOAD_TASKS,
        payload: tasks
    };
};