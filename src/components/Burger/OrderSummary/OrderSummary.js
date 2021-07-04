import React, {Component} from "react";
import Aux from "../../../hoc/Auxillary"
import Button from '../../UI/Button/Button'


class OrderSummary extends Component{
    // this could be a functional componenet
    componentWillUpdate(){
        console.log("[OrderSumamary.js] Will update");
    }

    render (){
        const ingredientSummary= Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey}>
                    <span style ={{textTransform:"capitalize"}}>{igKey}:{this.props.ingredients[igKey]}</span>
                </li>);
            })
        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A Burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkouts</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinuedHandler}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;