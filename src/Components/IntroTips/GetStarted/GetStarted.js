import React from 'react';
import classes from './GetStarted.module.css';

const getStarted = props => {
    return(
        <div className={classes.GetStarted}>
            <h4>Excited?</h4>
            <p>Then let's get started!</p>
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