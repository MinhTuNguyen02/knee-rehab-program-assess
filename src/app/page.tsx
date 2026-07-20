import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center py-12 px-4 md:px-8 max-w-6xl mx-auto w-full space-y-16 animate-fade-in-up">
      {/* 1. Hero Section - Modern Asymmetric Split Layout */}
      <section className="w-full bg-gradient-to-br from-[#007a87] via-[#006a75] to-[#00525a] text-white p-8 md:p-14 rounded-[2rem] border border-teal-700 shadow-[0_12px_40px_rgba(0,122,135,0.15)] relative overflow-hidden">
        {/* Decorative background gradients */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-black text-teal-200 tracking-widest uppercase bg-teal-800/40 border border-teal-600/30 px-4 py-1.5 rounded-full inline-block">
              Clinically Informed digital assessment
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Understand Your <br className="hidden md:inline" />
              <span className="text-teal-200">Knee Health</span> in 60 Seconds
            </h1>
            <p className="text-base md:text-lg text-teal-50 font-medium leading-relaxed max-w-xl">
              Take a self-guided assessment based on clinical parameters to evaluate pain, joint strain, and functional capabilities. Get instant recommendations designed by rehabilitation specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/assess"
                className="inline-flex items-center justify-center bg-white hover:bg-teal-50 text-[#007a87] text-lg font-black py-4.5 px-8 rounded-2xl shadow-[0_8px_20px_rgba(0,122,135,0.25)] hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] transition duration-200 text-center min-h-[56px] min-w-[200px]"
              >
                Start Knee Assessment
              </Link>
            </div>
          </div>

          {/* Right column: Stylized medical score visual mock */}
          <div className="lg:col-span-5 hidden lg:flex justify-center">
            <div className="relative p-8 bg-teal-800/20 border border-teal-500/20 rounded-3xl w-full max-w-[320px] aspect-square flex flex-col justify-between shadow-inner backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <span className="text-xs font-black text-teal-200 uppercase tracking-widest">KRP Evaluation</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 "></span>
              </div>
              <div className="text-center space-y-2">
                <div className="text-6xl font-black tracking-tighter text-white">Score</div>
                <div className="text-sm font-bold text-teal-200 uppercase tracking-wider">Clinical Grade</div>
              </div>
              <div className="text-xs font-bold text-teal-100/60 leading-relaxed text-center">
                Interactive sliders calculate metrics in real-time.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What is KRPS? & Purpose - Two Column Grid */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card: What is KRPS? */}
        <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgba(0,122,135,0.05)] transition duration-300 space-y-4">
          <div className="text-primary bg-teal-50 border border-teal-100 w-14 h-14 flex items-center justify-center rounded-2xl font-black mb-4 shrink-0">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-slate-900 leading-snug">What is KRPS?</h3>
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
            <strong>KRPS</strong> (Knee Rehab Program Assessment) is a clinically-designed joint symptom checking tool. It maps patient-reported pain parameters and dynamic movement limitations into an objective risk-based scorecard.
          </p>
        </div>

        {/* Card: What is the purpose? */}
        <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgba(0,122,135,0.05)] transition duration-300 space-y-4">
          <div className="text-primary bg-teal-50 border border-teal-100 w-14 h-14 flex items-center justify-center rounded-2xl font-black mb-4 shrink-0">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-slate-900 leading-snug">What is the Purpose?</h3>
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
            The core goal is early intervention. By categorizing symptoms instantly, the assessment identifies joint stress or strain risk, guiding users to targeted physical therapy strategies and specialist advice before issues become chronic.
          </p>
        </div>
      </section>

      {/* 3. How It Works - Step-by-Step Timeline Layout */}
      <section className="w-full bg-white p-8 md:p-12 rounded-[2rem] border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgba(0,122,135,0.05)] transition duration-300 space-y-10">
        <div className="text-center space-y-2.5">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900">How It Works</h3>
          <p className="text-sm md:text-base text-slate-450 font-bold uppercase tracking-widest">Streamlined evaluation in 3 structured phases</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center space-y-4 relative z-10">
            <div className="w-16 h-16 rounded-full bg-teal-50 border-2 border-teal-100 text-primary flex items-center justify-center text-xl font-black shadow-sm">1</div>
            <h4 className="text-xl font-bold text-slate-900">Symptom Slider Input</h4>
            <p className="text-sm md:text-base text-slate-500 font-semibold leading-relaxed">
              Rate your knee pain intensity and movement limitations over the last 7 days using interactive, high-contrast digital inputs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center space-y-4 relative z-10">
            <div className="w-16 h-16 rounded-full bg-teal-50 border-2 border-teal-100 text-primary flex items-center justify-center text-xl font-black shadow-sm">2</div>
            <h4 className="text-xl font-bold text-slate-900">Automatic Clinical Scoring</h4>
            <p className="text-sm md:text-base text-slate-500 font-semibold leading-relaxed">
              Our clinical mapping algorithm processes the values immediately, assigning your status to a specific health risk zone.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center space-y-4 relative z-10">
            <div className="w-16 h-16 rounded-full bg-teal-50 border-2 border-teal-100 text-primary flex items-center justify-center text-xl font-black shadow-sm">3</div>
            <h4 className="text-xl font-bold text-slate-900">Rehabilitation Program Plan</h4>
            <p className="text-sm md:text-base text-slate-500 font-semibold leading-relaxed">
              Unlock targeted rehab workouts and guidance designed by medical experts to improve muscle support and range of motion.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Understanding Risk Zones */}
      <section className="w-full bg-white p-8 md:p-12 rounded-[2rem] border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.015)] space-y-8">
        <div className="space-y-3 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-snug">Understanding Risk Zones</h3>
          <p className="text-base md:text-lg text-slate-500 font-semibold leading-relaxed">
            Your results categorize your joint health into one of three clinically validated states:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Green Zone */}
          <div className="bg-emerald-50/20 p-6 md:p-8 rounded-2xl border border-emerald-100 border-l-4 border-l-emerald-500 space-y-4">
            <div className="inline-flex items-center justify-center bg-emerald-100 text-emerald-800 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Green Zone
            </div>
            <h4 className="text-lg font-black text-slate-900">Low Joint Risk</h4>
            <p className="text-sm md:text-base text-slate-600 font-semibold leading-relaxed">
              Slight or minimal pain and normal functional capacity. Focus is placed on routine strength preservation, soft-tissue mobility, and preventative exercise loading.
            </p>
          </div>

          {/* Amber Zone */}
          <div className="bg-amber-50/20 p-6 md:p-8 rounded-2xl border border-amber-100 border-l-4 border-l-amber-500 space-y-4">
            <div className="inline-flex items-center justify-center bg-amber-100 text-amber-800 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Amber Zone
            </div>
            <h4 className="text-lg font-black text-slate-900">Moderate Joint Risk</h4>
            <p className="text-sm md:text-base text-slate-600 font-semibold leading-relaxed">
              Mild to moderate knee strains, indicating joint wearing or localized muscle tightness. Requires moderate loads, specific isometric stability exercises, and close monitoring.
            </p>
          </div>

          {/* Red Zone */}
          <div className="bg-red-50/20 p-6 md:p-8 rounded-2xl border border-red-100 border-l-4 border-l-red-500 space-y-4">
            <div className="inline-flex items-center justify-center bg-red-100 text-red-800 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Red Zone
            </div>
            <h4 className="text-lg font-black text-slate-900">High Joint Risk</h4>
            <p className="text-sm md:text-base text-slate-600 font-semibold leading-relaxed">
              Severe symptoms, sharp pain triggers, and major daily mobility restrictions. Urgent active load reduction and a comprehensive clinical examination are highly recommended.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Benefits Card (SVG icons) */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Benefit Card: Quick & Easy */}
        <div className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgba(0,122,135,0.05)] transition duration-300 flex flex-col sm:flex-row gap-6 items-start">
          <div className="text-primary bg-teal-50 border border-teal-100 p-4 rounded-2xl shrink-0 self-center sm:self-start">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black text-slate-900 leading-snug">Quick Assessment</h3>
            <p className="text-sm md:text-base text-slate-600 font-semibold leading-relaxed">
              Complete the digital screening steps and retrieve your calculated risk group in less than 60 seconds.
            </p>
          </div>
        </div>

        {/* Benefit Card: Fully Accessible */}
        <div className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgba(0,122,135,0.05)] transition duration-300 flex flex-col sm:flex-row gap-6 items-start">
          <div className="text-primary bg-teal-50 border border-teal-100 p-4 rounded-2xl shrink-0 self-center sm:self-start">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-black text-slate-900 leading-snug">Accessible & Legible</h3>
            <p className="text-sm md:text-base text-slate-600 font-semibold leading-relaxed">
              Designed with high-contrast text, clear descriptive helper labels, and large touch targets suitable for all age ranges.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Ready Card */}
      <section className="w-full bg-white p-8 md:p-12 rounded-[2rem] border border-slate-200 shadow-sm space-y-8 text-center max-w-3xl mx-auto">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            Ready to Evaluate Your Symptoms?
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-semibold leading-relaxed max-w-xl mx-auto">
            Take the initial step towards better mobility. Complete the slider assessment now or register to talk directly to our specialist rehabilitation support team.
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-2">
          <Link
            href="/assess"
            className="w-full inline-flex items-center justify-center bg-[#007a87] hover:bg-[#006670] active:bg-[#00525a] text-white text-xl font-black py-5 px-8 rounded-2xl shadow-[0_8px_30px_rgba(0,122,135,0.3)] hover:shadow-[0_12px_40px_rgba(0,122,135,0.5)] transition duration-300 ease-out text-center focus-visible:ring-4 focus-visible:ring-teal-500/40 min-h-[60px]"
          >
            Start Knee Assessment
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