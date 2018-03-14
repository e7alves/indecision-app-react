import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header'

class TodoList extends React.Component {
    render = () => {
        return (
            <div>
                <Header title="To do list" subtitle="List your to do"/>
            </div>
        );
    }
}

ReactDOM.render(<TodoList />, document.getElementById('app'));