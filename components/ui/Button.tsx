import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

// PASO 1: Define el tipo unión ButtonVariant con los 4 colores requeridos
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

// PASO 2: Asegura que ButtonProps extienda de TouchableOpacityProps
export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variante?: ButtonVariant;
  className?: string;
  onPress?: () =>  void;
}

// PASO 3: Mapea cada variante con sus clases de Tailwind correspondiente
export const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-yellow-300 text-black',
  secondary: 'bg-cyan-300 text-black',
  danger: 'bg-pink-400 text-black',
  success: 'bg-emerald-300 text-black',
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variante = 'primary',
  className = '',
  onPress,
  disabled,
  ...props
}) => {
  const currentVariant = variantStyles[variante] || 'bg-yellow-300 text-black';

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      className={`border-[3px] border-black rounded-lg py-3 px-5 items-center justify-center ${currentVariant} ${
        disabled ? 'opacity-50' : ''
      } ${className}`}
      {...props}
    >
      <Text className="text-sm font-black uppercase tracking-wider text-black">
        {label}
      </Text>
    </TouchableOpacity>
  );
};
