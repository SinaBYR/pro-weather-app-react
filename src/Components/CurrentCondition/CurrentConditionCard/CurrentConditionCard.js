import React from 'react';
import classes from './CurrentConditionCard.module.css';

const currentConditionCard = props => {
    return(
        <div className={classes.Card}>
            <div
                className={classes.Icon}
                style={{backgroundColor: props.weatherData.IsDayTime ? '#eeeeee' : '#21324e'}}
                >
                <img 
                    src={`./img/${props.weatherData.WeatherIcon}.png`} 
                    alt={props.weatherData.WeatherIcon}/>
            </div>
            <div className={classes.Details}>
                <div className={classes.City}>
                    {props.cityData.EnglishName}
                    &nbsp;
                    <span style={{color: 'gray'}}>
                        {props.cityData.Country.ID}
                    </span>
                </div>
                <div className={classes.Temperature}>{props.weatherData.Temperature.Metric.Value.toFixed(0)}°c</div>
                <div className={classes.Condition}>{props.weatherData.WeatherText}</div>
            </div>
        </div>
    )
}

export default currentConditionCard;