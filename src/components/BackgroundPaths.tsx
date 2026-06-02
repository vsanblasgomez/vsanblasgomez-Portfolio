import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface BackgroundPathsProps {
  className?: string;
  pathCount?: number;
  layers?: 1 | 2;
  colorClassName?: string;
}

interface PathDef {
  id: number;
  d: string;
  width: number;
  opacity: number;
}

function buildPaths(count: number, position: number): PathDef[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.035,
    opacity: 0.08 + i * 0.022,
  }));
}

function FloatingPaths({
  position,
  count,
  reduced,
}: {
  position: number;
  count: number;
  reduced: boolean;
}) {
  const paths = useMemo(() => buildPaths(count, position), [count, position]);

  return (
    <div className="paths-layer">
      <svg
        className="paths-svg"
        viewBox="0 0 696 316"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="paths-glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.9" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {paths.map((p) => (
          <motion.path
            key={p.id}
            d={p.d}
            stroke="url(#paths-glow)"
            strokeWidth={p.width}
            strokeOpacity={p.opacity}
            strokeLinecap="round"
            initial={{ pathLength: 0.25, opacity: reduced ? p.opacity : 0.4 }}
            animate={
              reduced
                ? { pathLength: 1, opacity: p.opacity }
                : {
                    pathLength: [0.25, 1, 0.4, 1],
                    pathOffset: [0, 1, 0.5, 0],
                    opacity: [0.25, 0.85, 0.4, 0.7],
                  }
            }
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: 22 + (p.id % 7) * 2.4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                    times: [0, 0.4, 0.7, 1],
                  }
            }
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  className,
  pathCount = 36,
  layers = 2,
  colorClassName,
}: BackgroundPathsProps) {
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div
      className={`bg-paths ${colorClassName ?? ''} ${className ?? ''}`.trim()}
      aria-hidden="true"
    >
      <div className="bg-paths__stack">
        <FloatingPaths position={1} count={pathCount} reduced={reduceMotion} />
        {layers === 2 && (
          <FloatingPaths
            position={-1}
            count={pathCount}
            reduced={reduceMotion}
          />
        )}
      </div>
      <div className="bg-paths__grid" />
      <div className="bg-paths__vignette" />
    </div>
  );
}
