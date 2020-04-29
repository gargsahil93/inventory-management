import React from 'react';
import './TopNav.scss';
import Store from '../InventoryList/InventoryListStore';
export default class extends React.Component {
    constructor(props) {
        super(props);
        Store.getDb();
    }

    render() {
        return (
            <div className="top-nav">
                <div className="nav-header"></div>
            </div>
        );
    }
}
