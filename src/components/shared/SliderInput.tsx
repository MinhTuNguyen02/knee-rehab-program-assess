import React from 'react';

interface SliderInputProps {
  id: string;
  questionNumber: string;
  questionText: React.ReactNode;
  subText: string;
  minLabel: string;
  maxLabel: string;
  value: number;
  onChange: (value: number) => void;
}

export const SliderInput: React.FC<SliderInputProps> = ({
  id,
  questionNumber,
  questionText,
  subText,
  minLabel,
  maxLabel,
  value,
  onChange,
}) => {
  // Calculate percentage for styling the selected portion of the slider track
  const percent = value * 10;

  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
      {/* Top Meta info */}
      <div className="space-y-2">
        <span className="text-sm font-extrabold text-[#007a87] tracking-wider uppercase block">
          {questionNumber}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-slate-850 leading-snug">
          {questionText}
        </h3>
        <p className="text-base text-slate-500 font-medium">
          {subText}
        </p>
      </div>

      {/* Slider Area */}
      <div className="space-y-3 pt-2">
        {/* Left / Right text labels above the slider bar */}
        <div className="flex justify-between text-base font-semibold text-slate-600">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>

        {/* The range input with dynamic background gradient fill */}
        <div className="relative flex items-center min-h-[48px]">
          <input
            id={id}
            type="range"
            min="0"
            max="10"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="accessible-slider w-full cursor-pointer focus-visible:ring-4 focus-visible:ring-teal-500/30"
            style={{
              background: `linear-gradient(to right, #007a87 0%, #007a87 ${percent}%, #e2e8f0 ${percent}%, #e2e8f0 100%)`
            }}
            aria-valuemin={0}
            aria-valuemax={10}
            aria-valuenow={value}
            aria-label={`${questionNumber}: ${questionText}`}
          />
        </div>

        {/* Interactive numbers 0-10 under the slider, aligned with spacing */}
        <div className="flex justify-between px-3 text-base select-none">
          {Array.from({ length: 11 }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onChange(i)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-base transition-all ${
                i === value
                  ? 'font-black text-[#007a87] text-lg bg-teal-50 border border-teal-200'
                  : 'font-bold text-slate-400 hover:text-slate-650'
              }`}
              aria-label={`Set value to ${i}`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};