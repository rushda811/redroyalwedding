import { useEffect, useMemo, useRef, useState } from "react";

export const MUSIC_EVENT = "loom:music";

export function Music() {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const startMusic = () => {
      const audio = ref.current;

      if (!audio) return;

      audio.volume = 0.65;

      audio
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch((error) => {
          console.log("Music autoplay blocked:", error);
        });
    };

    window.addEventListener(MUSIC_EVENT, startMusic);

    return () => {
      window.removeEventListener(MUSIC_EVENT, startMusic);
    };
  }, []);


  const bars = useMemo(() => [0, 0.18, 0.36, 0.12], []);


  return (
    <>
      <audio
        ref={ref}
        src="/music/birasaha.mp3"
        loop
        preload="auto"
      />


      <button
        type="button"
        aria-label={playing ? "Pause music" : "Play music"}
        onClick={() => {
          const audio = ref.current;

          if (!audio) return;

          if (audio.paused) {
            audio.volume = 0.65;

            audio.play()
              .then(() => setPlaying(true))
              .catch(console.log);

          } else {
            audio.pause();
            setPlaying(false);
          }
        }}

        className="glass-panel fixed bottom-6 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full text-gold transition-all duration-500 hover:bg-gold/20 sm:bottom-8 sm:right-8"
      >

        <span className="flex h-5 items-end gap-[3px]">

          {bars.map((delay, i) => (
            <span
              key={i}
              className={
                playing
                  ? "eq-bar block w-[3px] bg-current"
                  : "block w-[3px] bg-current"
              }

              style={{
                height: `${[10,18,14,20][i]}px`,
                animationDelay: `${delay}s`,
                transformOrigin: "bottom",
              }}
            />
          ))}

        </span>

      </button>
    </>
  );
}