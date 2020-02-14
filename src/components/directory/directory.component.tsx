import React from 'react';
import './directory.component.scss';
import MenuItem from '../menu-item/menu-item.component';
import { SectionProps } from '../common/interface';

export default class Directory extends React.Component<any, any> {
    constructor(props: SectionProps) {
        super(props);
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    linkUrl: 'shop/womens',
                    size: 'large'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    linkUrl: 'shop/men',
                    size: 'large'
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="homepage">
                    <div className="directory-menu">
                        {
                            this.state.sections.map(({ ...sectionProps }: SectionProps) => (
                                <MenuItem {...sectionProps } />
                            ))
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

