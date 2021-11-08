import React from 'react';
import classes from './Welcome.module.css';

const welcome = props => {
    return(
        <div className={classes.Welcome}>
            <h4>Welcome!</h4>
            <p>Ready for a little introduction to the weather app?</p>
            <button onClick={() => props.add()}>Take tour</button>
        </div>
    )
}

export default welcome;