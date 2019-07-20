import rootReducer from '../reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initState = {};

const store = createStore(
    rootReducer,
    initState,
    applyMiddleware(thunk)
);

export default store;
