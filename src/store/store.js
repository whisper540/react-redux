import { createStore, combineReducers } from 'redux';
import { colors, sort } from './reducers.js';

const store = createStore(
    combineReducers({ colors, sort })
);

