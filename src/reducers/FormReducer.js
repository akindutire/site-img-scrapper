
export const searchformOnProcess = (oldval = false, action ) => {

    if(action.type == "SEARCH_FORM_PROCESSING"){
        return action.payload;
    }

    return oldval;
}