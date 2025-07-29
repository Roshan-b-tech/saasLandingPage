import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md'
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
        <div className={`relative w-full ${sizeClasses[size]} bg-white rounded-2xl shadow-2xl transform transition-all`}>
          <div className="flex flex-col items-center justify-center w-full p-6 border-b border-gray-200 bg-white/70 backdrop-blur-md rounded-t-2xl">
            <img src="/web_logo.svg" alt="ADmyBRAND Logo" className="h-10 w-auto mb-2" />
            <span className="text-lg font-semibold text-gray-900 font-linter mb-1">ADmyBRAND Demo</span>
            <span className="text-sm text-gray-500">See our AI Suite in action</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              icon={X}
              className="!p-2 absolute top-4 right-4"
            />
          </div>
          <div className="p-0 sm:p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};