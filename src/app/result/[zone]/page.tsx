'use client';

import React, { Suspense } from 'react';
import { useSearchParams, useParams, useRouter } from 'next/navigation';
import { ZoneCard } from '@/components/ui/ZoneCard';
import { Button } from '@/components/ui/Button';

const ZONE_CONTENT = {
  green: {
    title: 'Low Risk — Maintain Active Lifestyle',
    message: 'Great news! Your assessment indicates low risk. This means your knee joints are currently functioning well. Keep up your active lifestyle to maintain flexibility and strength.',
    recommendations: [
      'Engage in low-impact aerobic exercises like walking, cycling, or swimming to keep joints healthy.',
      'Incorporate regular quadriceps and hamstring stretches to support knee stability.',
      'Stay hydrated and maintain a healthy diet to nourish joint cartilage.',
      'Take this assessment monthly to stay proactive about your knee health.'
    ]
  },
  amber: {
    title: 'Moderate Risk — Care and Prevention Needed',
    message: 'Your assessment indicates a moderate level of concern. Your joint may be slightly inflamed or experiencing early-stage wear. Taking early precautions now is key to preventing long-term damage.',
    recommendations: [
      'Avoid deep squats, kneeling, and excessive stair climbing for the next few days.',
      'Focus on gentle knee-stabilizing exercises (e.g. straight leg raises, wall sits).',
      'Apply a warm compress for 15-20 minutes in the evening to relax surrounding muscles.'
    ]
  },
  red: {
    title: 'High Risk — Consult a Medical Professional',
    message: 'Your assessment suggests significant knee concern. We highly recommend consulting a physician, physiotherapist, or orthopedic specialist for a professional diagnosis and care plan.',
    recommendations: [
      'Schedule a consultation with your General Practitioner or a licensed Physiotherapist.',
      'Temporarily avoid high-impact activities (running, jumping, heavy lifting) to prevent further strain.',
      'Use cold therapy (ice packs wrapped in a towel) for 15 minutes to manage acute pain or swelling.',
      'Ask your doctor about structured, clinical knee rehabilitation programs.'
    ]
  }
};

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

  const handleBack = () => {
    router.push('/assess');
  };

  return (
    <div className="flex-1 flex flex-col justify-center py-12 px-4 md:px-6 max-w-2xl mx-auto w-full space-y-8">
      {/* Zone Card showing Assessment Results */}
      <ZoneCard
        zone={validZone}
        title={content.title}
        score={score}
        painScore={painScore}
        funcScore={funcScore}
      />

      {/* Message and Recommendations */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <p className="text-xl leading-relaxed font-bold text-slate-800">
          {content.message}
        </p>

        <div className="space-y-4">
          <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-wider">
            Personalized Recommendations:
          </h3>
          <ul className="space-y-4">
            {content.recommendations.map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-lg text-slate-850">
                <span className="flex items-center justify-center font-bold text-base rounded-full min-w-[28px] min-h-[28px] h-7 w-7 mt-0.5 bg-teal-50 text-teal-700 border border-teal-200">
                  {index + 1}
                </span>
                <span className="font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Conditional Callouts based on Zone */}
      {validZone === 'amber' && (
        <div className="bg-amber-50/50 p-6 rounded-3xl border border-amber-200 text-center space-y-2 shadow-sm">
          <h4 className="text-xl font-bold text-amber-900">📅 Recommended Reassessment</h4>
          <p className="text-lg text-slate-700 font-medium leading-relaxed">
            Knee joint strain is dynamic. We highly recommend reassessing your knee using this self-check tool in <strong>1 week</strong> to track updates or changes in your score.
          </p>
        </div>
      )}

      {validZone === 'red' && (
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
      )}

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
        <Button
          href={assessmentId ? `/opt-in/${assessmentId}` : '/opt-in'}
          variant="primary"
          size="lg"
          fullWidth
        >
          Track My Score &amp; Improve My Knee ➔
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
          className="rounded-2xl text-slate-600 border border-slate-300 hover:bg-slate-50"
        >
          ← Retake assessment
        </Button>
      </div>
    </div>
  );
}

export default function DynamicResultPage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="animate-spin h-10 w-10 text-teal-600 border-4 border-current border-t-transparent rounded-full" />
      </div>
    }>
      <DynamicResultContent />
    </Suspense>
  );
}
