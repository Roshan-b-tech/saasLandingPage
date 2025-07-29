import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'glass';
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  variant = 'default',
  className = '',
  ...props
}) => {
  const baseClasses = 'w-full px-4 py-3 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-vertical min-h-[120px]';
  
  const variantClasses = {
    default: 'bg-white border-gray-300 text-gray-900 placeholder-gray-500',
    glass: 'bg-white/10 backdrop-blur-lg border-white/20 text-white placeholder-white/70'
  };

  const errorClasses = error ? 'border-red-500 focus:ring-red-500' : '';

  return (
    <div className="space-y-2">
      {label && (
        <label className={`block text-sm font-medium ${variant === 'glass' ? 'text-white' : 'text-gray-700'}`}>
          {label}
        </label>
      )}
      <textarea
        className={`${baseClasses} ${variantClasses[variant]} ${errorClasses} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className={`text-sm ${variant === 'glass' ? 'text-white/70' : 'text-gray-500'}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};