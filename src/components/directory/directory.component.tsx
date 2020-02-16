import React from 'react';
import './directory.component.scss';
import MenuItem from '../menu-item/menu-item.component';
import sections from './directory.data';

interface Props {
    title: string,
    imageUrl: string,
    id: number,
    linkUrl: string
}


export default class Directory extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            sections
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className="homepage">
                    <div className="directory-menu">
                        {
                            this.state.sections.map(({key,  ...sectionProps }: any) => (
                                <MenuItem key={key} {...sectionProps } />
                            ))
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

