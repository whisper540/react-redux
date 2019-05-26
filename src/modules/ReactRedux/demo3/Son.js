import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SonContainerChild01 } from './SonContainer';

class Son extends Component {

    constructor(props) {
        super()
        console.log(props)
    }

    getChildContext() {
        return {
            store: this.props.store
        }
    }

    componentWillMount() {
        this.unsubscribe = store.subscribe(
            ()=>this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        const { colors, sort } = store.getState()
        return (
            <SonContainerChild01 />
            // <SonContainerChild02 colors={colors}/>
        )
    }
}

Son.propTypes = {
    store: PropTypes.object.isRequired
}

Son.childContextTypes = {
    store: PropTypes.object.isRequired
}

export default Son;