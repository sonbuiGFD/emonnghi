import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useState } from 'react';

export function Typewriter({ texts, className = '' }: { texts: string[]; className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => texts[currentIndex].slice(0, latest));

  useEffect(() => {
    let isCancelled = false;

    const runTypewriterEffect = async () => {
      let index = 0;

      while (!isCancelled) {
        const currentText = texts[index];

        // Typing effect
        await animate(count, currentText.length, {
          type: 'tween',
          duration: 1.5,
          ease: 'easeInOut',
        });

        if (isCancelled) break;

        // Pause after typing
        await new Promise((resolve) => setTimeout(resolve, 300));

        if (isCancelled) break;

        // Deleting effect
        await animate(count, 0, {
          type: 'tween',
          duration: 1,
          ease: 'easeInOut',
        });

        if (isCancelled) break;

        // Pause before next text
        await new Promise((resolve) => setTimeout(resolve, 300));

        if (isCancelled) break;

        // Move to next text
        index = (index + 1) % texts.length;
        setCurrentIndex(index);
      }
    };

    runTypewriterEffect();

    return () => {
      isCancelled = true;
    };
  }, [count, texts]);

  return <motion.span className={className}>{displayText}</motion.span>;
}
