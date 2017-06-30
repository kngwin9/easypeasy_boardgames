import React from 'react';

import Header from './header/header';
// import Footer from './footer/footer';

import './app.css';

const App = (props) => (
    <div>
        <Header />
        {props.children}
        {/*<Footer />*/}
    </div>
);

export default App;
