import React from 'react';

interface ZoneCardProps {
  zone: 'green' | 'amber' | 'red';
  title: string;
  score?: number;
  painScore?: number;
  funcScore?: number;
}

export const ZoneCard: React.FC<ZoneCardProps> = ({
  zone,
  title,
  score,
  painScore,
  funcScore,
}) => {
  const zoneStyles = {
    green: {
      bg: 'bg-emerald-50/80 border-krp-green/30 text-emerald-950',
      badge: 'bg-krp-green text-white font-extrabold',
      scoreText: 'text-emerald-800 bg-emerald-100/40 border-krp-green/30',
      shadow: 'shadow-[0_8px_30px_rgba(16,185,129,0.3)]'
    },
    amber: {
      bg: 'bg-amber-50/85 border-krp-amber/40 text-amber-950',
      badge: 'bg-krp-amber text-amber-950 font-extrabold',
      scoreText: 'text-amber-850 bg-amber-100/40 border-krp-amber/40',
      shadow: 'shadow-[0_8px_30px_rgba(245,158,11,0.3)]'
    },
    red: {
      bg: 'bg-red-50/80 border-krp-red/30 text-red-950',
      badge: 'bg-krp-red text-white font-extrabold',
      scoreText: 'text-red-800 bg-red-100/40 border-krp-red/30',
      shadow: 'shadow-[0_8px_30px_rgba(239,68,68,0.3)]'
    },
  };

  const currentStyle = zoneStyles[zone];
  const displayScore = score !== undefined ? (score > 0 ? `+${score}` : score.toString()) : undefined;

  return (
    <div className={`p-8 rounded-3xl border-2 space-y-8 ${currentStyle.bg} transition-all duration-300 ease-out`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className={`text-sm md:text-base font-extrabold px-4 py-2 rounded-full uppercase tracking-wider ${currentStyle.badge}`}>
              {zone} Zone
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">{title}</h2>
        </div>
        
        {displayScore !== undefined && (
          <div className="flex flex-col items-center justify-center">
            <div className={`flex flex-col items-center justify-center h-32 w-32 md:h-40 md:w-40 rounded-full border-4 shadow-xl ${currentStyle.scoreText} bg-white`}>
              <span className="text-sm md:text-base font-bold uppercase tracking-widest text-slate-500 mb-1">Total</span>
              <span className="text-5xl md:text-7xl font-black tracking-tighter">{displayScore}</span>
            </div>
          </div>
        )}
      </div>

      {(painScore !== undefined || funcScore !== undefined) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-current/10">
          {painScore !== undefined && (
            <div className={`flex items-center justify-between bg-white px-6 py-4 rounded-2xl border-2 border-transparent ${currentStyle.shadow}`}>
              <span className="text-lg font-bold text-slate-700">Pain Score</span>
              <span className={`text-2xl font-black px-4 py-1 rounded-xl ${currentStyle.scoreText}`}>
                {painScore}
              </span>
            </div>
          )}
          {funcScore !== undefined && (
            <div className={`flex items-center justify-between bg-white px-6 py-4 rounded-2xl border-2 border-transparent ${currentStyle.shadow}`}>
              <span className="text-lg font-bold text-slate-700">Functional Score</span>
              <span className={`text-2xl font-black px-4 py-1 rounded-xl ${currentStyle.scoreText}`}>
                {funcScore}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};