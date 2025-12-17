import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-serif tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border";
  
  const variants = {
    primary: "bg-stone-900 text-white border-stone-900 hover:bg-stone-800 hover:border-stone-800 shadow-md",
    secondary: "bg-gold-500 text-white border-gold-500 hover:bg-gold-600 hover:border-gold-600 shadow-md",
    outline: "bg-transparent text-stone-900 border-stone-900 hover:bg-stone-900 hover:text-white",
    ghost: "bg-transparent text-stone-900 border-transparent hover:bg-stone-100"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;