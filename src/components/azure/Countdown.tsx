import { useEffect, useState } from "react";
import { StarIcon } from "./LineArt";

/** 8 August 2026, 18:30 Gulf time. */
const TARGET = new Date("2026-08-08T18:30:00+04:00").getTime();

function parts(ms: number) {
  const clamped = Math.max(ms, 0);
  const s = Math.floor(clamped / 1000);
  return [
    { label: "Days", ar: "يوم", value: Math.floor(s / 86400) },
    { label: "Hours", ar: "ساعة", value: Math.floor((s % 86400) / 3600) },
    { label: "Minutes", ar: "دقيقة", value: Math.floor((s % 3600) / 60) },
    { label: "Seconds", ar: "ثانية", value: s % 60 },
  ];
}

/** Soft repeating arabesque wave used as the woven hem inside each card. */
function WovenHem({ delay = "0s", opacity = 0.45 }: { delay?: string; opacity?: number }) {
  return (
    <div
      className="animate-tide-fill absolute bottom-0 left-0 h-16 w-[150%]"
      style={{ animationDelay: delay, opacity }}
      aria-hidden
    >
      <svg viewBox="0 0 240 40" preserveAspectRatio="none" className="h-full w-full text-rose-madder">
        <path
          d="M0 18c20-14 40-14 60 0s40 14 60 0 40-14 60 0 40 14 60 0v22H0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = parts(now === null ? TARGET : TARGET - now);

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
      {units.map((u, i) => (
        <div key={u.label} className="tide-card group flex flex-col items-center px-3 py-9">
          {/* gold corner ticks */}
          <span className="absolute left-2 top-2 h-3 w-3 border-l border-t border-gold/50" />
          <span className="absolute right-2 top-2 h-3 w-3 border-r border-t border-gold/50" />
          <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-gold/50" />
          <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-gold/50" />

          <StarIcon
            className="animate-glint h-5 w-5 text-gold"
            style={{ animationDelay: `${i * 0.6}s` }}
          />

          <span
            className="font-display relative z-10 mt-5 text-[clamp(2.1rem,6vw,3.5rem)] leading-none tracking-widest text-cream tabular-nums"
            suppressHydrationWarning
          >
            {String(u.value).padStart(2, "0")}
          </span>

          <span className="gold-rule relative z-10 mt-4 w-8" />
          <span className="arabic relative z-10 mt-3 text-lg text-gold-soft">{u.ar}</span>
          <span className="eyebrow relative z-10 mt-1 text-cream/80">{u.label}</span>

          <WovenHem delay={`${i * 1.1}s`} opacity={0.26} />
          <WovenHem delay={`${i * 1.1 + 2}s`} opacity={0.16} />
        </div>
      ))}
    </div>
  );
}
