import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk' //Middleware to make asynchronous requests

import { authReducer } from "../reducers/authReducer";
import { notesReducer } from "../reducers/notesReducer";
import { uiReducer } from "../reducers/uiReducer";



const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducer,
})


export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
    )
