import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps {
  type?: 'text' | 'number' | 'password' | 'email';
  label: string;
  placeholder?: string;
  required?: boolean;
  error?: string;  // Changed from 'any' to 'string' for better type safety
  value: string;
  validate?: (value: string) => boolean | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type = 'text', label, placeholder, required, error, value, validate, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (validate) {
      const validationResult = validate(value);
      if (typeof validationResult === 'string') {
        console.error(validationResult); // Handle your validation message or error state here
      }
    }
    onChange(e);
  };

  const toggleShowPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative mb-4">
      <label className="text-gray-700 text-sm font-normal mb-2">
        {label}
        {required ? <span className="text-red-500">&nbsp;*</span> : ''}
      </label>
      <input
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        required={required}
        className={`w-full px-4 py-3 border rounded-s rounded-e text-gray-700 focus:outline-none focus:border-blue-500 text-xs font-light bg-gray-200 pr-12 ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {type === 'password' && (
        <button type="button" className="absolute top-9 right-3 flex items-center" onClick={toggleShowPassword}>
          {showPassword ? <FaEyeSlash className="cursor-pointer" /> : <FaEye className="cursor-pointer" />}
        </button>
      )}
      {error && <p className="absolute text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default Input;
