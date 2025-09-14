import { cn } from "@/lib/utils"

export function StalliqLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 40"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-foreground", className)}
      aria-label="Stalliq Logo"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))' }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent-magenta))' }} />
        </linearGradient>
      </defs>
      <g fontFamily='"Space Grotesk", sans-serif' fontWeight="700" fontSize="32">
        <text x="0" y="30" fill="url(#logoGradient)">
          Stalliq
        </text>
      </g>
    </svg>
  );
}
