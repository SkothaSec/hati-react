import React from 'react';
import { Home } from '../Home';
import { About } from '../About';
import { PageNotFound } from '../Errors';

const Layout = (props) => {
    const { } = props;
    return (
        <div>
            <h1>Layout</h1>
            <br />
            <Home />
            <br />
            <About />
            <br />
            <PageNotFound />
        </div>
    )
}

export default Layout;