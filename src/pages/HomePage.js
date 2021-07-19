import React from 'react';
import Directory from '../components/Directory';
import Services from '../components/Services';

const HomePage = props => {
    return (
        <section>
            <Directory />
            <Services />
        </section>
    );
};

export default HomePage;
