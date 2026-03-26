/**
 * DEVELOPMENT ONLY: Generate test tones for sound system testing
 * This creates simple oscillator tones when real audio files aren't available
 */

export function generateTestTone(
  audioContext: AudioContext,
  frequency: number,
  duration: number,
  _type: OscillatorType = 'sine'
): AudioBuffer {
  const sampleRate = audioContext.sampleRate;
  const numSamples = Math.floor(sampleRate * duration);
  const buffer = audioContext.createBuffer(1, numSamples, sampleRate);
  const channelData = buffer.getChannelData(0);

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    // Simple sine wave with envelope to avoid clicks
    const envelope = Math.exp(-t * 3); // Quick decay
    channelData[i] = Math.sin(2 * Math.PI * frequency * t) * envelope * 0.1; // Low volume
  }

  return buffer;
}
