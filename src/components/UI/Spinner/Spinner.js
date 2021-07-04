import React from 'react';
import classes from './Spinner.css'


const spinner = () =>(
    // <div class={classes.Loader}>Loading...</div>
    <div className={classes.Loader}><div></div><div></div></div>
);

export default spinner;