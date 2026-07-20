import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function ThankYouPage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center py-16 px-6 max-w-2xl mx-auto text-center space-y-8 animate-fade-in-up">
      {/* Visual Success Confirmation SVG Icon */}
      <div
        className="w-24 h-24 bg-emerald-50 border-2 border-emerald-200 rounded-full flex items-center justify-center shadow-lg text-emerald-600"
        aria-hidden="true"
      >
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
          You&apos;re All Set!
        </h1>
        <p className="text-xl md:text-2xl text-slate-700 font-bold leading-relaxed">
          Your personalized program submission was successful.
        </p>
        <p className="text-base md:text-lg text-slate-500 font-semibold leading-relaxed max-w-md mx-auto">
          Our specialized team has logged your scores and is currently packaging your custom rehabilitation video exercises. You will receive them via email and SMS shortly.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full pt-6 max-w-xs mx-auto">
        <Button
          href="/"
          variant="primary"
          size="md"
          className="flex-1 shadow-md"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
