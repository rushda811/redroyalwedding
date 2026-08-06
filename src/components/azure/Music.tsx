import { useEffect, useMemo, useRef, useState } from "react";
import songAsset from "@/assets/birasaha.mp3.asset.json";

/** Fired when the guest opens the invitation — starts the music. */
export const MUSIC_EVENT = "loom:music";

/**
 * Looping wedding song with a small gold equalizer toggle.
 * Autoplay is blocked until a gesture, so playback starts on the
 * seal touch (MUSIC_EVENT) and can be toggled at any time.
 */
export function Music() {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const start = () => {
      const el = ref.current;
      if (!el) return;
      el.volume = 0.65;
      void el
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };
    window.addEventListener(MUSIC_EVENT, start);
    return () => window.removeEventListener(MUSIC_EVENT, start);
  }, []);

  const bars = useMemo(() => [0, 0.18, 0.36, 0.12], []);

  return (
    <>
      <audio ref={audioRef} src="/music/birasaha.mp3" loop preload="auto" />
      <button
        type="button"
        aria-label={playing ? "Pause the music" : "Play the music"}
        onClick={() => {
          const el = ref.current;
          if (!el) return;
          if (el.paused) {
            el.volume = 0.65;
            void el.play().then(() => setPlaying(true));
          } else {
            el.pause();
            setPlaying(false);
          }
        }}
        className="glass-panel fixed bottom-6 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full text-gold transition-all duration-500 hover:bg-gold/20 sm:bottom-8 sm:right-8"
      >
        <span className="flex h-5 items-end gap-[3px]" aria-hidden>
          {bars.map((delay, i) => (
            <span
              key={i}
              className={playing ? "eq-bar block w-[3px] bg-current" : "block w-[3px] bg-current"}
              style={{
                height: `${[10, 18, 14, 20][i]}px`,
                animationDelay: `${delay}s`,
                transform: playing ? undefined : "scaleY(0.35)",
                transformOrigin: "bottom",
              }}
            />
          ))}
        </span>
      </button>
    </>
  );
}
