# QFTools Sound Assets

These audio files power the optional sound system. All should be:
- Format: WebM (Opus codec) or MP3 fallback
- Duration: < 500ms (except burn-whoosh which can be ~1s)
- Size: < 50KB each
- Style: Crystalline, minimal, slightly reverbed — matching the glass-morphism UI

## Files needed:

| File | Trigger | Character |
|------|---------|-----------|
| `spotlight-open.webm` | Spotlight modal opens | Soft glass "pop" — short, airy, high-pitched tap |
| `spotlight-close.webm` | Spotlight modal closes | Softer/lower version of open — like a gentle release |
| `spotlight-select.webm` | Result selected in Spotlight | Subtle confirmation chime — clean, single tone |
| `navigate.webm` | Route change | Very faint swoosh — barely perceptible, fast |
| `burn-whoosh.webm` | Burn dashboard hero loads | Low ember-like whoosh — cinematic, warm, ~1s |
| `hover-tick.webm` | Hovering nav items | Ultra-short tick/click — like a glass marble tap |

## Generating these

You can create these with:
- **Figma Audio plugin** or **Chrome Music Lab**
- **ffmpeg** to convert and compress: `ffmpeg -i input.wav -c:a libopus -b:a 32k output.webm` 
- **Freesound.org** (CC0 sounds) + trimming in Audacity
- AI audio tools (ElevenLabs SFX, Stable Audio)

All files should be normalized to -12dB peak to avoid being jarring.
