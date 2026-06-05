import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = '', variant = 'light' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy';
  const subtitleColor = variant === 'light' ? 'text-gold-light' : 'text-gold';
  const separatorColor = variant === 'light' ? 'bg-white/25' : 'bg-navy/25';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Monogram */}
      <div className={`text-2xl font-semibold font-serif tracking-tight ${textColor}`}>
        M
        <span className="font-sans font-light mx-1 text-gold-light">
          &amp;
        </span>
        Co.
      </div>
      
      {/* Geometric divider line */}
      <div className={`h-4 w-[1px] ${separatorColor} mx-1`}></div>
      
      {/* Descritor */}
      <div className={`text-[9px] font-sans font-semibold tracking-[0.15em] uppercase ${subtitleColor}`}>
        Performance <span className="font-sans font-light normal-case text-[9px] px-0.5 text-gold-light">&amp;</span> Tecnologia
      </div>
    </div>
  );
}
