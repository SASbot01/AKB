import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="text-corporate-600 uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-corporate-500 mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};