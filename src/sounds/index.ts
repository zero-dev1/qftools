import { soundEngine } from '../utils/sound';

export const SOUND_MANIFEST = {
  'spotlight-open': '/sounds/spotlight-open.webm',
  'spotlight-close': '/sounds/spotlight-close.webm',
  'spotlight-select': '/sounds/spotlight-select.webm',
  'navigate': '/sounds/navigate.webm',
  'burn-whoosh': '/sounds/burn-whoosh.webm',
  'hover-tick': '/sounds/hover-tick.webm',
} as const;

export type SoundName = keyof typeof SOUND_MANIFEST;

export async function preloadAllSounds(): Promise<void> {
  const preloadPromises = Object.entries(SOUND_MANIFEST).map(([name, url]) =>
    soundEngine.preload(name, url)
  );
  
  await Promise.allSettled(preloadPromises);
}
