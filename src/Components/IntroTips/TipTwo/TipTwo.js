import React from 'react';
import classes from './TipTwo.module.css';

const tipTwo = props => {
    return(
        <div className={classes.TipTwo}>
            <p>After the search, you will see weather info down below!</p>
            <button onClick={() => props.add()}>Next</button>
        </div>
    )
}

export default tipTwo;