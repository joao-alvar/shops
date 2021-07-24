import React from 'react';
import Nav from '../components/Nav';

const MainNav = props => {
    return (
        <div>
            <Nav {...props} />
            {props.children}
        </div>
    );
};

export default MainNav;
