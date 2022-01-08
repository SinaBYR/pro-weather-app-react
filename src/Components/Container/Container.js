import React from 'react';

const container = props => {
    return(
        <div
            style={{
                maxWidth: props.maxWidth,
                margin: props.margin,
                padding: props.padding
            }}>
            {props.children}
        </div>
    )
}

export default container;