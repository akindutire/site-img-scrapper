import { combineReducers } from 'redux';
import { ImagesAndWordFrequency, outputToggle } from './ContentReducer';
import { searchformOnProcess } from './FormReducer';


const reducers = combineReducers({
    ImagesAndWordFrequency,
    outputToggle,
    searchformOnProcess
})

export default reducers;