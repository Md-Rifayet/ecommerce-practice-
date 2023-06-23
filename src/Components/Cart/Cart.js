import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <div className="cart-container">
                <h4>Order Summery</h4>
                <p>Selected Items: {props.cart.length}</p>
                <p></p>
            </div>
        </div>
    );
};

export default Cart;