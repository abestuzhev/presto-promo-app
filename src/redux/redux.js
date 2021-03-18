import { combineReducers, createStore } from 'redux';
import { actionReducer } from "./actionReducer";
import {dashboardReducer} from "./dashboardReducer";
import {reducer as formReducer} from 'redux-form';
import {orderReducer} from "./orderReducer";


const rootReducer = combineReducers({
    actions: actionReducer,
    dashboard: dashboardReducer,
    form: formReducer,
    order: orderReducer,
})

const store = createStore(rootReducer);



window.store = store;

export default store;