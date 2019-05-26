import { compose } from 'redux';
import { createStore, combineReducers } from 'redux';
import { colors, sort } from './reducers';
import stateData from './initialState';

const store = createStore(
    combineReducers({ colors, sort }),
    stateData   
)

const print = compose(
    list => console.log(list),
    title => title.join(","),
    map => map(c=>c.title),
    colors => colors.map.bind(colors),
    state => state.colors
)

print(store.getState())