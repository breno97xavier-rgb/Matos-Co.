import React from 'react';

interface SectionDividerProps {
  className?: string;
  lightBg?: boolean;
}

export default function SectionDivider({ className = '', lightBg = false }: SectionDividerProps) {
  const lineColor = lightBg ? 'border-gold/30' : 'border-gold/20';
  const diamondColor = lightBg ? 'bg-gold' : 'bg-gold-light';

  return (
    <div id="section-divider" className={`flex items-center justify-center w-full my-4 select-none ${className}`}>
      <div className={`w-20 border-t ${lineColor}`}></div>
      <div className={`w-1.5 h-1.5 rotate-45 mx-4 ${diamondColor} shadow-sm shadow-gold/20`}></div>
      <div className={`w-20 border-t ${lineColor}`}></div>
    </div>
  );
}
