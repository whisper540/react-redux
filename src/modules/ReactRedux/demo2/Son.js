import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        console.log( colors )
        console.log( sort )
        return (
            <div>Son of Demo2...</div>
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