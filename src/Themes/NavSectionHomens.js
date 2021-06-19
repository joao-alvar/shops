import React from 'react';
import NavActiveSection from '../components/NavActiveSection';

const NavSectionHomens = props => {
    return (

        <div>
            <NavActiveSection />
            {props.children}
        </div>
    );
};

export default NavSectionHomens;
