import React from 'react';
import './collection-preview.component.scss';
import { Item } from '../../common/interfaces';
import CollectionItem from '../collection-item/collection-item.component';

interface Props {
    title: string;
    items: Item[];
}

const CollectionPreview: React.FC<Props> = ({ title, items })  => (
    <div className={'collection-preview'}>
       <h1 className={'title'}>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item, index) => index < 4)
                .map(({id, ...itemProps}: Item) => (
                    <CollectionItem key={id} {...itemProps} />)
                )
            }
        </div>
    </div>
);

export default CollectionPreview;
