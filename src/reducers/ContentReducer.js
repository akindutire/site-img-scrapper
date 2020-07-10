export const ImagesAndWordFrequency = (oldVal = null, action) => {

    if(action.type === "CRAWL_DATA_FROM_URL"){
        return action.payload;
    }

    return oldVal;
}

export const outputToggle = (oldVal = false, action) => {
    if(action.type === "TOGGLE_OUTPUT"){
        return !oldVal;
    }

    return oldVal;
}