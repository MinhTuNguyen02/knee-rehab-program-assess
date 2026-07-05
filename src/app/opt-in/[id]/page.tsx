'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { OptInForm } from '@/components/forms/OptInForm';

export default function AssessmentOptInPage() {
  const params = useParams();
  const assessmentId = params?.id as string | undefined;

  return (
    <div className="flex-1 flex flex-col justify-center py-12 px-4 md:px-6 max-w-2xl mx-auto w-full space-y-6">
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          Complete Your Program Setup
        </h1>
        <p className="text-lg text-slate-600 font-medium leading-relaxed">
          Sign up below to link your knee assessment score and claim your personalized clinical recovery plan.
        </p>
      </div>

      <OptInForm assessmentId={assessmentId} />
    </div>
  );
}
