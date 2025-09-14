interface FeatureIconProps {
  shape: 'circle' | 'square' | 'hexagon';
  gradientId: string;
  gradientColors: { start: string; end: string };
  className?: string;
}

export function FeatureIcon({ shape, gradientId, gradientColors, className }: FeatureIconProps) {
  const getPath = () => {
    switch (shape) {
      case 'circle':
        return <circle cx="50" cy="50" r="45" />;
      case 'square':
        return <rect x="5" y="5" width="90" height="90" rx="15" />;
      case 'hexagon':
        return <path d="M50 5 L95 27.5 L95 72.5 L50 95 L5 72.5 L5 27.5 Z" />;
    }
  };

  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradientColors.start} />
          <stop offset="100%" stopColor={gradientColors.end} />
        </linearGradient>
      </defs>
      <g
        fill={`url(#${gradientId})`}
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        style={{
          filter: `drop-shadow(0 0 10px ${gradientColors.start})`,
        }}
      >
        {getPath()}
      </g>
    </svg>
  );
}
