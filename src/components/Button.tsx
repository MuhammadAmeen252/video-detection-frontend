import React, { ReactNode } from 'react';

interface IButton {
    text?: string;
    icon?: string; 
    htmlContent?: ReactNode;
    handleOnclick?: () => void;
    styleClass?: string;
    focus?: boolean;
}

const CustomButton = ({ text, icon, htmlContent, handleOnclick, styleClass, focus }: IButton) => {
    return (
        <button className={`button-style hover:hover:bg-[#e9e9e9]
         flex items-center gap-1 rounded
         p-2 px-3 border border-[#e5e5e5] ${styleClass} ${focus && "shadow-lg"}`}
         onClick={handleOnclick}
         >
            {icon && <img src={icon} alt="Icon" className="icon" />}
            {htmlContent && <span className="html-content">{htmlContent}</span>}
            {text && <span className="text text-sm mt-0.5 text-center">{text}</span>}
        </button>
    );
};

export default CustomButton;
