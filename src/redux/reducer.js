import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK, LOAD_TASKS } from './actions';

const initialState = {
    tasks: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => 
                    task.id === action.payload.id ? { ...task, text: action.payload.text } : task
                )
            };
        case TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => 
                    task.id === action.payload.id ? { ...task, completed: !task.completed } : task
                )
            };
        case LOAD_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        default:
            return state;
    }
};

export default taskReducer;