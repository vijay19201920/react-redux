//using the multiple reduce for the single store

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const mathReducer = (state = {
    result: 1,
    lastValues: [],
    username: "vijay"

}, action) => {
    switch (action.type) {
        case "ADD":
            //  doing it in immutable way is to create new object for state
            state = {

                //old object is retrive with spread operator
                ...state,
                //new value is added to the state without touching the original state by overriding the array values
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]

            }

            break;
        case "SUBTRACT":

            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        //no default
    }
    return state;
};


const UserReducer = (state = {
    name: "vijay",
    age: 27

}, action) => {
    switch (action.type) {
        case "new_user":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "set_age":
            state = {
                ...state,
                age: action.payload
            }

        //no default
    }
    return state;
};


const myLogger = (store) => (next) =>(action)=>{
console.log("loggin Action",action);
//next is important to call if not it will not reach any further like to the 
next(action);

}
//middle ware is executed before store is exc=ecuted
// {} is for the declare state object 

const store = createStore(combineReducers({mathReducer, UserReducer}) , {} ,applyMiddleware(myLogger,logger()) );

//store.subscribe(() => {
  //  console.log('updated store ', store.getState());

//});
store.dispatch({
    type: "ADD",
    payload: 100

});
store.dispatch({
    type: "ADD",
    payload: 22

});
store.dispatch({
    type: "SUBTRACT",
    payload: 10

});
store.dispatch({
    type: "new_user",
    payload: "ravi"
});
store.dispatch({
    type: "set_age",
    payload: 100
});
