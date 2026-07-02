import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-2xl transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-500/40 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    sm: 'min-h-[40px] px-5 py-2.5 text-base font-extrabold',
    md: 'min-h-[48px] px-6 py-4 text-xl',
    lg: 'min-h-[64px] px-8 py-5 text-xl font-black'
  };

  const variantStyles = {
    primary: 'bg-[#007a87] hover:bg-[#006670] active:bg-[#00525a] text-white shadow-md',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-850 active:bg-slate-300 border border-slate-200 shadow-sm',
    danger: 'bg-red-600 hover:bg-red-700 text-white active:bg-red-800 shadow-md',
    outline: 'bg-transparent border border-slate-300 hover:bg-slate-100/80 text-slate-800 active:bg-slate-250 shadow-sm'
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-6 w-6 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : children}
    </button>
  );
};
