import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variante?: ButtonVariant;
  className?: string;
  onPress?: () => void;
}

export const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-yellow-300 text-black',
  secondary: 'bg-cyan-300 text-black',
  danger: 'bg-pink-400 text-black',
  success: 'bg-emerald-300 text-black',
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variante = 'primary',
  className,
  onPress,
  disabled = false,
  ...rest
}) => {
  const estilo = variantStyles[variante];

  return (
    <TouchableOpacity
      {...rest}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      className={`items-center justify-center rounded-lg border-[3px] border-black px-5 py-3 shadow-[3px_3px_0px_0px_#000000] ${estilo} ${
        disabled ? 'opacity-50' : ''
      } ${className ?? ''}`}
    >
      <Text className="text-sm font-black uppercase tracking-wider text-black">
        {label}
      </Text>
    </TouchableOpacity>
  );
};