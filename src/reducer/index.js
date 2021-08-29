const initialState = [];

const rootReducer = (state=initialState, action) => {
switch (action.type) {
    case  "ADD_APPOINTMENT" : 
    console.log('add : ' , action.payload)
        return [...state, action.payload];

    case "CHANGE_STATUS" :
        //console.log(state);
        
        return state.map(el => {
            
            if((el.id) === (action.payload)){ 
                console.log(el.status);
                el.status= 'Fulfill'
                console.log(el.status);
            }

            return el;
        })

    case "DELETE_APPOINTMENT" : 
        return state.filter( el => el.id !== action.payload)
   
    default:
        return state;

}
}

export default rootReducer;