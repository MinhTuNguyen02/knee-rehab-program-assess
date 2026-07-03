'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { submitOptIn } from '@/lib/api';
import { OptInFormData } from '@/types';
import { Button } from './Button';

interface OptInFormProps {
  assessmentId?: string;
}

export const OptInForm: React.FC<OptInFormProps> = ({ assessmentId }) => {
  const router = useRouter();
  const [apiError, setApiError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<OptInFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      age: undefined,
      gender: '',
      kneeSide: '',
      consentAccepted: false,
      notificationPrefs: {
        followUpKRP: false,
        kneeGuidance: false,
        reassessReminder: false,
      },
    },
  });

  const onSubmit = async (data: OptInFormData) => {
    setIsSubmitting(true);
    setApiError(null);
    try {
      await submitOptIn(data, assessmentId);
      router.push('/thank-you');
    } catch (err: any) {
      console.error('Opt-in submission error:', err);
      setApiError(err.message || 'Something went wrong. Please check your inputs and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-black text-slate-900 leading-tight">
          Get Your Free Personalized Rehab Plan
        </h3>
        <p className="text-lg text-slate-650 font-medium leading-relaxed">
          Our team of specialists will send you a tailored video exercise guide. Enter your details below.
        </p>
      </div>

      {apiError && (
        <div className="p-4 bg-red-50 border-2 border-red-500 text-red-900 rounded-xl font-bold text-lg" role="alert">
          {apiError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-lg font-bold text-slate-800 block">
              First Name:
            </label>
            <input
              id="firstName"
              {...register('firstName')}
              required
              type="text"
              placeholder="John"
              className="w-full min-h-[48px] px-4 py-3 text-lg border-2 border-slate-200 rounded-xl focus:border-[#007a87] focus:ring-2 focus:ring-teal-100 outline-none bg-slate-50 focus:bg-white transition"
              aria-invalid={errors.firstName ? 'true' : 'false'}
            />
            {errors.firstName && (
              <p className="text-red-600 font-bold text-base mt-1" role="alert">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-lg font-bold text-slate-800 block">
              Last Name:
            </label>
            <input
              id="lastName"
              {...register('lastName')}
              required
              type="text"
              placeholder="Doe"
              className="w-full min-h-[48px] px-4 py-3 text-lg border-2 border-slate-200 rounded-xl focus:border-[#007a87] focus:ring-2 focus:ring-teal-100 outline-none bg-slate-50 focus:bg-white transition"
              aria-invalid={errors.lastName ? 'true' : 'false'}
            />
            {errors.lastName && (
              <p className="text-red-600 font-bold text-base mt-1" role="alert">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email — full width */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-lg font-bold text-slate-800 block">
            Email Address:
          </label>
          <input
            id="email"
            {...register('email', {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Please enter a valid email address',
              },
            })}
            required
            type="email"
            placeholder="john.doe@example.com"
            className="w-full min-h-[48px] px-4 py-3 text-lg border-2 border-slate-200 rounded-xl focus:border-[#007a87] focus:ring-2 focus:ring-teal-100 outline-none bg-slate-50 focus:bg-white transition"
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <p className="text-red-600 font-bold text-base mt-1" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Mobile Phone — full width with country selector */}
        <div className="space-y-2">
          <label htmlFor="mobile" className="text-lg font-bold text-slate-800 block">
            Mobile:
          </label>
          <Controller
            name="mobile"
            control={control}
            rules={{
              required: 'Please enter your mobile phone number',
              validate: (value) =>
                !value || isValidPhoneNumber(value) || 'Please enter a valid phone number',
            }}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                international
                defaultCountry="AU"
                placeholder="Enter phone number"
                value={value}
                onChange={(val) => onChange(val || '')}
                id="mobile"
                className="phone-input-custom"
              />
            )}
          />
          {errors.mobile && (
            <p className="text-red-600 font-bold text-base mt-1" role="alert">
              {errors.mobile.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Age */}
          <div className="space-y-2">
            <label htmlFor="age" className="text-lg font-bold text-slate-800 block">
              Age:
            </label>
            <input
              id="age"
              {...register('age', {
                min: { value: 1, message: 'Age must be at least 1' },
                max: { value: 120, message: 'Age cannot exceed 120' },
                valueAsNumber: true,
              })}
              min={1}
              max={120}
              required
              type="number"
              placeholder="Year"
              className="w-full h-[56px] px-4 py-3 text-lg border-2 border-slate-200 rounded-xl focus:border-[#007a87] focus:ring-2 focus:ring-teal-100 outline-none bg-slate-50 focus:bg-white transition"
              aria-invalid={errors.age ? 'true' : 'false'}
            />
            {errors.age && (
              <p className="text-red-650 font-bold text-base mt-1" role="alert">
                {errors.age.message}
              </p>
            )}
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label htmlFor="gender" className="text-lg font-bold text-slate-800 block">
              Gender:
            </label>
            <select
              id="gender"
              {...register('gender', { required: 'Please select your gender' })}
              className="w-full h-[56px] px-4 py-3 text-lg border-2 border-slate-200 rounded-xl focus:border-[#007a87] focus:ring-2 focus:ring-teal-100 outline-none bg-slate-50 focus:bg-white transition cursor-pointer"
              aria-invalid={errors.gender ? 'true' : 'false'}
            >
              <option value="">-- Select --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-650 font-bold text-base mt-1" role="alert">
                {errors.gender.message}
              </p>
            )}
          </div>

          {/* Knee Side */}
          <div className="space-y-2">
            <label htmlFor="kneeSide" className="text-lg font-bold text-slate-800 block">
              Knee Side:
            </label>
            <select
              id="kneeSide"
              {...register('kneeSide')}
              className="w-full h-[56px] px-4 py-3 text-lg border-2 border-slate-200 rounded-xl focus:border-[#007a87] focus:ring-2 focus:ring-teal-100 outline-none bg-slate-50 focus:bg-white transition cursor-pointer"
              aria-invalid={errors.kneeSide ? 'true' : 'false'}
            >
              <option value="">-- Select --</option>
              <option value="left">Left Knee</option>
              <option value="right">Right Knee</option>
              <option value="both">Both Knees</option>
            </select>
            {errors.kneeSide && (
              <p className="text-red-650 font-bold text-base mt-1" role="alert">
                {errors.kneeSide.message}
              </p>
            )}
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <span className="text-lg font-bold text-slate-800 block">
            Notifications (optional)
          </span>
          <div className="flex flex-col gap-4">
            <label className="flex items-start gap-3 text-lg font-medium text-slate-700 cursor-pointer min-h-[48px]">
              <input
                type="checkbox"
                {...register('notificationPrefs.followUpKRP')}
                className="w-6 h-6 border-2 border-slate-400 rounded accent-[#007a87] mt-1 focus-visible:ring-4 focus-visible:ring-teal-500/30 outline-none"
              />
              <span className="leading-snug select-none">Send me a follow-up KRP score in 2 weeks</span>
            </label>
            <label className="flex items-start gap-3 text-lg font-medium text-slate-700 cursor-pointer min-h-[48px]">
              <input
                type="checkbox"
                {...register('notificationPrefs.kneeGuidance')}
                className="w-6 h-6 border-2 border-slate-400 rounded accent-[#007a87] mt-1 focus-visible:ring-4 focus-visible:ring-teal-500/30 outline-none"
              />
              <span className="leading-snug select-none">Send me guidance to help improve my knee</span>
            </label>
            <label className="flex items-start gap-3 text-lg font-medium text-slate-700 cursor-pointer min-h-[48px]">
              <input
                type="checkbox"
                {...register('notificationPrefs.reassessReminder')}
                className="w-6 h-6 border-2 border-slate-400 rounded accent-[#007a87] mt-1 focus-visible:ring-4 focus-visible:ring-teal-500/30 outline-none"
              />
              <span className="leading-snug select-none">Notify me when it may be helpful to reassess my symptoms</span>
            </label>
          </div>
        </div>

        {/* Consent Accepted */}
        <div className="space-y-2">
          <label className="flex items-start gap-3 text-lg font-medium text-slate-700 cursor-pointer">
            <input
              id="consentAccepted"
              type="checkbox"
              {...register('consentAccepted', { required: 'You must accept the terms to proceed' })}
              className="w-6 h-6 border-2 border-slate-400 rounded accent-[#007a87] mt-1 focus-visible:ring-4 focus-visible:ring-teal-500/30 outline-none"
            />
            <span className="leading-snug select-none text-slate-650 font-medium">
              I consent to the collection of my knee assessment data and agree to the Terms of Service and Privacy Policy.
            </span>
          </label>
          {errors.consentAccepted && (
            <p className="text-red-600 font-bold text-base mt-1" role="alert">
              {errors.consentAccepted.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4 pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            isLoading={isSubmitting}
          >
            Submit & Receive My Program ➔
          </Button>

          {assessmentId && (
            <Button
              type="button"
              variant="secondary"
              size="md"
              fullWidth
              onClick={() => router.push('/thank-you')}
            >
              Skip for now
            </Button>
          )}

          <Button
            type="button"
            variant="outline"
            size="sm"
            fullWidth
            onClick={() => router.back()}
            className="rounded-2xl text-slate-600 border border-slate-300 hover:bg-slate-50"
          >
            ← BACK
          </Button>
        </div>
      </form>
    </div>
  );
};
