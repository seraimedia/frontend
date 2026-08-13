/**
 * SERAI's signature animation: a saffron monitor line that draws the wordmark.
 * Based on the supplied Lifeline v2 motion study.
 */
export function SeraiLine({ className = "" }: { className?: string }) {
  const path =
    "M 30,100 L 140,100 L 172.0,28.0 L 166.8,28.2 L 163.2,29.5 L 161.0,31.6 L 159.9,34.5 L 159.8,38.1 L 160.5,42.2 L 161.7,46.7 L 163.4,51.6 L 165.3,56.8 L 167.2,62.0 L 169.0,67.2 L 170.4,72.4 L 171.3,77.3 L 171.4,81.8 L 170.6,85.9 L 168.7,89.5 L 165.4,92.4 L 160.7,94.5 L 154.3,95.8 L 146.0,96.0 L 146.0,100 L 210,100 L 210.0,26.0 L 210.0,100.0 L 246.0,100.0 L 210.0,100.0 L 210.0,63.0 L 237.0,63.0 L 210.0,63.0 L 210.0,26.0 L 246.0,26.0 L 246.0,100 L 276,100 L 276.0,100.0 L 276.0,26.0 L 298.8,26.0 L 298.8,26.0 L 305.5,27.5 L 311.1,31.6 L 314.4,37.6 L 314.9,44.5 L 312.6,51.0 L 307.7,55.9 L 301.3,58.4 L 294.4,58.0 L 288.3,54.8 L 276.0,58.6 L 289.3,58.6 L 314.0,100.0 L 314.0,100 L 344,100 L 344.0,100.0 L 364.0,26.0 L 384.0,100.0 L 372.8,74.8 L 355.2,74.8 L 355.2,100 L 414,100 L 414.0,26.0 L 430.0,26.0 L 422.0,26.0 L 422.0,100.0 L 414.0,100.0 L 430.0,100.0 L 430.0,100 L 600,100";

  return (
    <div className={`serai-lifeline w-full select-none ${className}`} role="img" aria-label="SERAI Media lifeline animation">
      <svg viewBox="0 0 630 180" aria-hidden="true">
        <path className="serai-lifeline__path" d={path} />
        <text className="serai-lifeline__label" x="470" y="130">MEDIA</text>
        <circle className="serai-lifeline__dot" r="6" />
      </svg>
    </div>
  );
}
