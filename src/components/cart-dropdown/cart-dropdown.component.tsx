import React from 'react';
import CustomButton from '../custom-buttom/custom-buttom.component';
import './cart-dropdown.component.scss';

const CartDropDown: React.FC<any> = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
);

export default CartDropDown;
