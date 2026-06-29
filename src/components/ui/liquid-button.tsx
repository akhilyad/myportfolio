'use client';
import React, { useState } from 'react';
import { Liquid, Colors } from './button-1';

const EMERALD_COLORS: Colors = {
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

type LiquidButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
};

export function LiquidButton({ children, href, onClick, icon }: LiquidButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const innerContent = (
    <>
      {/* Outer glow */}
      <div className="absolute w-[112.81%] h-[128.57%] top-[8.57%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70 pointer-events-none">
        <span className="absolute inset-0 rounded-lg bg-[#d9d9d9] filter blur-[6.5px]"></span>
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <Liquid isHovered={isHovered} colors={EMERALD_COLORS} />
        </div>
      </div>

      {/* Shadow layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92.23%] h-[112.85%] rounded-lg bg-[#010128] filter blur-[7.3px] pointer-events-none"></div>

      {/* Main button body */}
      <div className="relative w-full h-full overflow-hidden rounded-lg pointer-events-none">
        <span className="absolute inset-0 rounded-lg bg-[#d9d9d9]"></span>
        <span className="absolute inset-0 rounded-lg bg-black"></span>
        <Liquid isHovered={isHovered} colors={EMERALD_COLORS} />
        
        {/* Border overlays */}
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`absolute inset-0 rounded-lg border-solid border-[3px] border-white/10 mix-blend-overlay filter ${i <= 2 ? 'blur-[3px]' : i === 3 ? 'blur-[5px]' : 'blur-[4px]'}`}
          ></span>
        ))}
        
        {/* Inner highlight */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[70.8%] h-[42.85%] rounded-lg filter blur-[15px] bg-emerald-600/20"></span>
      </div>

      {/* Content */}
      <span className="absolute inset-0 flex items-center justify-center px-4 gap-2 rounded-lg group-hover:text-emerald-300 text-white text-sm font-semibold tracking-wide whitespace-nowrap pointer-events-none">
        {icon}
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className="relative inline-block w-36 h-[2.7em] mx-auto group dark:bg-black bg-white dark:border-white border-black border-2 rounded-lg no-underline cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block w-36 h-[2.7em] mx-auto group dark:bg-black bg-white dark:border-white border-black border-2 rounded-lg cursor-pointer"
    >
      {innerContent}
    </button>
  );
}