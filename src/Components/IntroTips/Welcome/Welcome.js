import React from 'react';
import classes from './Welcome.module.css';

const welcome = props => {
    return(
        <div className={classes.Welcome}>
            <h4>Welcome to the weather app!</h4>
            <p>A little introduction to my app.</p>
            <button onClick={() => props.add()}>Take tour</button>
        </div>
    )
}

export default welcome;