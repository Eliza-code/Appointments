const initialState = [{
    name: "Esteban",
    id:1,
    status: "Pending",
    detail: "hambre",
    date: "27-08-2021"
}];

const rootReducer = (state=initialState, action) => {
switch (action.type) {
    case  "ADD_APPOINTMENT" : 
        return [...state, action.payload];
    case "CHANGE_STATUS" :
        return state.map(el => {
            if(el.id === action.payload){ 
                el.status= 'Fullfiled'
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