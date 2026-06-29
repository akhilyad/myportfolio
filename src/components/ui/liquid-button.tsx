'use client';
import React, { useState } from 'react';
import { Liquid } from './button-1';
import { cn } from '@/lib/utils';

type LiquidButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  colors?: Record<string, string>;
  icon?: React.ReactNode;
};

const DEFAULT_COLORS = {
  color1: '#FFFFFF',
  color2: '#1E10C5',
  color3: '#9089E2',
  color4: '#FCFCFE',
  color5: '#F9F9FD',
  color6: '#B2B8E7',
  color7: '#0E2DCB',
  color8: '#0017E9',
  color9: '#4743EF',
  color10: '#7D7BF4',
  color11: '#0B06FC',
  color12: '#C5C1EA',
  color13: '#1403DE',
  color14: '#B6BAF6',
  color15: '#C1BEEB',
  color16: '#290ECB',
  color17: '#3F4CC0',
};

const EMERALD_COLORS = {
  color1: '#FFFFFF',
  color2: '#059669',
  color3: '#6EE7B7',
  color4: '#FCFCFE',
  color5: '#F9F9FD',
  color6: '#A7F3D0',
  color7: '#047857',
  color8: '#065F46',
  color9: '#10B981',
  color10: '#34D399',
  color11: '#047857',
  color12: '#D1FAE5',
  color13: '#059669',
  color14: '#6EE7B7',
  color15: '#A7F3D0',
  color16: '#047857',
  color17: '#10B981',
};

export function LiquidButton({ 
  children, 
  href, 
  onClick, 
  className,
  colors = EMERALD_COLORS,
  icon
}: LiquidButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonContent = (
    <div 
      className={cn(
        "relative inline-flex items-center justify-center rounded-full overflow-hidden cursor-pointer",
        "w-auto min-w-[160px] h-[48px]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className="absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70">
        <span className="absolute inset-0 rounded-full bg-[#d9d9d9] filter blur-[6.5px]"></span>
        <div className="relative w-full h-full overflow-hidden rounded-full">
          <Liquid isHovered={isHovered} colors={colors} />
        </div>
      </div>
      
      {/* Shadow layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-full bg-emerald-900 filter blur-[7.3px]"></div>
      
      {/* Main button body */}
      <div className="relative w-full h-full overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[#d9d9d9]"></span>
        <span className="absolute inset-0 rounded-full bg-emerald-800"></span>
        <Liquid isHovered={isHovered} colors={colors} />
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`absolute inset-0 rounded-full border-solid border-[3px] border-gradient-to-b from-transparent to-white mix-blend-overlay filter ${i <= 2 ? 'blur-[3px]' : i === 3 ? 'blur-[5px]' : 'blur-[4px]'}`}></span>
        ))}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-full filter blur-[15px] bg-emerald-600"></span>
      </div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 px-6 text-white text-sm font-bold tracking-wide whitespace-nowrap">
        {icon}
        {children}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="no-underline inline-block" onClick={onClick}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {buttonContent}
    </button>
  );
}