import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.component.scss';
import { RouteComponentProps } from 'react-router';

interface MenuItemProps extends RouteComponentProps {
    title: string;
    imageUrl: string;
    id: number;
    linkUrl: string;
    size: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
        title, imageUrl, size, linkUrl, history, match
    }) => (
    <React.Fragment>
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className={'background-image'} style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    </React.Fragment>
);

export default withRouter(MenuItem);
