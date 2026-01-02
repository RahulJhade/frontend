import React from 'react';

export default function SectionDivider() {
  return (
    <div className="relative h-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r 
        from-purple-600/20 via-indigo-500/30 to-purple-600/20
        animate-gradient-x"
      />
    </div>
  );
}
