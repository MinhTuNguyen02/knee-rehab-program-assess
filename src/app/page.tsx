import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center py-12 px-4 md:px-6 max-w-2xl mx-auto space-y-8">
      {/* 1. Hero Card */}
      <section className="w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-center">
        <div className="space-y-4">
          <span className="text-sm font-extrabold text-[#007a87] tracking-wider uppercase block">
            Welcome to KneeRehab
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Evaluate Your <span className="text-[#007a87]">Knee Health</span> at Home
          </h1>
          <p className="text-lg text-slate-650 font-medium leading-relaxed">
            Answer just two simple questions to receive an instant knee health assessment and personalized recovery guidance from experts.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/assess"
            className="w-full inline-flex items-center justify-center bg-[#007a87] hover:bg-[#006670] active:bg-[#00525a] text-white text-xl font-black py-4 px-6 rounded-2xl shadow-md transition duration-300 ease-out text-center focus-visible:ring-4 focus-visible:ring-teal-500/40 min-h-[56px]"
          >
            Start My Knee Assessment ➔
          </Link>
        </div>
      </section>

      {/* 2. Benefit Card: Quick & Easy */}
      <section className="w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start transition duration-300 hover:shadow-md">
        <div className="text-4xl bg-teal-50 p-4 rounded-2xl shrink-0 self-center sm:self-start" aria-hidden="true">⏱️</div>
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-slate-900 leading-snug">Quick &amp; Easy</h3>
          <p className="text-lg text-slate-650 font-medium leading-relaxed">
            Complete the interactive digital knee evaluation in less than 60 seconds with simple steps.
          </p>
        </div>
      </section>

      {/* 3. Benefit Card: Elderly-Friendly */}
      <section className="w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start transition duration-300 hover:shadow-md">
        <div className="text-4xl bg-teal-50 p-4 rounded-2xl shrink-0 self-center sm:self-start" aria-hidden="true">👀</div>
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-slate-900 leading-snug">Elderly-Friendly</h3>
          <p className="text-lg text-slate-650 font-medium leading-relaxed">
            Large high-contrast text, clear visual indicators, and spacious touch slider controls designed for all ages.
          </p>
        </div>
      </section>

      {/* 4. Ready Card */}
      <section className="w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-center">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            Ready to Check Your Knee?
          </h2>
          <p className="text-lg text-slate-650 font-medium leading-relaxed">
            Select one of the actions below to begin your evaluation or connect directly with our patient support specialists.
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-2">
          <Link
            href="/assess"
            className="w-full inline-flex items-center justify-center bg-[#007a87] hover:bg-[#006670] active:bg-[#00525a] text-white text-xl font-black py-5 px-8 rounded-2xl shadow-md transition duration-300 ease-out text-center focus-visible:ring-4 focus-visible:ring-teal-500/40 min-h-[60px]"
          >
            Start Knee Rehab Program →
          </Link>
          <Link
            href="/opt-in"
            className="w-full inline-flex items-center justify-center bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 text-xl font-black py-5 px-8 rounded-2xl border-2 border-slate-300 shadow-sm transition duration-300 ease-out text-center focus-visible:ring-4 focus-visible:ring-slate-200 min-h-[60px]"
          >
            Connect with Team
          </Link>
        </div>
      </section>
    </div>
  );
}