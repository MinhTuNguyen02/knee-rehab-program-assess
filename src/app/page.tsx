import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center py-12 px-4 md:px-6 max-w-4xl mx-auto w-full space-y-12">
      {/* 1. Hero Card - Prominent, Deep Teal Gradient Background */}
      <section className="w-full bg-gradient-to-br from-[#007a87] via-[#006670] to-[#00525a] text-white p-8 md:p-12 rounded-3xl border border-teal-600 shadow-xl space-y-8 text-center relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-300/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

        <div className="space-y-4 relative z-10">
          <span className="text-xs md:text-sm font-extrabold text-teal-200 tracking-widest uppercase bg-teal-800/40 px-4 py-1.5 rounded-full inline-block">
            Welcome to KRPS
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
            Evaluate Your <span className="text-teal-200">Knee Health</span> at Home
          </h1>
          <p className="text-lg md:text-xl text-teal-50 font-medium leading-relaxed max-w-2xl mx-auto">
            Answer just two simple questions to receive an instant knee health assessment and personalized recovery guidance from experts.
          </p>
        </div>
        <div className="pt-2 relative z-10 max-w-md mx-auto">
          <Link
            href="/assess"
            className="w-full inline-flex items-center justify-center bg-white hover:bg-teal-50 text-[#007a87] text-xl font-black py-5 px-8 rounded-2xl shadow-lg transition duration-300 ease-out text-center focus-visible:ring-4 focus-visible:ring-teal-200 min-h-[64px]"
          >
            Start Your Knee Assessment →
          </Link>
        </div>
      </section>

      {/* 2. What is KRPS? & What is the purpose? - Two Column Grid */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card: What is KRPS? */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,122,135,0.06)] hover:shadow-[0_12px_40px_rgba(0,122,135,0.1)] transition duration-300 space-y-3">
          <div className="text-3xl bg-teal-50 text-[#007a87] w-12 h-12 flex items-center justify-center rounded-2xl font-black mb-4">🔍</div>
          <h3 className="text-2xl font-black text-slate-900 leading-snug">What is KRPS?</h3>
          <p className="text-lg text-slate-650 font-medium leading-relaxed">
            <strong>KRPS</strong> (Knee Rehab Program Assessment) is a clinically-designed digital joint symptom evaluation tool. It simplifies knee symptom checking so anyone can evaluate their joint condition in real-time.
          </p>
        </div>

        {/* Card: What is the purpose? */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,122,135,0.06)] hover:shadow-[0_12px_40px_rgba(0,122,135,0.1)] transition duration-300 space-y-3">
          <div className="text-3xl bg-teal-50 text-[#007a87] w-12 h-12 flex items-center justify-center rounded-2xl font-black mb-4">🎯</div>
          <h3 className="text-2xl font-black text-slate-900 leading-snug">What is the Purpose?</h3>
          <p className="text-lg text-slate-650 font-medium leading-relaxed">
            The core goal of KRPS is to identify early signs of wear, knee strain, or risk levels. By categorizing symptoms instantly, it helps you take the right corrective steps and access specialized recovery exercises before minor discomfort turns into chronic pain.
          </p>
        </div>
      </section>

      {/* 3. How It Works - Step-by-Step Timeline Layout */}
      <section className="w-full bg-white p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,122,135,0.06)] hover:shadow-[0_12px_40px_rgba(0,122,135,0.1)] transition duration-300 space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900">How It Works</h3>
          <p className="text-lg text-slate-500 font-semibold">Easy, fast, and structured evaluation in 3 steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center space-y-3 relative z-10">
            <div className="w-16 h-16 rounded-full bg-teal-50 text-[#007a87] flex items-center justify-center text-2xl font-black border-4 border-white shadow-[0_4px_20px_rgba(0,122,135,0.15)]">1</div>
            <h4 className="text-xl font-bold text-slate-900">Slider Check</h4>
            <p className="text-base text-slate-600 font-medium leading-relaxed">
              Rate your knee pain and functional limitations over the last 7 days using interactive, elderly-friendly sliders.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center space-y-3 relative z-10">
            <div className="w-16 h-16 rounded-full bg-teal-50 text-[#007a87] flex items-center justify-center text-2xl font-black border-4 border-white shadow-[0_4px_20px_rgba(0,122,135,0.15)]">2</div>
            <h4 className="text-xl font-bold text-slate-900">Instant Scoring</h4>
            <p className="text-base text-slate-600 font-medium leading-relaxed">
              Our clinical scoring model processes your values instantly and assigns you to a distinct risk color zone.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center space-y-3 relative z-10">
            <div className="w-16 h-16 rounded-full bg-teal-50 text-[#007a87] flex items-center justify-center text-2xl font-black border-4 border-white shadow-[0_4px_20px_rgba(0,122,135,0.15)]">3</div>
            <h4 className="text-xl font-bold text-slate-900">Get Your Plan</h4>
            <p className="text-base text-slate-600 font-medium leading-relaxed">
              Unlock targeted rehab workouts and recovery guides designed by clinical specialists to improve your knee health.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Zone Meanings Section */}
      <section className="w-full bg-white p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,122,135,0.06)] hover:shadow-[0_12px_40px_rgba(0,122,135,0.1)] transition duration-300 space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-snug">Understanding Risk Zones</h3>
          <p className="text-lg text-slate-500 font-semibold leading-relaxed">
            Your results categorize your joint health into one of three clinically validated states:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Green Zone */}
          <div className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-100 border-l-4 border-l-emerald-500 space-y-3">
            <div className="inline-flex items-center justify-center bg-emerald-100 text-emerald-800 text-sm font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Green Zone
            </div>
            <h4 className="text-xl font-black text-emerald-950">Low Risk</h4>
            <p className="text-base text-slate-700 font-medium leading-relaxed">
              Slight to no pain and full functional capacity. Focus is on maintaining joint strength, dynamic flexibility, and preventive exercises to keep your cartilage healthy.
            </p>
          </div>

          {/* Amber Zone */}
          <div className="bg-amber-50/40 p-6 rounded-2xl border border-amber-100 border-l-4 border-l-amber-500 space-y-3">
            <div className="inline-flex items-center justify-center bg-amber-100 text-amber-800 text-sm font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Amber Zone
            </div>
            <h4 className="text-xl font-black text-amber-950">Moderate Risk</h4>
            <p className="text-base text-slate-700 font-medium leading-relaxed">
              Mild to moderate joint strain, early-stage wearing, or inflammation. Requires active care, avoiding high impact loads, and starting joint-stabilizing physical therapy.
            </p>
          </div>

          {/* Red Zone */}
          <div className="bg-red-50/40 p-6 rounded-2xl border border-red-100 border-l-4 border-l-red-500 space-y-3">
            <div className="inline-flex items-center justify-center bg-red-100 text-red-800 text-sm font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Red Zone
            </div>
            <h4 className="text-xl font-black text-red-950">High Risk</h4>
            <p className="text-base text-slate-700 font-medium leading-relaxed">
              Severe symptoms, limited movement range, instability, or sharp pain. Immediate load restrictions and guidance from a licensed clinical specialist are strongly advised.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Benefits Card (elderly friendly / quick) */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Benefit Card: Quick & Easy */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,122,135,0.06)] hover:shadow-[0_12px_40px_rgba(0,122,135,0.1)] transition duration-300 flex flex-col sm:flex-row gap-6 items-start">
          <div className="text-4xl bg-teal-50 p-4 rounded-2xl shrink-0 self-center sm:self-start" aria-hidden="true">⏱️</div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-900 leading-snug">Quick &amp; Easy</h3>
            <p className="text-lg text-slate-650 font-medium leading-relaxed">
              Complete the interactive digital knee evaluation in less than 60 seconds with simple steps.
            </p>
          </div>
        </div>

        {/* Benefit Card: Elderly-Friendly */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,122,135,0.06)] hover:shadow-[0_12px_40px_rgba(0,122,135,0.1)] transition duration-300 flex flex-col sm:flex-row gap-6 items-start">
          <div className="text-4xl bg-teal-50 p-4 rounded-2xl shrink-0 self-center sm:self-start" aria-hidden="true">👀</div>
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-900 leading-snug">Elderly-Friendly</h3>
            <p className="text-lg text-slate-650 font-medium leading-relaxed">
              Large high-contrast text, clear visual indicators, and spacious touch slider controls designed for all ages.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Ready Card */}
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
            Start Knee Assessment →
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