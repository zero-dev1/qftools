import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SoundStore {
  enabled: boolean;
  volume: number;
  toggle: () => void;
  setVolume: (v: number) => void;
}

export const useSoundStore = create<SoundStore>()(
  persist(
    (set) => ({
      enabled: false,
      volume: 0.3,
      toggle: () => set((state) => ({ enabled: !state.enabled })),
      setVolume: (v: number) => set({ volume: Math.max(0, Math.min(1, v)) }),
    }),
    {
      name: 'qftools-sound',
    }
  )
);
