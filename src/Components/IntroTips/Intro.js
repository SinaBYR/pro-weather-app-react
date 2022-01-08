import React from 'react';
import Welcome from './Welcome/Welcome';
import TipOne from './TipOne/TipOne';
import TipTwo from './TipTwo/TipTwo';
import GetStarted from './GetStarted/GetStarted';
import classes from './Intro.module.css';
import BackDrop from '../Backdrop/Backdrop';

const intro = props => {
    let step = props.step;

    let returnedTip = '';
    switch (step) {
        case 0:
            returnedTip = <Welcome add={props.addStep}/>;
            break;
        
        case 1:
            returnedTip = <TipOne add={props.addStep}/>;
            break;

        case 2:
            returnedTip = <TipTwo add={props.addStep}/>
            break;

        case 3:
            {
                returnedTip = <GetStarted add={props.addStep} closeBackdrop={props.backDropCloser}/>

            }
            break;

        case 4:
            returnedTip = null;
            break;

        default:
            returnedTip = null;
            break;
    }

    let introClasses = [classes.Intro, (props.showing === true ? classes.opened : classes.closed)];
    return(
        <React.Fragment>
            <BackDrop backDropShowing={props.showing} clicked={props.backDropCloser}/>
            <div 
                className={introClasses.join(' ')}
                >
                {returnedTip}
            </div>
        </React.Fragment>
    )
}

export default intro;