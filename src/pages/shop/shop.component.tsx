import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';
import { Item } from '../../common/interfaces';

export interface Props {
    id: number;
    title: string;
    routeName: string;
    items: Item[];
}

class ShopPage extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        
        this.state = {
            collections: SHOP_DATA
        }
    }
    
    render() {
        const { collections } = this.state;
        return (
            <div className={'shop-page'}>
                {
                    collections.map(({ id, ...collectionProps}: Props)  => (
                        <CollectionPreview key={id} {...collectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;
