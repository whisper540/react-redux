import React from 'react';

const Son = ({store})=>{
    console.log(store.getState())
    return (
        <div className="Somaer-son">
            Son...
        </div>
    );
}

export default Son;