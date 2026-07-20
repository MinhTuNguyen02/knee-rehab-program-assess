'use client';

import React from 'react';
import { OptInForm } from '@/components/forms/OptInForm';

export default function GeneralOptInPage() {
  return (
    <div className="flex-1 flex flex-col justify-center py-12 px-4 md:px-8 max-w-2xl mx-auto w-full space-y-8 " animate-fade-in-up>
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          Get Matched with a Knee Recovery Specialist
        </h1>
        <p className="text-base md:text-lg text-slate-500 font-semibold leading-relaxed">
          Provide your details below to activate your account and establish contact with our specialized physical rehabilitation support team.
        </p>
      </div>

      <OptInForm />
    </div>
  );
}
