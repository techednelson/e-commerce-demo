import React from 'react';
import './collection-item.component.scss';
import { Item } from '../../common/interfaces';
import './collection-item.component.scss';

const CollectionItem: React.FC<Item> = ({ id, name, price, imageUrl}) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl}`}} />
        <div className="collection-footer">
             <span className={'name'}>{name}</span>
             <span className={'price'}>{price}</span>
        </div>
    </div>
);

export default CollectionItem;
