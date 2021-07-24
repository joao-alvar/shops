import React from 'react';

const Button = ({ children, ...otherProps }) => {
    return (
        <button className="btn__registre__se" {...otherProps}>
            {children}
        </button>
    )
}

export default Button;
