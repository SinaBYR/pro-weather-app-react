import React from 'react';
import classes from './Welcome.module.css';

const welcome = props => {
    return(
        <div className={classes.Welcome}>
            <h4>Welcome to world's the best weather app!</h4>
            <p>In this tour you'll learn how to use our application!</p>
            <button onClick={() => props.add()}>Take tour</button>
        </div>
    )
}

export default welcome;