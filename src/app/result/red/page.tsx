'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ZoneCard } from '@/components/shared/ZoneCard';

function RedResultContent() {
  const searchParams = useSearchParams();
  const assessmentId = searchParams.get('id') || undefined;
  const scoreParam = searchParams.get('score');
  const score = scoreParam ? Number(scoreParam) : undefined;

  const title = 'High Risk — Consult a Medical Professional';
  const message = 'Your assessment suggests significant knee concern. We highly recommend consulting a physician, physiotherapist, or orthopedic specialist for a professional diagnosis and care plan.';
  const recommendations = [
    'Schedule a consultation with your General Practitioner or a licensed Physiotherapist.',
    'Temporarily avoid high-impact activities (running, jumping, heavy lifting) to prevent further strain.',
    'Use cold therapy (ice packs wrapped in a towel) for 15 minutes to manage acute pain or swelling.',
    'Ask your doctor about structured, clinical knee rehabilitation programs.'
  ];

  return (
    <div className="flex-1 flex flex-col justify-center py-12 px-4 md:px-6 max-w-2xl mx-auto w-full space-y-8">
      {/* Zone Card showing Assessment Results */}
      <ZoneCard
        zone="red"
        title={title}
        message={message}
        recommendations={recommendations}
        score={score}
      />

      {/* Red Zone GP Contact Callout */}
      <div className="bg-red-50/50 p-6 rounded-3xl border border-red-200 text-center space-y-3 shadow-sm">
        <h4 className="text-xl font-bold text-red-900">Need Immediate Advice?</h4>
        <p className="text-lg text-slate-700 font-medium leading-relaxed">
          If you are experiencing severe swelling, inability to bear weight, or lockups, please seek medical attention immediately.
        </p>
        <a
          href="tel:911"
          className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-extrabold text-lg px-6 py-3 rounded-xl min-h-[48px] shadow transition"
        >
          Call Local Emergency 📞
        </a>
      </div>

      {/* CTA card directing to dedicated opt-in page */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-black text-slate-900 leading-tight">
            🎁 Get Your Free Recovery Workouts
          </h3>
          <p className="text-lg text-slate-655 font-medium leading-relaxed">
            Register to claim your personalized knee rehab video workouts guided by clinical experts.
          </p>
        </div>
        <Link
          href={assessmentId ? `/opt-in/${assessmentId}` : '/opt-in'}
          className="w-full inline-flex items-center justify-center bg-[#007a87] hover:bg-[#006670] active:bg-[#00525a] text-white text-xl font-black py-5 px-8 rounded-2xl shadow-md transition duration-300 ease-out text-center focus-visible:ring-4 focus-visible:ring-teal-500/40 min-h-[60px]"
        >
          Track My Score &amp; Improve My Knee ➔
        </Link>
      </div>
    </div>
  );
}

export default function RedResultPage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="animate-spin h-10 w-10 text-teal-600 border-4 border-current border-t-transparent rounded-full" />
      </div>
    }>
      <RedResultContent />
    </Suspense>
  );
}
