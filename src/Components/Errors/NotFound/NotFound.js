import React from 'react';
import {IoIosClose} from 'react-icons/io';

const notFound = props => {
    return(
        <React.Fragment>
            <div onClick={props.closer}><IoIosClose /></div>
            <p>Your search did not match any cities.</p>
        </React.Fragment>
    )
}

export default notFound;