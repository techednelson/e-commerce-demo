import React from 'react';
import './header.component.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {AppState} from '../../redux/root-reducer';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header: React.FC<any> = ({ currentUser , cart }) => (
    <div className="header">
        <Link className={'logo-container'} to={'/'}>
            <Logo className={'logo'}/>
        </Link>
        <div className="options">
            <Link className={'option'} to={'/shop'}>
                SHOP
            </Link>
            <Link className={'option'} to={'/shop'}>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        { cart ? null : <CartDropDown/> }
    </div>
);

const mapStateToProps = (state: AppState) => ({
    currentUser: state.user.currentUser,
    cart: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
