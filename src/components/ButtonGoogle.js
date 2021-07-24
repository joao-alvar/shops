import React from 'react';

const ButtonGoogle = ({ children, ...otherProps }) => {
    return (
        <button className="google__btn" {...otherProps}>
            {children}
        </button>
    )
}

export default ButtonGoogle;
