import React from 'react';
import ReactDOM from 'react-dom';
const mountNode = document.getElementById('app');
import { Content } from '@test/library';

function App () {
    return (
        <div>
            <h1>Title</h1>
            <Content text="Test" />
        </div>
    )
}

ReactDOM.render(<App />, mountNode);