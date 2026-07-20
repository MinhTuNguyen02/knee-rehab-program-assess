'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { OptInForm } from '@/components/forms/OptInForm';

export default function AssessmentOptInPage() {
  const params = useParams();
  const assessmentId = params?.id as string | undefined;

  return (
    <div className="flex-1 flex flex-col justify-center py-12 px-4 md:px-8 max-w-2xl mx-auto w-full space-y-8 animate-fade-in-up">
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          Finalise Your Personalised Recovery Plan
        </h1>
        <p className="text-base md:text-lg text-slate-500 font-semibold leading-relaxed">
          Sign up below to securely link your knee assessment scorecard metrics and unlock custom physical exercises designed for your risk level.
        </p>
      </div>

      <OptInForm assessmentId={assessmentId} />
    </div>
  );
}
