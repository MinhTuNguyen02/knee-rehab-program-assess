import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 mt-auto border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        <div className="border-l-4 border-amber-500 bg-slate-800/50 p-6 rounded-r-xl space-y-2">
          <h4 className="text-lg font-bold text-amber-400 uppercase tracking-wider">
            Important Medical Disclaimer
          </h4>
          <p className="text-base leading-relaxed font-medium">
            This tool is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Do not disregard professional medical advice or delay in seeking it because of something you have read on this website.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-slate-800 gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-white">KneeRehab Program Assessment</span>
          </div>
          <p className="text-base text-slate-500">
            &copy; {new Date().getFullYear()} KneeRehab Program. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
