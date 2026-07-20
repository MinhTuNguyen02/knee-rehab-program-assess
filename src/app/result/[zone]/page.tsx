'use client';

import React, { Suspense, useEffect } from 'react';
import { useSearchParams, useParams, useRouter } from 'next/navigation';
import { ZoneCard } from '@/components/ui/ZoneCard';
import { Button } from '@/components/ui/Button';
import { ZONE_CONTENT } from '@/lib/constants';

function DynamicResultContent() {
  const params = useParams();
  const zone = (params?.zone as string) || 'green';

  const searchParams = useSearchParams();
  const assessmentId = searchParams.get('id') || undefined;
  const scoreParam = searchParams.get('score');
  const score = scoreParam ? Number(scoreParam) : undefined;

  const painParam = searchParams.get('pain');
  const funcParam = searchParams.get('func');
  const painScore = painParam !== null && !isNaN(Number(painParam)) ? Number(painParam) : undefined;
  const funcScore = funcParam !== null && !isNaN(Number(funcParam)) ? Number(funcParam) : undefined;

  const router = useRouter();

  // Validate zone, default to green if invalid
  const validZone = (['green', 'amber', 'red'].includes(zone)) ? zone as 'green' | 'amber' | 'red' : 'green';
  const content = ZONE_CONTENT[validZone];

  // Dynamic zone class styling applied to body (imported style rules in globals.css)
  useEffect(() => {
    const bodyClass = `zone-${validZone}`;
    document.body.classList.add(bodyClass);
    return () => {
      document.body.classList.remove(bodyClass);
    };
  }, [validZone]);

  const zoneBadgeStyles = {
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    amber: 'bg-amber-50 text-amber-700 border-amber-200',
    red: 'bg-red-50 text-red-700 border-red-200',
  };

  const handleBack = () => {
    router.push('/assess');
  };

  return (
    <div className="flex-1 flex flex-col justify-center py-12 px-4 md:px-8 max-w-2xl mx-auto w-full space-y-8 animate-fade-in-up">
      {/* Zone Card showing Assessment Results */}
      <ZoneCard
        zone={validZone}
        title={content.title}
        score={score}
        painScore={painScore}
        funcScore={funcScore}
      />

      {/* Message and Recommendations */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-sm space-y-6">
        <p className="text-lg md:text-xl leading-relaxed font-black text-slate-800">
          {content.message}
        </p>

        <div className="space-y-4">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">
            Personalised Recommendations:
          </h3>
          <ul className="space-y-4">
            {content.recommendations.map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-base md:text-lg text-slate-700">
                <span className={`flex items-center justify-center font-bold text-sm rounded-full min-w-[28px] min-h-[28px] h-7 w-7 mt-0.5 border shrink-0 ${zoneBadgeStyles[validZone]}`}>
                  {index + 1}
                </span>
                <span className="font-semibold leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Conditional Callouts based on Zone */}
      {validZone === 'amber' && (
        <div className="bg-amber-50/40 p-6 rounded-3xl border border-amber-200 text-center space-y-3 shadow-sm flex flex-col items-center">
          <div className="text-amber-600 bg-amber-100/30 p-3 rounded-2xl border border-amber-200/40">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <h4 className="text-lg font-black text-amber-900">Recommended Reassessment</h4>
          <p className="text-base text-slate-650 font-semibold leading-relaxed max-w-md">
            Knee joint strain is dynamic. We highly recommend reassessing your symptoms using this self-check tool in <strong>2 week</strong> to track scores and identify trends.
          </p>
        </div>
      )}

      {validZone === 'red' && (
        <div className="bg-red-50/40 p-6 rounded-3xl border border-red-200 text-center space-y-4 shadow-sm flex flex-col items-center">
          <div className="text-red-600 bg-red-100/30 p-3 rounded-2xl border border-red-200/40">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <h4 className="text-lg font-black text-red-900">Need Immediate Advice?</h4>
          <p className="text-base text-slate-650 font-semibold leading-relaxed max-w-md">
            If you are experiencing severe knee swelling, inability to bear weight, locking joints, or instability, please seek physical healthcare attention immediately.
          </p>
          <a
            href="tel:000"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-black text-lg px-6 py-3 rounded-2xl min-h-[48px] shadow transition active:scale-[0.98]"
          >
            Call Local Emergency Services
          </a>
        </div>
      )}

      {/* CTA card directing to dedicated opt-in page */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm text-center space-y-6">
        <div className="flex justify-center">
          <div className="text-primary bg-teal-50 border border-teal-100 p-4 rounded-2xl">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-black text-slate-900 leading-tight">
            Claim Your Free Recovery Exercises
          </h3>
          <p className="text-base text-slate-500 font-semibold leading-relaxed max-w-md mx-auto">
            Register to claim your personalized clinical knee rehabilitation exercise video guides, sent directly to your phone.
          </p>
        </div>
        <Button
          href={assessmentId ? `/opt-in/${assessmentId}` : '/opt-in'}
          variant="primary"
          size="lg"
          fullWidth
        >
          Track My Score & Improve My Knee
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 pt-4">
        <Button
          type="button"
          variant="outline"
          size="sm"
          fullWidth
          onClick={handleBack}
          className="rounded-xl"
        >
          Retake Assessment
        </Button>
      </div>
    </div>
  );
}

export default function DynamicResultPage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="animate-spin h-10 w-10 text-primary border-4 border-current border-t-transparent rounded-full" />
      </div>
    }>
      <DynamicResultContent />
    </Suspense>
  );
}
