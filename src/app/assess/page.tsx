'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SliderInput } from '@/components/ui/SliderInput';
import { Button } from '@/components/ui/Button';
import { submitAssessment } from '@/lib/api';

export default function AssessmentPage() {
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
    <div className="flex-1 flex flex-col justify-center py-12 px-4 md:px-8 max-w-2xl mx-auto w-full space-y-10 animate-fade-in-up">
      {/* Step Header */}
      <div className="space-y-4 text-left">
        <div className="flex items-center gap-2.5">
          <span className="h-1 w-6 bg-primary rounded-full"></span>
          <span className="text-xs font-black text-primary uppercase tracking-widest">
            Knee Symptom Evaluation
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          Quantify Your Current Joint Condition
        </h1>
        <p className="text-base md:text-lg text-slate-500 font-semibold leading-relaxed">
          Provide information regarding your knee sensations and active mobility over the last week. Your data will be calculated against clinical safety threshold metrics.
        </p>
      </div>

      {apiError && (
        <div className="p-4.5 bg-red-50 border border-red-200 text-red-900 rounded-2xl font-bold text-base flex items-start gap-2.5" role="alert">
          <svg className="w-6 h-6 text-red-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{apiError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
          {/* Question 1: Pain */}
          <SliderInput
            id="pain-slider"
            questionNumber="Question 1 — Pain Severity"
            questionText={
              <span>
                Over the past <strong className="font-extrabold text-slate-900">7 days</strong>, how much pain has your knee caused during daily dynamic movements?
              </span>
            }
            subText="0 = absolute comfort · 10 = extreme pain trigger"
            minLabel="No pain"
            maxLabel="Severe pain"
            value={pain}
            onChange={setPain}
          />

          {/* Question 2: Function */}
          <SliderInput
            id="func-slider"
            questionNumber="Question 2 — Functional Restriction"
            questionText={
              <span>
                Over the past <strong className="font-extrabold text-slate-900">7 days</strong>, to what degree has your knee restricted typical daily activities?
              </span>
            }
            subText="0 = no restriction · 10 = complete loss of action"
            minLabel="Full function"
            maxLabel="Unable to move"
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
            className="rounded-2xl shadow-md"
          >
            Calculate My Knee Score
          </Button>

          <Button
            type="button"
            variant="outline"
            size="sm"
            fullWidth
            onClick={handleBack}
            className="rounded-xl"
          >
            Back to Home
          </Button>
        </div>
      </form>
    </div>
  );
}