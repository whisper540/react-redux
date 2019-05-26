import React from 'react';
import storeFactory from '../store/storeFactory';
import Son from './Son';

const store = storeFactory()

const Main = ()=>{
    return (
        <Son store={store}/>
    )
}

export default Main