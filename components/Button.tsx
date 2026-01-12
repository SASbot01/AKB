import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-10 py-4 rounded-sm text-xs font-sans font-bold tracking-[0.15em] uppercase transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm flex items-center justify-center";
  
  const variants = {
    // Primary: Deep Green with Gold Border
    primary: "bg-akb-700 text-white border border-akb-600 hover:bg-akb-600 hover:border-akb-400 hover:shadow-gold",
    // Secondary: Gold accent
    secondary: "bg-akb-400 text-white hover:bg-white hover:text-akb-700 border border-akb-400",
    // Outline: Green Border
    outline: "bg-transparent text-akb-700 border border-akb-700 hover:bg-akb-700 hover:text-white",
    // White: Clean white
    white: "bg-white text-akb-900 hover:bg-akb-50 border border-transparent shadow-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};