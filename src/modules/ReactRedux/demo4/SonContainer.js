//容器组件用来连接表现层组件和数据，容器组件通过上下文访问Store

import { connect } from 'react-redux';
import { addColor } from '../store/actions_generator';//引入Action生成器后
import SonChild01 from './SonChild01';

const SonContainerChild01 = connect(
    state => ({
        colors: [...state.colors]
    }),
    dispatch => ({
        onNewColor(title, color) {
            dispatch( addColor( title, color ) )
        }
    })
)(SonChild01)

export { SonContainerChild01 }