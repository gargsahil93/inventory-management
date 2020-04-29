import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './components/TopNav/TopNav';
import './index.scss';

class Root extends React.Component {
    render() {
        return (
            <div className="page-container">
            <TopNav/>
            </div>
        );
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);


//TODO
https://material-ui.com/getting-started/installation/