import React from 'react';
import NavSection from '../components/NavSection';

const SecondaryNav = props => {
    return (

        <div>
            <NavSection {...props} />
            {props.children}
        </div>
    );
};

export default SecondaryNav;
