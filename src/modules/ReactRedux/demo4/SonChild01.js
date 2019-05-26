import React from 'react';
import PropTypes from 'prop-types';

const SonChild01 = ({ colors, onNewColor = f=>f })=>{
    let _title, _color;
    console.log(colors)

    const submit = e =>{
        e.preventDefault();
        onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    };

    return (
        <form onSubmit={submit}>
            <input ref={ input => _title = input } type="text" placeholder="color title..." />
            <input ref={ input => _color = input } type="color" />
            <button>Add</button>
        </form>
    )
}
SonChild01.propTypes = {
    onNewColor: PropTypes.func
};

SonChild01.defaultProps = {
    onNewColor: f=>f
};

export default SonChild01