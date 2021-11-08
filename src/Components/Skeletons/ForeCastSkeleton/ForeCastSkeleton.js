import React from 'react';
import classes from './ForeCastSkeleton.module.css';

const foreCastSkeleton = props => {
    const skeleton = (
        <div className={classes.ForeCastSkeletonCard}>
            <div className={classes.Date}></div>
            <div className={classes.Icons}></div>
            <div className={classes.Temperatures}></div>
        </div>
    );
    return(
        <div className={classes.ForeCastSkeleton}>
            <div className={classes.ForeCastSkeletonWrapper}>
                {skeleton}
                {skeleton}
                {skeleton}
                {skeleton}
            </div>
        </div>
    )
}

export default foreCastSkeleton;