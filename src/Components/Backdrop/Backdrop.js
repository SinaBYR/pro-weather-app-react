import classes from './Backdrop.module.css';
import React from 'react';

const backDrop = props => {

    let backDropClasses = [classes.Backdrop, (props.backDropShowing === true ? classes.opened : classes.closed)];

    return(
        <div 
            className={backDropClasses.join(' ')} 
            onClick={() => props.clicked()}
            style={{
                // display: props.backDropShowing === true ? 'block' : 'none'
            }}
            ></div>
    )
}

export default backDrop;