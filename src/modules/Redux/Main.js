// Redux包括: Action, Action生成器, Store, 用于修改State的Action对象
// Reducer是纯函数，他会根据当前的State和Action返回一个新的State：(state, action)=>newState

import { createStore, combineReducers } from 'redux';
import { colors, sort } from './reducers';
import stateData from './initialState';
import { removeColor, addColor } from './actions_generator';//引入Action生成器后

const store = createStore(
    combineReducers({ colors, sort }),
    stateData   //初始化state数据，如果不传该参数默认为空
)
// console.log( store.getState() )

// 订阅Store, 返回值赋值给logState是一个取消订阅的句柄
const logState = ()=>{
    console.log(store.getState())
}
const unsubscribeLogger = store.subscribe( logState )


//没引入Action生成器之前的调用方式
store.dispatch({
    type: "ADD_COLOR",
    id: "1558780446316",
    title: "Park Pink",
    color: "#F142FF",
    timestamp: "1558780446316",
    rating: 0
})

//此处取消订阅
unsubscribeLogger()

store.dispatch({
    type: "RATE_COLOR",
    id: "1558777808030",
    rating: 5
})


////引入生成器后，利用Action生成器简化Action的逻辑
console.log( store.getState() )
store.dispatch( removeColor("1558780446316") )
console.log( store.getState() )
store.dispatch( addColor("#00FF00", "Hot Red") )
console.log( store.getState() )