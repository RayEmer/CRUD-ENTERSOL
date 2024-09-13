import axios from 'axios';
import { CREATE_TAREA, FETCH_TAREAS, DELETE_TAREA, UPDATE_TAREA } from './actionTypes';

export const fetchTareas = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/api/tareas');
  dispatch({ type: FETCH_TAREAS, payload: response.data });
};

export const deleteTarea = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3000/api/tareas/${id}`);
  dispatch({ type: DELETE_TAREA, payload: id });
};

export const updateTarea = (tarea) => async (dispatch) => {
  const response = await axios.put(`http://localhost:3000/api/tareas/${tarea.id}`, tarea);
  dispatch({ type: UPDATE_TAREA, payload: response.data });
};

export const createTarea = (tarea) => async (dispatch) => {
    console.log("Entra aqui: ")
    const response = await axios.post('http://localhost:3000/api/tareas', tarea);
    dispatch({ type: CREATE_TAREA, payload: response.data });
  };