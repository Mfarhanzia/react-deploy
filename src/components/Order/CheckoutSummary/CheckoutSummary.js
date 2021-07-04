import React from 'react';
import Button from '../../UI/Button/Button';
import Burger from '../../Burger/Burger';
import classes from './CheckoutSummary.css';


const checkoutSummary = (props)=>{
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We Hope it tast good!</h1>
            <div style={{width: '300px', margin:'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger"
            clicked={props.checkoutCancelled}
            >Cancel</Button>
            <Button btnType="Success"
            clicked={props.checkoutContinued}
            >Continue</Button>
        </div>
    )
}

export default checkoutSummary;