"use client";

import { useEffect, useTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex-1 flex items-center justify-center p-8 min-h-[100dvh] animate-fade-in-up">
      <div className="w-full max-w-md space-y-6 text-center bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 border border-red-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-black text-slate-900">
            Assessment System Interrupted
          </h2>
          <p className="text-sm font-semibold text-slate-500 leading-relaxed">
            {error.message || "An unexpected system error occurred during computation. Please try again."}
          </p>
        </div>

        <button
          onClick={() => startTransition(() => reset())}
          disabled={isPending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary hover:bg-primary-hover active:bg-primary-active px-6 py-3.5 text-base font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed select-none"
        >
          {isPending ? (
            <>
              <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Re-initiating...
            </>
          ) : (
            "Restart Assessment"
          )}
        </button>
      </div>
    </div>
  );
}
