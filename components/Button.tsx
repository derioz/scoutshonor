import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-scout-800 text-white hover:bg-scout-900 focus:ring-scout-700 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-scout-200 text-scout-900 hover:bg-scout-300 focus:ring-scout-300",
    outline: "border-2 border-scout-800 text-scout-800 hover:bg-scout-50 focus:ring-scout-700",
    ghost: "text-scout-700 hover:bg-scout-100 hover:text-scout-900",
    white: "bg-white text-scout-900 hover:bg-scout-100 focus:ring-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};