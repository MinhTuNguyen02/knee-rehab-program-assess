import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0d1520] text-slate-400 mt-auto border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10">
        {/* Important Medical Disclaimer Card */}
        <div className="border-l-4 border-amber-500 bg-slate-900/60 p-6 rounded-r-2xl space-y-3 shadow-md">
          <div className="flex items-center gap-2.5">
            <svg className="w-6 h-6 text-amber-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <h4 className="text-base font-black text-amber-400 uppercase tracking-widest">
              Important Medical Disclaimer
            </h4>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-slate-350 font-medium">
            This tool is for informational and educational purposes only. The KRPS Score is an educational assessment tool and does not replace medical assessment by a healthcare professional. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Do not disregard professional medical advice or delay in seeking it because of something you have read on this website.
          </p>
        </div>

        {/* Structured Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-900">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6Z" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
              <span className="font-extrabold text-xl text-white">KRPS Program Assessment</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm font-medium">
              Empowering patients with clinically-designed digital evaluation tools for proactive joint and knee health management at home.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-end gap-10">
            <div className="space-y-3">
              <h5 className="text-white font-extrabold text-sm uppercase tracking-widest">Assessment Quick Links</h5>
              <ul className="space-y-2.5 text-sm font-bold">
                <li>
                  <Link href="/" className="hover:text-white transition duration-200">
                    Home Page
                  </Link>
                </li>
                <li>
                  <Link href="/assess" className="hover:text-white transition duration-200">
                    Knee Assessment Slider
                  </Link>
                </li>
                <li>
                  <Link href="/opt-in" className="hover:text-white transition duration-200">
                    Connect With Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-900 gap-4 text-xs font-semibold text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} KRPS Program. Backed by clinical research. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
