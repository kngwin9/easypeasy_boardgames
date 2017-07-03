import React from 'react';

import Header from './header/header';
import Footer from './footer/footer';
import LeftSidebar from './left_sidebar/left_sidebar';

import './app.css';

const App = (props) => (
    <div>
        <Header />
        <LeftSidebar />
        {props.children}
        <Footer />
    </div>
);

export default App;
