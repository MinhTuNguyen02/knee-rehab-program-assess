'use client';

import React from 'react';
import { OptInForm } from '@/components/shared/OptInForm';

export default function GeneralOptInPage() {
  return (
    <div className="flex-1 flex flex-col justify-center py-12 px-4 md:px-6 max-w-2xl mx-auto w-full space-y-6">
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          Connect With Our Team
        </h1>
        <p className="text-lg text-slate-600 font-medium leading-relaxed">
          Please fill out the form below to register and get in touch with our knee rehabilitation specialists.
        </p>
      </div>

      <OptInForm />
    </div>
  );
}
