import {CreateStore, createStore, applyMiddleware , compose} from "redux";
import thunk from "redux-thunk"
import rootReducer from "./reducers"
const initialState = {};
if (localStorage.getItem('cartItems')){
    initialState.cart={items : JSON.parse(localStorage.getItem("cartItems"))}
}
const composeEnhanser =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer , initialState, composeEnhanser(applyMiddleware(thunk)))
