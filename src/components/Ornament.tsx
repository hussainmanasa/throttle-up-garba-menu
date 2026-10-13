/** Hairline – crossed dandiya sticks – hairline divider in the accent colour. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex items-center justify-center gap-3 text-accent ${className}`}>
      <span className="h-px w-12 bg-current opacity-60" />
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeLinecap="round">
        <path d="M5 19 19 5M5 5l14 14" strokeWidth="1.75" />
        <path d="M4 20l2-2M20 20l-2-2" strokeWidth="3" />
      </svg>
      <span className="h-px w-12 bg-current opacity-60" />
    </div>
  );
}
