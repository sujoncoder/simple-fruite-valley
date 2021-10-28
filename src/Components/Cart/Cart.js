import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Cart = (props) => {
    const {cart}=props

    let total = 0
    for(const product of cart){
        total=total+product.price
    }

    const shiping = total > 0 ? 15:0
    const tax = (total+shiping)*0.1
    const grantTotal = (total+shiping+tax)

    return (
        <div>
            <h3>Orderd-Summery</h3>
            <h5>Total-Ordered : </h5>
            <p>Total : $ {total.toFixed(2)}</p>
            <p>Tax : $ {tax.toFixed(2)}</p>
            <p>Shiping : $ {shiping.toFixed(2)}</p>
            <h6>Grand Total : $ {grantTotal.toFixed(2)}</h6>
            <Button className="order"><Link className="review" to ="/order-review">Order-Review</Link> </Button>
        </div>
    );
};

export default Cart;