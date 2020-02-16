import React from 'react';
import './custom-button.component.scss';

interface CustomButtonProps {
    isGoogleSignIn?: boolean
    type?: any;
    onClick?: any;
    value?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
        children, isGoogleSignIn, ...customButtonProps
    }) => (
   <button className={
       `${isGoogleSignIn ? 'google-sign-in': ' '} custom-button`
   } {
       ...customButtonProps
   }>
       {children}
   </button>
);

export default CustomButton;
