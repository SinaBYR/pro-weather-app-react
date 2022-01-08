import React from 'react';
import classes from './ForeCastCard.module.css';

const foreCastCard = props => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return(
        <div className={classes.ForeCastCard}>
            <div className={classes.Date}>{months[new Date(props.data.Date).getMonth()]} {new Date(props.data.Date).getDate()}</div>
            <div className={classes.Icons}>
                <div className={classes.Day}>
                    <div className={classes.Icon}>
                        <img src={`./img/${props.data.Day.Icon}.png`} alt={props.data.Day.Icon} width="50px"/>
                    <p>Day</p>
                    </div>
                </div>

                <div className={classes.Night}>
                    <div className={classes.Icon}>
                        <img src={`./img/${props.data.Night.Icon}.png`} alt={props.data.Night.Icon} width="50px"/>
                    <p>Night</p>
                    </div>
                </div>
            </div>
            <div className={classes.Temperatures}>
                <div>{props.data.Temperature.Maximum.Value.toFixed(0)}°</div>
                <div>{props.data.Temperature.Minimum.Value.toFixed(0)}°</div>
            </div>
        </div>
    )
}

export default foreCastCard;