import React from 'react';

const Button = ({ children, ...otherProps }) => {
    return (
        <button className="google__btn" {...otherProps}>
            {children}
        </button>
    )
}

export default Button;
