import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl w-full px-6 md:px-12 mx-auto py-4 flex items-center justify-between min-h-[72px]">
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold text-4xl text-[#007a87] hover:text-[#006670] tracking-tight focus-visible:ring-4 focus-visible:ring-teal-500/40 rounded-lg p-1 outline-none min-h-[48px]"
          aria-label="KRPS Home"
        >
          <span>KRPS</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/assess"
            className="text-lg font-bold text-slate-800 hover:text-[#007a87] transition duration-300 focus-visible:ring-4 focus-visible:ring-teal-500/40 rounded-lg px-4 py-2 flex items-center min-h-[48px]"
          >
            Assess Now
          </Link>
        </nav>
      </div>
    </header>
  );
};
