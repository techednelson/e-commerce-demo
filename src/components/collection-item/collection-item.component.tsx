import React from 'react';
import './collection-item.component.scss';
import { Item } from '../../common/interfaces';
import './collection-item.component.scss';
import CustomButton from '../custom-buttom/custom-buttom.component';
import { addItem } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';

const CollectionItem: React.FC<Item> = ({ id, name, price, imageUrl}) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl}`}} />
        <div className="collection-footer">
             <span className={'name'}>{name}</span>
             <span className={'price'}>{price}</span>
        </div>
        <CustomButton inverted>Add to cart</CustomButton>
    </div>
);

const mapDispatchToProps = (dispatch: Function) => ({
    addItem: (item: Item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
