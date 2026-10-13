/**
 * Rangoli-style mandala drawn in the accent colour. Purely decorative: sits
 * behind the header at low opacity and turns very slowly.
 */
export function Mandala({ className = "" }: { className?: string }) {
  const petals = Array.from({ length: 16 }, (_, i) => i * 22.5);
  const dots = Array.from({ length: 32 }, (_, i) => i * 11.25);
  return (
    <svg aria-hidden viewBox="-100 -100 200 200" className={`text-accent ${className}`} fill="none" stroke="currentColor">
      <circle r="96" strokeWidth="0.6" />
      <circle r="88" strokeWidth="0.4" strokeDasharray="2 3" />
      {dots.map((a) => (
        <circle key={a} cx="0" cy="-80" r="1.6" fill="currentColor" stroke="none" transform={`rotate(${a})`} />
      ))}
      {petals.map((a) => (
        <path key={a} d="M0-72C9-56 9-40 0-26C-9-40-9-56 0-72Z" strokeWidth="0.8" transform={`rotate(${a})`} />
      ))}
      {petals.map((a) => (
        <path key={a} d="M0-50C5-42 5-34 0-28C-5-34-5-42 0-50Z" strokeWidth="0.6" transform={`rotate(${a + 11.25})`} />
      ))}
      <circle r="24" strokeWidth="0.8" />
      <circle r="16" strokeWidth="0.5" strokeDasharray="1.5 2.5" />
      <circle r="6" fill="currentColor" stroke="none" />
    </svg>
  );
}
