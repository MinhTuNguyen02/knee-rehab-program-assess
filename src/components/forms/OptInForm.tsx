'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { submitOptIn } from '@/lib/api';
import { OptInFormData } from '@/types';
import { Button } from '../ui/Button';
import toast from 'react-hot-toast';

interface OptInFormProps {
  assessmentId?: string;
}

export const OptInForm: React.FC<OptInFormProps> = ({ assessmentId }) => {
  const router = useRouter();
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
    try {
      await submitOptIn(data, assessmentId);
      toast.success('Successfully submitted!');
      router.push('/thank-you');
    } catch (err: any) {
      console.error('Opt-in submission error:', err);
      toast.error(err.message || 'Something went wrong. Please check your inputs and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.015)] space-y-6 transition-all duration-200 hover:shadow-[0_6px_30px_rgba(0,122,135,0.03)]">
      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
          Enter Your Details to Begin Setup
        </h3>
        <p className="text-sm md:text-base text-slate-450 font-semibold leading-relaxed">
          Provide your clinical markers and basic contact details. Your information is protected under standard security privacy protocols.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-black text-slate-600 block uppercase tracking-wider">
              First Name:
            </label>
            <input
              id="firstName"
              {...register('firstName')}
              required
              type="text"
              placeholder="e.g. John"
              className="w-full min-h-[48px] px-4 py-3 text-base border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-teal-100 outline-none bg-slate-50 focus:bg-white transition duration-200 font-bold placeholder-slate-400"
              aria-invalid={errors.firstName ? 'true' : 'false'}
            />
            {errors.firstName && (
              <p className="text-red-600 font-black text-sm mt-1" role="alert">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-black text-slate-600 block uppercase tracking-wider">
              Last Name:
            </label>
            <input
              id="lastName"
              {...register('lastName')}
              required
              type="text"
              placeholder="e.g. Doe"
              className="w-full min-h-[48px] px-4 py-3 text-base border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-teal-100 outline-none bg-slate-50 focus:bg-white transition duration-200 font-bold placeholder-slate-400"
              aria-invalid={errors.lastName ? 'true' : 'false'}
            />
            {errors.lastName && (
              <p className="text-red-600 font-black text-sm mt-1" role="alert">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email — full width */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-black text-slate-600 block uppercase tracking-wider">
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
            placeholder="e.g. john.doe@example.com"
            className="w-full min-h-[48px] px-4 py-3 text-base border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-teal-100 outline-none bg-slate-50 focus:bg-white transition duration-200 font-bold placeholder-slate-400"
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <p className="text-red-600 font-black text-sm mt-1" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Mobile Phone — full width with country selector */}
        <div className="space-y-2">
          <label htmlFor="mobile" className="text-sm font-black text-slate-600 block uppercase tracking-wider">
            Mobile Number:
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
                placeholder="Enter mobile phone number"
                value={value}
                onChange={(val) => onChange(val || '')}
                id="mobile"
                className="phone-input-custom font-bold"
              />
            )}
          />
          {errors.mobile && (
            <p className="text-red-600 font-black text-sm mt-1" role="alert">
              {errors.mobile.message}
            </p>
          )}
        </div>

        <div className={`grid grid-cols-1 ${assessmentId ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
          {/* Age */}
          <div className="space-y-2">
            <label htmlFor="age" className="text-sm font-black text-slate-600 block uppercase tracking-wider">
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
              placeholder="e.g. 45"
              className="w-full h-[52px] px-4 py-3 text-base border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-teal-100 outline-none bg-slate-50 focus:bg-white transition duration-200 font-bold placeholder-slate-400"
              aria-invalid={errors.age ? 'true' : 'false'}
            />
            {errors.age && (
              <p className="text-red-655 font-black text-sm mt-1" role="alert">
                {errors.age.message}
              </p>
            )}
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <label htmlFor="gender" className="text-sm font-black text-slate-600 block uppercase tracking-wider">
              Gender:
            </label>
            <select
              id="gender"
              {...register('gender', { required: 'Please select your gender' })}
              className="w-full h-[52px] px-4 py-3 text-base border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-teal-100 outline-none bg-slate-50 focus:bg-white transition duration-205 cursor-pointer font-bold placeholder-slate-400"
              aria-invalid={errors.gender ? 'true' : 'false'}
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-655 font-black text-sm mt-1" role="alert">
                {errors.gender.message}
              </p>
            )}
          </div>

          {/* Knee Side (Only shown if coming from an assessment) */}
          {assessmentId && (
            <div className="space-y-2">
              <label htmlFor="kneeSide" className="text-sm font-black text-slate-600 block uppercase tracking-wider">
                Affected Knee Side:
              </label>
              <select
                id="kneeSide"
                {...register('kneeSide')}
                className="w-full h-[52px] px-4 py-3 text-base border-2 border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-teal-100 outline-none bg-slate-50 focus:bg-white transition duration-205 cursor-pointer font-bold placeholder-slate-400"
                aria-invalid={errors.kneeSide ? 'true' : 'false'}
              >
                <option value="">Select...</option>
                <option value="left">Left Knee</option>
                <option value="right">Right Knee</option>
                <option value="both">Both Knees</option>
              </select>
              {errors.kneeSide && (
                <p className="text-red-655 font-black text-sm mt-1" role="alert">
                  {errors.kneeSide.message}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Notification Preferences */}
        <div className="space-y-4 bg-slate-50/60 p-6 rounded-2xl border border-slate-200/50">
          <span className="text-sm font-black text-slate-700 block uppercase tracking-wider">
            Rehabilitation Notifications (Optional)
          </span>
          <div className="flex flex-col gap-4">
            <label className="flex items-start gap-3.5 text-base font-semibold text-slate-600 cursor-pointer min-h-[36px]">
              <input
                type="checkbox"
                {...register('notificationPrefs.followUpKRP')}
                className="w-5.5 h-5.5 border-2 border-slate-300 rounded accent-primary mt-0.5 focus-visible:ring-4 focus-visible:ring-teal-500/20 outline-none"
              />
              <span className="leading-snug select-none">Send me a follow-up KRP assessment scorecard in 2 weeks</span>
            </label>
            <label className="flex items-start gap-3.5 text-base font-semibold text-slate-600 cursor-pointer min-h-[36px]">
              <input
                type="checkbox"
                {...register('notificationPrefs.kneeGuidance')}
                className="w-5.5 h-5.5 border-2 border-slate-300 rounded accent-primary mt-0.5 focus-visible:ring-4 focus-visible:ring-teal-500/20 outline-none"
              />
              <span className="leading-snug select-none">Send me custom rehab tips and joint care guides</span>
            </label>
            <label className="flex items-start gap-3.5 text-base font-semibold text-slate-600 cursor-pointer min-h-[36px]">
              <input
                type="checkbox"
                {...register('notificationPrefs.reassessReminder')}
                className="w-5.5 h-5.5 border-2 border-slate-300 rounded accent-primary mt-0.5 focus-visible:ring-4 focus-visible:ring-teal-500/20 outline-none"
              />
              <span className="leading-snug select-none">Notify me when it may be time to reassess my symptoms</span>
            </label>
          </div>
        </div>

        {/* Consent Accepted */}
        <div className="space-y-2">
          <label className="flex items-start gap-3.5 text-base font-semibold text-slate-600 cursor-pointer">
            <input
              id="consentAccepted"
              type="checkbox"
              {...register('consentAccepted', { required: 'You must accept the data consent terms to proceed' })}
              className="w-5.5 h-5.5 border-2 border-slate-300 rounded accent-primary mt-0.5 focus-visible:ring-4 focus-visible:ring-teal-500/20 outline-none"
            />
            <span className="leading-snug select-none text-slate-500 font-semibold">
              I consent to the collection of my joint assessment scores and details in alignment with the Privacy Policy.
            </span>
          </label>
          {errors.consentAccepted && (
            <p className="text-red-655 font-black text-sm mt-1" role="alert">
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
            Activate My Recovery Program
          </Button>

          {assessmentId && (
            <Button
              type="button"
              variant="secondary"
              size="md"
              fullWidth
              onClick={() => router.push('/thank-you')}
            >
              Skip Registration
            </Button>
          )}

          <Button
            type="button"
            variant="outline"
            size="sm"
            fullWidth
            onClick={() => router.back()}
            className="rounded-xl"
          >
            Back
          </Button>
        </div>
      </form>
    </div>
  );
};
