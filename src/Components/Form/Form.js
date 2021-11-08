import React from 'react';
import classes from './Form.module.css';
import { FaSearch } from 'react-icons/fa';

const form = props => {
    return(
        <form
            className={classes.Form}
            onSubmit={(e) => props.submit(e.target.searchbar.value.trim(), e)}>
            <input type="text" name="searchbar" autoComplete="off"/>
            <div className={classes.Icon}>
                <button type="submit">
                    <FaSearch />
                </button>
            </div>
        </form>
    )
}

export default form;