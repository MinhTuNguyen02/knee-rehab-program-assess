import React from 'react';

interface ZoneCardProps {
  zone: 'green' | 'amber' | 'red';
  title: string;
  message: string;
  recommendations: string[];
  score?: number;
}

export const ZoneCard: React.FC<ZoneCardProps> = ({
  zone,
  title,
  message,
  recommendations,
  score,
}) => {
  const zoneStyles = {
    green: {
      bg: 'bg-emerald-50/80 border-krp-green/30 text-emerald-950',
      badge: 'bg-krp-green text-white font-extrabold',
      bullet: 'text-emerald-700 bg-emerald-100/80 border border-krp-green/30',
      scoreText: 'text-emerald-800 bg-emerald-100/40 border-krp-green/30'
    },
    amber: {
      bg: 'bg-amber-50/85 border-krp-amber/40 text-amber-950',
      badge: 'bg-krp-amber text-amber-950 font-extrabold',
      bullet: 'text-amber-850 bg-amber-100/80 border border-krp-amber/40',
      scoreText: 'text-amber-850 bg-amber-100/40 border-krp-amber/40'
    },
    red: {
      bg: 'bg-red-50/80 border-krp-red/30 text-red-950',
      badge: 'bg-krp-red text-white font-extrabold',
      bullet: 'text-red-700 bg-red-100/80 border border-krp-red/30',
      scoreText: 'text-red-800 bg-red-100/40 border-krp-red/30'
    },
  };

  const currentStyle = zoneStyles[zone];

  return (
    <div className={`p-8 rounded-3xl border-2 shadow-sm space-y-6 ${currentStyle.bg} transition-all duration-300 ease-out`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-current/10 pb-4">
        <div className="flex items-center gap-4">
          <span className={`text-base font-extrabold px-4 py-2 rounded-full uppercase tracking-wider ${currentStyle.badge}`}>
            {zone} Zone
          </span>
          <h2 className="text-3xl font-black tracking-tight leading-tight">{title}</h2>
        </div>
        {score !== undefined && (
          <div className={`flex items-center gap-2 self-start sm:self-center px-4 py-2 rounded-2xl border font-black text-2xl ${currentStyle.scoreText}`}>
            <span>Score:</span>
            <span className="text-3xl">{score}</span>
          </div>
        )}
      </div>

      <p className="text-xl leading-relaxed font-bold">
        {message}
      </p>

      <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-inner space-y-4">
        <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-wider">
          Personalized Recommendations:
        </h3>
        <ul className="space-y-4">
          {recommendations.map((item, index) => (
            <li key={index} className="flex items-start gap-4 text-lg text-slate-850">
              <span className={`flex items-center justify-center font-bold text-base rounded-full min-w-[28px] min-h-[28px] h-7 w-7 mt-0.5 ${currentStyle.bullet}`}>
                {index + 1}
              </span>
              <span className="font-medium leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};