'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ZoneCard } from '@/components/shared/ZoneCard';
import { Button } from '@/components/shared/Button';
import { useRouter } from 'next/navigation';

function AmberResultContent() {
  const searchParams = useSearchParams();
  const assessmentId = searchParams.get('id') || undefined;
  const scoreParam = searchParams.get('score');
  const score = scoreParam ? Number(scoreParam) : undefined;

  const title = 'Moderate Risk — Care and Prevention Needed';
  const message = 'Your assessment indicates a moderate level of concern. Your joint may be slightly inflamed or experiencing early-stage wear. Taking early precautions now is key to preventing long-term damage.';
  const recommendations = [
    'Avoid deep squats, kneeling, and excessive stair climbing for the next few days.',
    'Focus on gentle knee-stabilizing exercises (e.g. straight leg raises, wall sits).',
    'Apply a warm compress for 15-20 minutes in the evening to relax surrounding muscles.'
  ];

  const router = useRouter();
  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="flex-1 flex flex-col justify-center py-12 px-4 md:px-6 max-w-2xl mx-auto w-full space-y-8">
      {/* Zone Card showing Assessment Results */}
      <ZoneCard
        zone="amber"
        title={title}
        message={message}
        recommendations={recommendations}
        score={score}
      />

      {/* Reassess Note */}
      <div className="bg-amber-50/50 p-6 rounded-3xl border border-amber-200 text-center space-y-2 shadow-sm">
        <h4 className="text-xl font-bold text-amber-900">📅 Recommended Reassessment</h4>
        <p className="text-lg text-slate-700 font-medium leading-relaxed">
          Knee joint strain is dynamic. We highly recommend reassessing your knee using this self-check tool in <strong>1 week</strong> to track updates or changes in your score.
        </p>
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

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 pt-4">
        <Button
          type="button"
          variant="outline"
          fullWidth
          onClick={handleBack}
          className="text-base py-4 rounded-2xl font-extrabold text-slate-600 border border-slate-300 hover:bg-slate-50"
        >
          ← Retake assessment
        </Button>
      </div>
    </div>
  );
}

export default function AmberResultPage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="animate-spin h-10 w-10 text-teal-600 border-4 border-current border-t-transparent rounded-full" />
      </div>
    }>
      <AmberResultContent />
    </Suspense>
  );
}
