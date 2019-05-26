//Reducer 就是一类函数，将当前的State和Action作为参数传入其中，通过这些参数创建和返回一个新的State
//Reducer 主要是用来更新State树的特定部分的
//非必须！：将多个Reducer合成一个Reducer，来处理应用程序中任意给定Action的所有State更新

import C from './constants';
const color = (state={}, action) => {
    switch(action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            }
        case C.RATE_COLOR:
            return (state.id !== action.id) ?
                state:
                {
                    ...state,
                    rating: action.rating
                };
        default:
            return state
    }
};

const colors = (state=[], action) => {
    switch(action.type) {
        case C.ADD_COLOR:
            return [
                ...state,
                color({}, action)
            ];
        case C.RATE_COLOR:
            return state.map(
                c => color(c, action)
            );
        case C.REMOVE_COLOR:
            return state.filter(
                c => c.id !== action.id
            );
        default:
            return state
    }
};

const sort = (state="SORTED_BY_DATE", action) => {
    switch(action.type) {
        case C.SORT_COLORS:
            return action.sortBy
        default:
            return state
    }
};

export { color, colors, sort }