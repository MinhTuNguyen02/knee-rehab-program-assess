import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl w-full px-6 md:px-12 mx-auto py-4 flex items-center justify-between min-h-[72px]">
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold text-4xl text-[#007a87] hover:text-[#006670] tracking-tight focus-visible:ring-4 focus-visible:ring-teal-500/40 rounded-lg p-1 outline-none min-h-[48px]"
          aria-label="KRPS Home"
        >
          {/* Stylized Joint/Activity SVG Icon */}
          <div className="flex flex-col leading-none">
            <span className="text-primary text-4xl tracking-tight">KRPS</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Knee Assessment</span>
          </div>
        </Link>
        {/* <nav className="flex items-center gap-2 md:gap-4">
          <Link
            href="/"
            className="text-base font-bold text-slate-600 hover:text-primary hover:bg-slate-50 transition-all duration-200 rounded-xl px-4 py-2 flex items-center min-h-[44px]"
          >
            Home
          </Link>
          <Link
            href="/assess"
            className="text-base font-bold text-slate-600 hover:text-primary hover:bg-slate-50 transition-all duration-200 rounded-xl px-4 py-2 flex items-center min-h-[44px]"
          >
            Take Assessment
          </Link>
          <Link
            href="/opt-in"
            className="text-base font-bold text-slate-600 hover:text-primary hover:bg-slate-50 transition-all duration-200 rounded-xl px-4 py-2 flex items-center min-h-[44px]"
          >
            Contact Team
          </Link>
        </nav> */}
      </div>
    </header>
  );
};
