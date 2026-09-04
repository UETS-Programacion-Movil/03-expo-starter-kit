import React from 'react';
import { View, Text, ViewProps } from 'react-native';

export type BadgeTone = 'yellow' | 'green' | 'pink' | 'cyan' | 'orange' | 'purple' | 'red';

export interface BadgeProps extends ViewProps {
  label: string;
  tone?: BadgeTone;
  className?: string;
}

const toneMap: Record<BadgeTone, string> = {
  yellow: 'bg-yellow-300 text-black',
  green: 'bg-emerald-300 text-black',
  pink: 'bg-pink-300 text-black',
  cyan: 'bg-cyan-300 text-black',
  orange: 'bg-orange-300 text-black',
  purple: 'bg-purple-300 text-black',
  red: 'bg-red-500 text-white'
};

export const Badge: React.FC<BadgeProps> = ({
  label,
  tone = 'yellow',
  className = '',
  ...props
}) => {
  const currentTone = toneMap[tone];

  return (
    <View
      className={`border-2 border-black rounded-full px-3 py-1 self-start shadow-[2px_2px_0px_0px_#000000] ${currentTone} ${className}`}
      {...props}
    >
      <Text className="text-[11px] font-extrabold uppercase tracking-wider text-black">
        {label}
      </Text>
    </View>
  );
};
