import { combineReducers } from 'redux';
import { ImagesAndWordFrequency, outputToggle } from './ContentReducer';


const reducers = combineReducers({
    ImagesAndWordFrequency,
    outputToggle
})

export default reducers;