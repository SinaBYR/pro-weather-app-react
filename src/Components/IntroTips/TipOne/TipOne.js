import React from 'react';
import classes from './TipOne.module.css';

const tipOne = props => {
    return(
        <div className={classes.TipOne}>
            <h2>↑</h2>
            <p>Search the city you would like to know about its weather condition!</p>
            <button onClick={() => props.add()}>Next</button>
        </div>
    )
}

export default tipOne;