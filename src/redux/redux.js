import { combineReducers, createStore } from 'redux';
import { actionReducer } from "./actionReducer";

const rootReducer = combineReducers({
    actions: actionReducer,
    // dashboard: dashboardReducer
})

const store = createStore(rootReducer);



window.store = store;

export default store;