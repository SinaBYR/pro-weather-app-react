import React from 'react';
import classes from './GetStarted.module.css';

const getStarted = props => {
    return(
        <div className={classes.GetStarted}>
            <h4>Thank you</h4>
            <p>Let's get started.</p>
            <button 
                onClick={() => {
                    props.add()
                    props.closeBackdrop()
                }
            }>
                Get started</button>
        </div>
    )
}

export default getStarted;