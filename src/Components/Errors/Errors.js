import classes from './Errors.module.css';
import React from 'react';
import NotFound from './NotFound/NotFound';

const errors = props => {
    let displayedError = null;
    if(props.type === 404){
        displayedError = <NotFound closer={props.closer}/>;
    }

    return(
        <div className={classes.Errors}>
            {displayedError}
        </div>
    )
}

export default errors;