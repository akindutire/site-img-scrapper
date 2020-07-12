import { combineReducers } from 'redux';
import { searchFormOnProcess } from './FormReducer';
import { movieDetails, toggleOutput } from './MovieReducer'; 

export const reducers = combineReducers({
    searchFormOnProcess,
    movieDetails,
    outputToggle: toggleOutput
});