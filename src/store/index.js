import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from '../reducer/index';

const store = createStore(rootReducer , composeWithDevTools());

export default store;

// export const store = createStore(
//     rootReducer, 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//);