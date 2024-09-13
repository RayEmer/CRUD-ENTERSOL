import { combineReducers } from 'redux';
import tareasReducer from './tareasReducer';

const rootReducer = combineReducers({
    tareas: tareasReducer,
});

export default rootReducer;