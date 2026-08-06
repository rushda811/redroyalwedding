import { useCallback, useEffect, useState } from "react";
import { Divider, ArabesqueIcon, MedallionIcon } from "./LineArt";
import { Atmosphere } from "./Atmosphere";
import { MUSIC_EVENT } from "./Music";

export const TIDE_EVENT = "loom:open";

/** Length of the seal-break + iris reveal. */
const OPEN_MS = 2200;

/**
 * The invitation seal. A deep-crimson carpet field lit like a lantern hall,
 * with a woven gold medallion at its centre. On touch the medallion breaks
 * open: girih rings ripple out, saffron light blooms, the song begins, and
 * the panel irises open to hand the guest the invitation.
 */
export function Opening() {
  const [visible, setVisible] = useState(true);
  const [opening, setOpening] = useState(false);

  const open = useCallback(() => {
    window.dispatchEvent(new Event(MUSIC_EVENT));
    setOpening((o) => {
      if (o) return o;
      window.setTimeout(() => {
        setVisible(false);
        setOpening(false);
      }, OPEN_MS);
      return true;
    });
  }, []);

  useEffect(() => {
    const replay = () => {
      setOpening(false);
      setVisible(true);
    };
    window.addEventListener(TIDE_EVENT, replay);
    return () => window.removeEventListener(TIDE_EVENT, replay);
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => void (document.body.style.overflow = "");
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && open()}
      aria-label="Open the invitation"
      className={`fixed inset-0 z-[80] cursor-pointer touch-manipulation overflow-hidden ${
        opening ? "iris-open" : ""
      }`}
    >
      {/* deep carpet field */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 42%, oklch(0.4 0.16 27) 0%, oklch(0.3 0.125 25) 45%, oklch(0.2 0.085 24) 100%)",
        }}
      />
      {/* woven lattice + lamplight */}
      <div className="girih pointer-events-none absolute inset-0 opacity-[0.5]" aria-hidden />
      <div className="lamplight pointer-events-none absolute inset-0 opacity-[0.34]" aria-hidden />
      <div
        className="lamplight-slow pointer-events-none absolute inset-0 opacity-[0.22]"
        aria-hidden
      />
      <Atmosphere count={16} seed={7} />
      <div className="grain pointer-events-none absolute inset-0 opacity-60" />
      <div className="vignette pointer-events-none absolute inset-0" />

      {/* the bloom of light released by the medallion */}
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[42vmax] w-[42vmax] -translate-x-1/2 -translate-y-1/2 rounded-full ${
          opening ? "bloom-burst" : "bloom-idle"
        }`}
        style={{
          background:
            "radial-gradient(circle, oklch(0.94 0.1 84 / 0.5) 0%, oklch(0.8 0.13 62 / 0.24) 32%, transparent 68%)",
        }}
        aria-hidden
      />

      {/* invitation copy + seal */}
      <div
        className={`relative flex h-full flex-col items-center justify-center px-6 text-center text-cream transition-all duration-[900ms] ease-out ${
          opening ? "scale-[1.08] opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative flex flex-col items-center">
          <p className="arabic text-[clamp(1.1rem,3vw,1.5rem)] text-gold-soft">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيم
          </p>

          <p className="arabic-display gold-text mt-6 text-[clamp(2.6rem,8vw,4.8rem)] leading-none">
            دعوة زفاف
          </p>

          <h2 className="display-xl mt-6 text-[clamp(1.4rem,4.2vw,2.5rem)] text-cream">
            Shaheen OP &amp; Alshida
          </h2>

          <div className="mt-7 text-gold-soft">
            <Divider>
              <ArabesqueIcon className="h-5 w-24" />
            </Divider>
          </div>

          <p className="label-line mt-7 text-[0.85rem] font-semibold tracking-[0.34em] text-cream">
            08 · 08 · 2026
          </p>

          {/* the medallion seal */}
          <div className="relative mt-14 flex h-36 w-36 items-center justify-center">
            <span
              className={`absolute inset-0 rounded-full border border-gold/45 ${
                opening ? "ring-out" : "ring-pulse"
              }`}
            />
            <span
              className={`absolute inset-3 rounded-full border border-gold/30 ${
                opening ? "ring-out-2" : "ring-pulse-2"
              }`}
            />
            <span
              className="seal-face relative flex h-24 w-24 items-center justify-center rounded-full text-gold"
              style={{
                background:
                  "radial-gradient(circle at 34% 28%, oklch(0.9 0.1 88 / 0.34), oklch(0.6 0.14 50 / 0.18) 58%, oklch(0.3 0.1 26 / 0.12) 100%)",
              }}
            >
              <span className="seal-sheen absolute inset-0 rounded-full" />
              <MedallionIcon className="h-11 w-11" />
            </span>
          </div>

          <p className="arabic mt-8 text-lg text-gold-soft">المس الختم لفتح الدعوة</p>
          <p className="label-line mt-2 text-[0.76rem] font-semibold tracking-[0.36em] text-cream/90">
            Touch the seal to open
          </p>
        </div>
      </div>
    </div>
  );
}
