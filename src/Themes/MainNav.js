import React from 'react';
import Nav from '../components/Nav';

const MainNav = props => {
    return (
        <div>
            <Nav />
            {props.children}
        </div>
    );
};

export default MainNav;
