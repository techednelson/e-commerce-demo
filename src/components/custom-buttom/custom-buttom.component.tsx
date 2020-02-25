import React from 'react';
import './custom-button.component.scss';

interface CustomButtonProps {
    inverted?: boolean;
    isGoogleSignIn?: boolean;
    type?: any;
    onClick?: any;
    value?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
        children, isGoogleSignIn, inverted,  ...customButtonProps
    }) => (
   <button className={`
        ${inverted} ? 'inverted' : ''
        ${isGoogleSignIn ? 'google-sign-in': ' '} custom-button
   `} {
       ...customButtonProps
   }>
       {children}
   </button>
);

export default CustomButton;
