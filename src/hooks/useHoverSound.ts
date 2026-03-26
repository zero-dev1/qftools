import { useRef } from 'react';
import { useSound } from './useSound';

export function useHoverSound() {
  const { play } = useSound();
  const lastPlayedRef = useRef(0);

  const onMouseEnter = () => {
    const now = Date.now();
    // Throttle to max 1 sound per 100ms to prevent rapid-fire sounds
    if (now - lastPlayedRef.current > 100) {
      play('hover-tick');
      lastPlayedRef.current = now;
    }
  };

  return { onMouseEnter };
}
