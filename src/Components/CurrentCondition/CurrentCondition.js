import React from 'react';
import classes from './CurrentCondition.module.css';
import CurrentConditionCard from './CurrentConditionCard/CurrentConditionCard';

const currentCondition = props => {
    return(
        <div className={classes.CurrentCondition}>
            <CurrentConditionCard
                weatherData={props.weatherData}
                cityData={props.cityInfo}/>
        </div>
    )
}

export default currentCondition;