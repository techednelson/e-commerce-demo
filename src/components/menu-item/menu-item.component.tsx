import React from 'react';
import './menu-item.component.scss';

interface Props {
    title: string,
    imageUrl: string,
    key: number,
    linkUrl?: string,
    size: string
}

const MenuItem: React.FC<Props> = ({ title, imageUrl, size }) => (
    <React.Fragment>
        <div style={{backgroundImage: `url(${imageUrl})`}}
             className={`${size} menu-item`}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    </React.Fragment>
);

export default MenuItem;
