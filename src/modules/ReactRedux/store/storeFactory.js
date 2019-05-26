//一般意义的中间件可以作为两个不同层次或者不同软件之间的粘合剂
//Redux的中间件，扮演了Store的分发管道的角色。在Redux中，中间件是在分发某个Action过程中一系列顺序执行的若干函数构成。

//storeFactory是一个工厂类，用来管理Store创建过程的函数，该工厂类将会创建一个包含日志记录和保存数据功能的中间件

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { colors, sort } from './reducers';
import stateData from './initialState';

const logger = (store) => (next) => (action) =>{
    console.log('logger')
    // console.log( action.type )
    // console.log( store.getState() )
    let result = next(action)
    // console.log( store.getState() )
    return result
}

const saver = (store) => (next) => (action) => {
    console.log('saver')
    // console.log( action.type )
    // console.log( store.getState() )
    let result = next(action)
    // console.log( store.getState() )
    // localStorage['redux-store'] = JSON.stringfy(store.getState())
    return result
}

const storeFactory = (initialState = stateData) =>{
    return applyMiddleware(logger, saver)(createStore)(
        combineReducers({ colors, sort }),
        stateData
    )
}

export default storeFactory