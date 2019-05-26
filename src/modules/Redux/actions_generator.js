//Action生成器应该是存放所有和后端API交互逻辑相关内容的地方，通过一个Action生成器，我们可以执行异步逻辑。

import C from './constants';

const addColor = (title, color)=>({
    type: C.ADD_COLOR,
    id: (+new Date()).toString(),
    title,
    color,
    timestamp: (+new Date()).toString()
})

const removeColor = (id)=>({
    type: C.REMOVE_COLOR,
    id
})

const rateColor = (id, rating)=>({
    type: C.RATE_COLOR,
    id,
    rating
})

const sortColors = (sortedBy)=>
    (sortedBy === "rating") ?
        ({
            type: C.SORT_COLORS,
            sortBy: "SORTED_BY_RATING"
        }) :
            (sortedBy === "title") ?
                ({
                    type: C.SORT_COLORS,
                    sortBy: "SORTED_BY_TITLE"
                }) :
                    ({
                        type: C.SORT_COLORS,
                        sortBy: "SORTED_BY_DATE"
                    })

export { addColor, removeColor, rateColor, sortColors }