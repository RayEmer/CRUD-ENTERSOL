import { FETCH_TAREAS, DELETE_TAREA, UPDATE_TAREA } from '../actions/actionTypes';

const initialState = [];

const tareasReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TAREAS:
      return action.payload;
    case DELETE_TAREA:
      return state.filter((tarea) => tarea.id !== action.payload);
    case UPDATE_TAREA:
      return state.map((tarea) => (tarea.id === action.payload.id ? action.payload : tarea));
    default:
      return state;
  }
};

export default tareasReducer;
