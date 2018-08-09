import React from 'react';

import './Layout.css';

/*======================================================================
// This will serve as a high level layout wrapper for the UI.
======================================================================*/
const Layout = (props) => (
    <main>
        {props.children}
    </main>
);

export default Layout;