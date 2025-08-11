import React from "react";


interface PropsButton {
    children?: React.ReactNode;

    onClick?: () => void,
    style?: string,
    disabled?: boolean,
}
const Button = ({ children, onClick, style, disabled }: PropsButton) => {
    return (
        <div>
            <button
                disabled={disabled}
                onClick={onClick}
                className={`rounded-full font-mono px-4 sm:px-6 md:px-10 py-2.5 overflow-hidden group relative hover:bg-gradient-to-r ${style} text-white font-bold hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300`}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
