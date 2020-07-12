
export const movieDetails = (oldval = [], action ) => {

    if(action.type == "GET_MOVIE_DETAILS"){
        return action.payload;
    }

    return oldval;
}

export const toggleOutput = (oldVal = false, action) => {
    if(action.type === "TOGGLE_OUTPUT"){
        return !oldVal;
    }

    return oldVal;
}