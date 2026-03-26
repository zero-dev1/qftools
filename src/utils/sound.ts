import { generateTestTone } from './generateTestTones';

export class SoundEngine {
  private audioContext: AudioContext | null = null;
  private bufferCache: Map<string, AudioBuffer> = new Map();
  private masterVolume: number = 1;
  private lastPlayedAt: Map<string, number> = new Map();

  private ensureContext(): AudioContext {
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
    }
    return this.audioContext;
  }

  async preload(name: string, url: string): Promise<void> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.debug(`Sound not loaded: ${name} — file not found`);
        return;
      }
      
      const arrayBuffer = await response.arrayBuffer();
      const audioContext = this.ensureContext();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      
      this.bufferCache.set(name, audioBuffer);
    } catch (error) {
      console.debug(`Sound not loaded: ${name} — file not found`);
    }
  }

  play(name: string, volume: number = 0.3): void {
    if (!this.audioContext) {
      return; // Context not initialized, silently no-op
    }

    let buffer = this.bufferCache.get(name);
    
    // If buffer not found and we're in development, generate a test tone
    if (!buffer && import.meta.env.DEV) {
      buffer = this.generateTestToneForSound(name) || undefined;
    }
    
    if (!buffer) {
      return; // Sound not loaded, silently no-op
    }

    try {
      const source = this.audioContext.createBufferSource();
      const gainNode = this.audioContext.createGain();
      
      source.buffer = buffer;
      gainNode.gain.value = volume * this.masterVolume;
      
      source.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      source.start(0);
      
      // Track when this sound was played
      this.lastPlayedAt.set(name, Date.now());
    } catch (error) {
      console.warn(`Failed to play sound: ${name}`, error);
    }
  }

  setMasterVolume(vol: number): void {
    this.masterVolume = Math.max(0, Math.min(1, vol));
  }

  wasRecentlyPlayed(name: string, withinMs: number): boolean {
    const lastPlayed = this.lastPlayedAt.get(name);
    if (!lastPlayed) return false;
    return Date.now() - lastPlayed < withinMs;
  }

  private generateTestToneForSound(name: string): AudioBuffer | null {
    const audioContext = this.ensureContext();
    
    const testTones: Record<string, { frequency: number; duration: number }> = {
      'spotlight-open': { frequency: 800, duration: 0.08 },
      'spotlight-close': { frequency: 600, duration: 0.06 },
      'spotlight-select': { frequency: 1000, duration: 0.1 },
      'navigate': { frequency: 400, duration: 0.05 },
      'burn-whoosh': { frequency: 200, duration: 0.3 },
      'hover-tick': { frequency: 1200, duration: 0.02 },
    };
    
    const tone = testTones[name];
    if (!tone) return null;
    
    return generateTestTone(audioContext, tone.frequency, tone.duration);
  }
}

export const soundEngine = new SoundEngine();
