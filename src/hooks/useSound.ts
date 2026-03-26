import { soundEngine } from '../utils/sound';
import { useSoundStore } from '../stores/soundStore';

export function useSound() {
  const { enabled, volume, toggle } = useSoundStore();

  const play = (name: string): void => {
    if (enabled) {
      soundEngine.play(name, volume);
    }
  };

  return {
    play,
    enabled,
    toggle,
  };
}
