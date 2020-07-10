import axios from 'axios';

export const contentCrawler = (data) => {

    return async (dispatch) => {

        const headers = {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
          }
          
        console.log("Making request");
        const res = await axios.post("https://zil-site-scrapper.herokuapp.com/scrap.php", data, headers);

        console.log("Finished request");

        dispatch({
            type: 'CRAWL_DATA_FROM_URL',
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