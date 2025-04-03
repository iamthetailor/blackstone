'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

type AnimationVariant = 
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out';

interface AnimateOnScrollProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function AnimateOnScroll({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.1,
  once = true,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px', // Start animation slightly before element enters viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  const getAnimationClass = () => {
    switch (variant) {
      case 'fade-up':
        return 'translate-y-10 opacity-0';
      case 'fade-down':
        return '-translate-y-10 opacity-0';
      case 'fade-left':
        return 'translate-x-10 opacity-0';
      case 'fade-right':
        return '-translate-x-10 opacity-0';
      case 'zoom-in':
        return 'scale-95 opacity-0';
      case 'zoom-out':
        return 'scale-105 opacity-0';
      default:
        return 'opacity-0';
    }
  };

  const getTransitionClass = () => {
    const delayClass = delay ? `delay-[${delay}ms]` : '';
    return `transition-all duration-700 ease-out ${delayClass}`;
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getTransitionClass()} ${
        isVisible ? 'translate-y-0 translate-x-0 scale-100 opacity-100' : getAnimationClass()
      }`}
    >
      {children}
    </div>
  );
} 