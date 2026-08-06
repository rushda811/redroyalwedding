import { useMemo } from "react";

type Mote = {
  left: string;
  size: number;
  duration: string;
  delay: string;
  dx: string;
  petal: boolean;
};

function build(count: number, seed: number): Mote[] {
  return Array.from({ length: count }, (_, i) => {
    const r = (n: number) => ((Math.sin(seed + i * n) + 1) / 2) as number;
    return {
      left: `${(r(12.9898) * 100).toFixed(2)}%`,
      size: Number((3 + r(78.233) * 9).toFixed(2)),
      duration: `${(16 + r(43.14) * 22).toFixed(2)}s`,
      delay: `${(-r(93.98) * 30).toFixed(2)}s`,
      dx: `${((r(27.61) - 0.5) * 220).toFixed(2)}px`,
      petal: r(11.7) > 0.55,
    };
  });
}

/**
 * Floating rose petals + gold dust. Purely decorative, pointer-events none.
 */
export function Atmosphere({ count = 22, seed = 7 }: { count?: number; seed?: number }) {
  const motes = useMemo(() => build(count, seed), [count, seed]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {motes.map((m, i) => (
        <span
          key={i}
          className="animate-drift absolute bottom-[-12vh] block"
          style={{
            left: m.left,
            width: `${m.size}px`,
            height: `${(m.petal ? m.size * 1.6 : m.size * 0.5).toFixed(2)}px`,
            animationDuration: m.duration,
            animationDelay: m.delay,
            ["--dx" as string]: m.dx,
            borderRadius: m.petal ? "70% 0 70% 0" : "50%",
            background: m.petal
              ? "linear-gradient(140deg, oklch(0.62 0.19 26 / 0.9), oklch(0.44 0.17 24 / 0.4))"
              : "radial-gradient(circle, oklch(0.9 0.09 86 / 0.95), transparent 70%)",
            filter: m.petal ? "none" : "blur(0.4px)",
          }}
        />
      ))}
    </div>
  );
}


/** Soft warm light-leak wash for cinematic sections. */
export function LightLeak() {
  return (
    <div
      className="light-leak animate-breathe pointer-events-none absolute inset-0 mix-blend-screen"
      aria-hidden
    />
  );
}
