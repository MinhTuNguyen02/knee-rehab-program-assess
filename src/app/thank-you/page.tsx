import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/shared/Button';

export default function ThankYouPage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center py-16 px-6 max-w-2xl mx-auto text-center space-y-8">
      {/* Visual Success Confirmation Icon */}
      <div
        className="w-24 h-24 bg-emerald-100 border-2 border-emerald-300 rounded-full flex items-center justify-center text-5xl shadow-md text-emerald-700 animate-bounce duration-1000"
        aria-hidden="true"
      >
        ✓
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
          Thank You!
        </h1>
        <p className="text-xl md:text-2xl text-slate-700 font-bold leading-relaxed">
          Your registration was successful.
        </p>
        <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-md mx-auto">
          Our team of specialists has received your request and will follow up with your personalized rehabilitation video workouts via email and SMS shortly.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full pt-6">
        <Button
          href="/"
          variant="primary"
          size="md"
          className="flex-1"
        >
          Back to home
        </Button>
      </div>
    </div>
  );
}
