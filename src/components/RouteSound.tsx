import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useSound } from '../hooks/useSound';
import { soundEngine } from '../utils/sound';

export function RouteSound() {
  const location = useLocation();
  const { play } = useSound();
  const isFirstMount = useRef(true);

  useEffect(() => {
    // Skip the very first render - we don't want a sound on initial page load
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    // Check if spotlight-select was played recently (within 150ms) to avoid double-sound
    if (soundEngine.wasRecentlyPlayed('spotlight-select', 150)) {
      return;
    }

    // Play navigate sound for subsequent pathname changes
    play('navigate');
  }, [location.pathname, play]);

  // This component renders nothing - it's just for side effects
  return null;
}
