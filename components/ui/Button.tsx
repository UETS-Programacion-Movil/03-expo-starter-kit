import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: ButtonVariant;
}

export const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-yellow-300 text-black',
  secondary: 'bg-cyan-300 text-black',
  danger: 'bg-pink-400 text-black',
  success: 'bg-emerald-300 text-black',
};

export function Button({ label, variant = 'primary', className = '', ...props }: ButtonProps) {
  const currentVariantClass = variantStyles[variant] || variantStyles.primary;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`p-4 rounded-xl border-[3px] border-black items-center justify-center ${currentVariantClass} ${className}`}
      {...props}
    >
      <Text className="font-black text-black text-base">{label}</Text>
    </TouchableOpacity>
  );
}