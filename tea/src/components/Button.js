import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    button
}) =>{ 
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize
    : SIZES[0]

    return (
        <a href='/sign-up' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${button ? 'btn--mobile' : ''}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </a>
    )
};


export default Button;
