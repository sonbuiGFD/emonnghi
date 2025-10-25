import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ value, className = '' }: { value: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest).toString());
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {displayValue}+
    </span>
  );
}

export default AnimatedCounter;
