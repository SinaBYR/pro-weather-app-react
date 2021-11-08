import React from 'react';
import classes from './ForeCast.module.css';
import ForeCastCard from './ForeCastCard/ForeCastCard';

const foreCast = props => {
    const foreCasts = props.weatherData
        .map(each => {
            console.log(each);
            return <ForeCastCard data={each} key={each.Date}/>;
        }
    )

    return(
        <div className={classes.ForeCast}>
            <div className={classes.ForeCastWrapper}>
                {foreCasts}
            </div>
        </div>
    )
}

export default foreCast;