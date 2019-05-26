//容器组件用来连接表现层组件和数据，容器组件通过上下文访问Store

import React from 'react';
import PropTypes from 'prop-types';
import { addColor } from '../store/actions_generator';//引入Action生成器后
import SonChild01 from './SonChild01';

const SonContainerChild01 = ( props, { store } )=>
    <SonChild01 onNewColor={
        (title, color)=>store.dispatch( addColor( title, color ) )
    }/>

SonContainerChild01.contextTypes = {
    store: PropTypes.object
}

export { SonContainerChild01 }