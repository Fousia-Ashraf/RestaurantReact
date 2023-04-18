//not a component. no need of capital letter
import { combineReducers, createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restReducer } from "../reducers/restReducer";


//2.create reducers
const reducers=combineReducers({
restaurantReducer:restReducer

})

//3.create middleware
const middleware=[thunk]

//1.create store

//name koduka
const store=createStore(reducers,applyMiddleware(...middleware))

export default store
