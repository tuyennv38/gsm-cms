import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    id: string;
}

/**
 * @implements feature:login-form-0001
 * @implements feature:form-validation-0002
 */
const Input = ({ label, error, id, ...props }: InputProps) => {
    return (
        <div className="space-y-2 w-full">
            <label htmlFor={id} className="block text-sm font-semibold text-slate-700">
                {label}
            </label>
            <input
                id={id}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
          ${error ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-white hover:border-slate-300'}
          placeholder:text-slate-400 text-slate-900 leading-tight`}
                {...props}
            />
            {error && (
                <p className="text-xs font-medium text-red-500 animate-in fade-in slide-in-from-top-1">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;
