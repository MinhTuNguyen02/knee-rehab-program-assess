'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SliderInput } from '@/components/shared/SliderInput';
import { Button } from '@/components/shared/Button';
import { submitAssessment } from '@/lib/api';

export default function AssessPage() {
  const [pain, setPain] = useState<number>(5);
  const [func, setFunc] = useState<number>(5);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setApiError(null);

    try {
      const res = await submitAssessment(pain, func);
      // Navigate to the respective result route with assessment id and score
      router.push(`/result/${res.zone}?id=${res.id}&score=${res.score}&pain=${res.pain}&func=${res.functionScore}`);
    } catch (err: any) {
      console.error('Submit assessment error:', err);
      setApiError(err.message || 'Failed to submit the assessment. Please check your network connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="flex-1 flex flex-col justify-center py-10 px-4 md:px-6 max-w-2xl mx-auto w-full space-y-8">
      {/* Step Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="h-1 w-6 bg-[#007a87] rounded-full"></span>
          <span className="text-sm font-extrabold text-[#007a87] uppercase tracking-wider">
            ASSESS YOUR KNEE
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          Understand Your Knee Symptoms
        </h1>
        <p className="text-lg text-slate-600 font-medium leading-relaxed">
          This quick assessment helps you better understand how your knee is affecting your pain and daily function and guides your next step.
        </p>
      </div>

      {apiError && (
        <div className="p-4 bg-red-50 border-2 border-red-500 text-red-900 rounded-xl font-bold text-lg" role="alert">
          ⚠️ {apiError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
          {/* Question 1: Pain */}
          <SliderInput
            id="pain-slider"
            questionNumber="QUESTION 1 — PAIN"
            questionText={
              <span>
                Over the past <strong className="font-extrabold text-slate-900">7 days</strong>, how much pain has your knee caused during your daily activities?
              </span>
            }
            subText="0 = no pain · 10 = worst pain imaginable"
            minLabel="No pain"
            maxLabel="Worst pain imaginable"
            value={pain}
            onChange={setPain}
          />

          {/* Question 2: Function */}
          <SliderInput
            id="func-slider"
            questionNumber="QUESTION 2 — FUNCTION"
            questionText={
              <span>
                Over the past <strong className="font-extrabold text-slate-900">7 days</strong>, how much has your knee limited your daily activities?
              </span>
            }
            subText="0 = no limitation · 10 = unable to perform daily activities"
            minLabel="Not affected"
            maxLabel="Unable to perform daily activities"
            value={func}
            onChange={setFunc}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            isLoading={isLoading}
            className="rounded-2xl"
          >
            View Your Result →
          </Button>

          <Button
            type="button"
            variant="outline"
            size="sm"
            fullWidth
            onClick={handleBack}
            className="rounded-2xl text-slate-600 border border-slate-300 hover:bg-slate-50"
          >
            ← BACK
          </Button>
        </div>
      </form>
    </div>
  );
}