import React from 'react';
import  { Provider } from 'react-redux';
import storeFactory from '../store/storeFactory';
import Son from './Son';

const store = storeFactory()

const Main = ()=>{
    return (
        <Provider store={store}>
            <Son />
        </Provider>
    )
}

export default Main