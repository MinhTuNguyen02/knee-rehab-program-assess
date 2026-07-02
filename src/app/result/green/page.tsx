'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ZoneCard } from '@/components/shared/ZoneCard';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/shared/Button';

function GreenResultContent() {
  const searchParams = useSearchParams();
  const assessmentId = searchParams.get('id') || undefined;
  const scoreParam = searchParams.get('score');
  const score = scoreParam ? Number(scoreParam) : undefined;

  const title = 'Low Risk — Maintain Active Lifestyle';
  const message = 'Great news! Your assessment indicates low risk. This means your knee joints are currently functioning well. Keep up your active lifestyle to maintain flexibility and strength.';
  const recommendations = [
    'Engage in low-impact aerobic exercises like walking, cycling, or swimming to keep joints healthy.',
    'Incorporate regular quadriceps and hamstring stretches to support knee stability.',
    'Stay hydrated and maintain a healthy diet to nourish joint cartilage.',
    'Take this assessment monthly to stay proactive about your knee health.'
  ];

  const router = useRouter();
  const handleBack = () => {
    router.push('/assess');
  };

  return (
    <div className="flex-1 flex flex-col justify-center py-12 px-4 md:px-6 max-w-2xl mx-auto w-full space-y-8">
      {/* Zone Card showing Assessment Results */}
      <ZoneCard
        zone="green"
        title={title}
        message={message}
        recommendations={recommendations}
        score={score}
      />

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
          className="w-full inline-flex items-center justify-center bg-[#007a87] hover:bg-[#006670] active:bg-[#00525a] text-white text-xl font-black py-5.5 px-8 rounded-2xl shadow-md transition duration-300 ease-out text-center focus-visible:ring-4 focus-visible:ring-teal-500/40 min-h-[64px]"
        >
          Track My Score &amp; Improve My Knee ➔
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 pt-4">
        <Button
          type="button"
          variant="outline"
          size="sm"
          fullWidth
          onClick={handleBack}
          className="rounded-2xl text-slate-600 border border-slate-300 hover:bg-slate-50"
        >
          ← Retake assessment
        </Button>
      </div>
    </div>
  );
}

export default function GreenResultPage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="animate-spin h-10 w-10 text-teal-600 border-4 border-current border-t-transparent rounded-full" />
      </div>
    }>
      <GreenResultContent />
    </Suspense>
  );
}
