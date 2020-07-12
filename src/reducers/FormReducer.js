
export const searchFormOnProcess = (oldval = false, action ) => {

    if(action.type == "SEARCH_FORM_PROCESSING"){
        return action.payload;
    }

    return oldval;
}