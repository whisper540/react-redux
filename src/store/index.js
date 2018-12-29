import { createStore, combineReducers, applyMiddleware } from 'redux';
import { colors, sort } from 'reducers.js';
import stateData from './initialState.js';

const logger = store => next => action => {
    let result;
    result = next(action);
};

const saver = store => next => action => {
    let result = next(action);
    localStorage['redux-store'] = JSON.stringfy(store.getState());
    return result;
};

const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({ colors, sort }),
        (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : stateData
    );

export default storeFactory;
