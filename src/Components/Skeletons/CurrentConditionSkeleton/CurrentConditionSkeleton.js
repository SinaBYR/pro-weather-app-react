import React from 'react';
import classes from './CurrentConditionSkeleton.module.css';

const currentConditionSkeleton = props => {
    return(
        <div className={classes.CurrentConditionSkeletonWrapper}>
            <div className={classes.CurrentConditionSkeleton}>
                <div className={classes.Icon}></div>
                <div className={classes.Details}>
                    <div className={classes.City}></div>
                    <div className={classes.Today}></div>
                    <div className={classes.Temperature}></div>
                    <div className={classes.Condition}></div>
                </div>
            </div>
        </div>
    )
}

export default currentConditionSkeleton;