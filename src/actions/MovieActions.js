import axios from 'axios';

export const getMovieDetails = (body) => {
    
    return async (dispatch) =>{

        const headers = {
            'Access-Control-Allow-Origin': '*'
        }

        console.log("STARTED REQUEST");

        const res = await axios.get(`https://omdbapi.com/?apikey=91153498&t=${body.t}&type=${body.type}&r=${body.r}`, headers);
    
        console.log("DISPATCHING REQ");
        
        dispatch({
            type: "GET_MOVIE_DETAILS",
            payload: res.data
        });
    } 
}

export const toggleOutput = () => {
    return {
        type: "TOGGLE_OUTPUT",
        payload: null
    }
}