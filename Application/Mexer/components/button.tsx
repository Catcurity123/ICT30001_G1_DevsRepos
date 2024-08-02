import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button'
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', }) => {
  return (
    <button
      onClick={onClick}
      className="w-full mt-4 px-4 py-2 bg-blue-600 text-white-1 font-semibold rounded-md hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

export default Button;
