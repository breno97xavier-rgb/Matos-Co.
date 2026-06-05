import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' uses white/gold (for dark bg); 'dark' uses navy/gold (for cream/light bg)
  layout?: 'horizontal' | 'vertical' | 'symbol';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({
  className = '',
  variant = 'light',
  layout = 'horizontal',
  size = 'md',
}: LogoProps) {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : 'text-navy';
  const ampersandColor = isLight ? 'text-white' : 'text-navy';
  const lineBg = isLight ? 'bg-gold/40' : 'bg-gold/50';

  // Responsive sizes matching the pristine geometry of the provided logo
  const sizeConfig = {
    sm: {
      mText: 'text-[28px]',
      andText: 'text-[13px]',
      coText: 'text-[11px]',
      andCoMargin: 'ml-1',
      andCoGap: 'space-y-[1px]',
      coMarginTop: 'mt-0',
      height: 'h-[28px]',
      lineWidth: 'w-24',
      titleText: 'text-[11px]',
      subtextText: 'text-[6px]',
      titleTracking: 'tracking-[0.2em]',
      subtextTracking: 'tracking-[0.25em]'
    },
    md: {
      mText: 'text-[38px]',
      andText: 'text-[18px]',
      coText: 'text-[15px]',
      andCoMargin: 'ml-1.5',
      andCoGap: 'space-y-[1.5px]',
      coMarginTop: 'mt-0',
      height: 'h-[38px]',
      lineWidth: 'w-32',
      titleText: 'text-[14px]',
      subtextText: 'text-[7.5px]',
      titleTracking: 'tracking-[0.24em]',
      subtextTracking: 'tracking-[0.3em]'
    },
    lg: {
      mText: 'text-[56px]',
      andText: 'text-[26px]',
      coText: 'text-[22px]',
      andCoMargin: 'ml-2',
      andCoGap: 'space-y-[2px]',
      coMarginTop: 'mt-0',
      height: 'h-[56px]',
      lineWidth: 'w-44',
      titleText: 'text-[19px]',
      subtextText: 'text-[10px]',
      titleTracking: 'tracking-[0.26em]',
      subtextTracking: 'tracking-[0.32em]'
    }
  };

  const s = sizeConfig[size];

  // 1. MONOGRAM COMPONENT (Exactly matching M & Co. geometry in image_0)
  const Monogram = () => (
    <div className={`inline-flex items-center ${s.height} leading-none select-none font-serif`}>
      {/* Tall High-Contrast "M" in Gold */}
      <span className={`${s.mText} font-medium text-gold leading-none select-none`}>M</span>
      
      {/* Compact Stacked Column on the right */}
      <div className={`flex flex-col items-start ${s.andCoMargin} ${s.andCoGap} leading-none`}>
        {/* Calligraphic styled ampersand using Antic Didone */}
        <span className={`${s.andText} amp ${ampersandColor} font-normal leading-none`}>
          &amp;
        </span>
        {/* Co. under the ampersand in Gold */}
        <span className={`${s.coText} font-serif font-medium text-gold ${s.coMarginTop} leading-none`}>
          Co.
        </span>
      </div>
    </div>
  );

  // 2. RENDER SELECTED LAYOUT
  if (layout === 'symbol') {
    return (
      <div className={`inline-block select-none ${className}`}>
        <Monogram />
      </div>
    );
  }

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
        {/* Monogram Symbol */}
        <Monogram />
        
        {/* Horizontal Divider Line */}
        <div className={`h-[1px] ${lineBg} my-3 ${s.lineWidth} transition-all duration-300`} />
        
        {/* MATOS & CO. Title */}
        <div className={`font-serif uppercase ${s.titleText} ${s.titleTracking} font-normal text-center ${textColor} mb-0.5 leading-none`}>
          MATOS <span className="amp font-medium">&amp;</span> CO.
        </div>
        
        {/* PERFORMANCE & TECNOLOGIA Subtext */}
        <div className={`font-sans uppercase ${s.subtextText} ${s.subtextTracking} font-semibold text-gold mt-1 leading-none`}>
          PERFORMANCE <span className="font-light">&amp;</span> TECNOLOGIA
        </div>
      </div>
    );
  }

  // default to 'horizontal'
  return (
    <div className={`inline-flex items-center gap-3 select-none text-left ${className}`}>
      {/* Monogram Symbol */}
      <Monogram />
      
      {/* Vertical divider line */}
      <div className={`h-7 w-[1px] ${lineBg}`} />
      
      {/* Horizontal texts */}
      <div className="flex flex-col justify-center leading-none">
        {/* MATOS & CO. */}
        <div className={`font-serif ${s.titleText} ${s.titleTracking} font-normal ${textColor} leading-tight`}>
          MATOS <span className="amp font-medium">&amp;</span> CO.
        </div>
        {/* PERFORMANCE & TECNOLOGIA */}
        <div className={`font-sans uppercase ${s.subtextText} ${s.subtextTracking} font-semibold text-gold mt-0.5 leading-none`}>
          PERFORMANCE <span className="font-light">&amp;</span> TECNOLOGIA
        </div>
      </div>
    </div>
  );
}
