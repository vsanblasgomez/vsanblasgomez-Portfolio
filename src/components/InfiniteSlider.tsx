import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, type MotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [trackRef, trackBounds] = useMeasure();
  const translation: MotionValue<number> = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const positionRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const trackSize = direction === 'horizontal' ? trackBounds.width : trackBounds.height;
  const loopDistance = trackSize > 0 ? trackSize / 2 : 0;

  useEffect(() => {
    if (loopDistance === 0) return;

    const effectiveDuration = isHovered && durationOnHover ? durationOnHover : duration;
    const speed = loopDistance / (effectiveDuration * 1000);
    const directionMul = reverse ? 1 : -1;

    let rafId: number;
    const tick = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      } else {
        const delta = time - lastTimeRef.current;
        lastTimeRef.current = time;
        positionRef.current += directionMul * speed * delta;
        positionRef.current =
          ((positionRef.current % loopDistance) + loopDistance) % loopDistance;
        translation.set(positionRef.current * (reverse ? 1 : -1));
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      lastTimeRef.current = null;
    };
  }, [translation, loopDistance, duration, durationOnHover, isHovered, reverse]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => setIsHovered(true),
        onHoverEnd: () => setIsHovered(false),
      }
    : {};

  return (
    <div className={className ? `infinite-slider ${className}` : 'infinite-slider'}>
      <motion.div
        ref={trackRef}
        className="infinite-slider__track"
        style={{
          ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
