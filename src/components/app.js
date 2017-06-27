import React from 'react';
import './app.css';
import logo from './imgs/logo.svg';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="rotate"/>
            <h1>Welcome to Easy Peasy Boardgames!</h1>
        </div>
    </div>
);

export default App;
