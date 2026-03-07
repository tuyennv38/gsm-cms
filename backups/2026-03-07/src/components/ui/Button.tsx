import React from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isLoading?: boolean;
    fullWidth?: boolean;
}

/**
 * @implements feature:login-form-0001
 */
const Button = ({ children, isLoading, fullWidth = true, className = "", ...props }: ButtonProps) => {
    return (
        <button
            disabled={isLoading || props.disabled}
            className={`relative inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition-all duration-300 transform bg-blue-600 rounded-xl hover:bg-blue-700 active:scale-[0.98] disabled:opacity-70 disabled:grayscale disabled:cursor-not-allowed shadow-lg shadow-blue-500/25 active:shadow-none
        ${fullWidth ? 'w-full' : ''} ${className}`}
            {...props}
        >
            {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : null}
            {children}
        </button>
    );
};

export default Button;
