import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CarouselCopy = {
  prev: string;
  next: string;
  slide: (n: number, total: number) => string;
};

type ProjectCarouselProps = {
  images: string[];
  alt: string;
  copy: CarouselCopy;
};

const SWIPE_THRESHOLD = 40;
const EASE = [0.22, 0.61, 0.36, 1] as const;

export function ProjectCarousel({ images, alt, copy }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const total = images.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const goTo = useCallback(
    (next: number, dir: 1 | -1) => {
      setDirection(dir);
      setIndex(((next % total) + total) % total);
    },
    [total]
  );

  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      }
    };
    el.addEventListener('keydown', handler);
    return () => el.removeEventListener('keydown', handler);
  }, [prev, next]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null) return;
    const end = e.changedTouches[0]?.clientX ?? start;
    const delta = end - start;
    if (delta <= -SWIPE_THRESHOLD) next();
    else if (delta >= SWIPE_THRESHOLD) prev();
  };

  const variants = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0.4 }),
        animate: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0.4 }),
      };

  return (
    <div
      ref={containerRef}
      className="project-carousel"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${alt} (${index + 1} / ${total})`}
    >
      <div className="project-carousel__track">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={index}
            src={images[index]}
            alt={alt}
            loading="lazy"
            draggable={false}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: EASE }}
          />
        </AnimatePresence>
      </div>

      <button
        type="button"
        className="project-carousel__btn project-carousel__btn--prev"
        onClick={prev}
        aria-label={copy.prev}
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        className="project-carousel__btn project-carousel__btn--next"
        onClick={next}
        aria-label={copy.next}
      >
        <ChevronRight size={18} />
      </button>

      <div className="project-carousel__dots" role="tablist">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`project-carousel__dot${i === index ? ' is-active' : ''}`}
            onClick={() => goTo(i, i > index ? 1 : -1)}
            role="tab"
            aria-selected={i === index}
            aria-label={copy.slide(i + 1, total)}
          />
        ))}
      </div>
    </div>
  );
}
